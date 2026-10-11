import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Accept large payloads for images (up to 50MB)
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // API to save permanent photos
  app.post('/api/save-photos', (req, res) => {
    try {
      const { images } = req.body;
      if (!Array.isArray(images)) {
        return res.status(400).json({ error: 'Images must be an array' });
      }

      const jsonDir = path.resolve(__dirname, 'src', 'data');
      if (!fs.existsSync(jsonDir)) {
        fs.mkdirSync(jsonDir, { recursive: true });
      }
      const jsonPath = path.join(jsonDir, 'permanentPhotos.json');

      if (images.length === 0) {
        fs.writeFileSync(jsonPath, JSON.stringify([], null, 2), 'utf-8');
        return res.json({ success: true, photos: [] });
      }

      const publicPhotosDir = path.resolve(__dirname, 'public', 'photos');
      if (!fs.existsSync(publicPhotosDir)) {
        fs.mkdirSync(publicPhotosDir, { recursive: true });
      }

      const savedList: Array<{ id: string; url: string; name: string }> = [];

      images.forEach((img, idx) => {
        const matches = img.dataUrl.match(/^data:image\/(\w+);base64,(.+)$/);
        const ext = matches ? (matches[1] === 'jpeg' ? 'jpg' : matches[1]) : 'jpg';
        const base64Data = matches ? matches[2] : img.dataUrl.replace(/^data:image\/\w+;base64,/, '');
        const filename = `permanent_photo_${idx + 1}.${ext}`;
        const filepath = path.join(publicPhotosDir, filename);

        fs.writeFileSync(filepath, Buffer.from(base64Data, 'base64'));
        savedList.push({
          id: `perm_${idx + 1}`,
          url: `/photos/${filename}`,
          name: img.name || `Photo ${idx + 1}`,
        });
      });

      // Write to src/data/permanentPhotos.json so it's committed to the app
      fs.writeFileSync(jsonPath, JSON.stringify(savedList, null, 2), 'utf-8');

      console.log(`Saved ${savedList.length} permanent photos to ${publicPhotosDir}`);
      return res.json({ success: true, photos: savedList });
    } catch (err: any) {
      console.error('Error saving permanent photos:', err);
      return res.status(500).json({ error: err.message });
    }
  });

  // API to fetch permanent photos
  app.get('/api/permanent-photos', (_req, res) => {
    try {
      const jsonPath = path.resolve(__dirname, 'src', 'data', 'permanentPhotos.json');
      if (fs.existsSync(jsonPath)) {
        const content = fs.readFileSync(jsonPath, 'utf-8');
        const list = JSON.parse(content);
        return res.json({ photos: list });
      }
      return res.json({ photos: [] });
    } catch (err: any) {
      return res.json({ photos: [] });
    }
  });

  // Serve static public folder explicitly
  app.use(express.static(path.resolve(__dirname, 'public')));

  // In development, mount Vite's middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Marriage Portfolio Full-Stack Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
