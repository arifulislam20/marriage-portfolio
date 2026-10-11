# Ariful Islam Naime — Islamic Marriage Portfolio

A bespoke, production-quality, personalized Islamic Marriage Portfolio website created for **Ariful Islam Naime (আরিফুল ইসলাম নাঈম)**.

Designed with an **Islamic Luxury** aesthetic inspired by classical Islamic geometry, fine editorial typography, and an interactive real-time 3D WebGL environment built with **Three.js**.

---

## 1. Visual Identity & Color Theme

- **Primary Canvas**: Clean, prestigious White (`#FFFFFF` & `#FBFDFB`) for maximum readability, freshness, and dignified presentation.
- **Interspersed Islamic Emerald Accents**: Deep Royal Emerald (`#0E4331` & `#123C2B`) across featured hero message, section headers, badges, icons, and CTA callouts.
- **Metallic Gold Detailing**: Burnished Champagne Gold (`#B38E3F` & `#EBD399`) on seal emblems and fine accents.
- **Authentic Islamic Pattern**: Classical 8-pointed Islamic Star (*Khatam Sulayman*) rosette and Islamic arabesque lattice geometry.

### Typography
- **বাংলা ফন্ট**: *SutonnyOmj* (with SutonnyMJ, SolaimanLipi, Kalpurush fallbacks).
- **English Font**: *Times New Roman* (with Times, serif fallbacks).
- **আরবী ফন্ট**: *Traditional Arabic* (with Amiri, Scheherazade New, serif fallbacks).

---

## 2. Refined Editorial Hero Presentation

The hero section features a dignified, centered editorial composition:
- **Islamic Invocation & Calligraphic Crest**: Embossed gold and royal emerald emblem with classical Bismillah typography.
- **Personal Introduction Card**: Rich emerald statement container framing the verified marriage intentions.
- **Verified Highlight Grid**: Quick cards highlighting Dawrah-e-Hadith scholarship, workplace at Mahmudia Madrasa, age/birth, and Prophetic family aspirations.
- **Scroll Action**: Smooth scroll indicator directing visitors to detailed credentials.

---

## 3. Verified Profile Information

All personal details are embedded in the source code (`src/data/profileData.ts`):
- **Full Name**: Ariful Islam Naime / আরিফুল ইসলাম নাঈম
- **Date of Birth**: 01.01.2005 (Age: ~21 years)
- **Height**: 6 feet / ৬ ফুট
- **Marital Status**: Never married / অবিবাহিত
- **Current Address**: বাদেকলমেশ্বর, জাতীয় বিশ্ব বিদ্যালয় (১৭০৪), গাজীপুর সিটি, গাজীপুর, ঢাকা।
- **Permanent Address**: পারতিতপরল, সারিয়াকান্দি, সারিয়াকান্দি, বগুড়া, রাজশাহী। *(Strictly separate fields with distinct labels)*
- **Islamic Education**:
  - Dawrah-e-Hadith (Takmil) — *Tongi Darul Ulum Madrasa* (Completed)
  - Takhasus fil Fiqh wal Ifta — *Tongi Kendriya Darul Ifta* (Completed)
  - Examination Boards: *Al-Haiatul Ulya Lil-Jamiatil Qawmia* & *Befaqul Madarisil Arabia Bangladesh*
- **Professional Background**:
  - Workplace: *Mahmudia Madrasa, Gazipur* (Employed since May 2025)
  - Roles: *General Teacher* & *Computer Operator*
  - Experience: Worked as a computer operator since 2021.
  - Skills: Computer & digital work, Graphic design, Arabic & English calligraphy, Typography.
- **Family Background**:
  - Father: মোঃ সুলতান আহমেদ | Occupation: চাকরিজীবী | Phone: `01614-324968` *(Clickable tel: link)*
  - Mother: মোসা: নার্গিস বেগম
  - Siblings: ১ বোন (1 Sister)
- **Faith & Personal Outlook**:
  - Exact Quote: “আল্লাহ উত্তম পরিকল্পনাকারী। আর তিনি ধৈর্যশীলদের ভালোবাসেন।” / *“Allah is the best of planners, and He loves those who are patient.”*
- **Marriage Intentions**:
  - Desired Qualities: দ্বীনদার, আমানতদার, ধৈর্যশীল, সুন্দরী, খোদাভীরু, নম্র ও ভদ্র
  - Future Aspiration: “একটি নববী আদর্শে উজ্জীবিত পরিবার গড়ে তোলা।”
  - Financial Info: “আয়: আলোচনাসাপেক্ষ।” (Income: Open for discussion)
- **Contact & Guardian**:
  - Preferred Arrangement: Contact through the guardian.
  - Guardian Phone: `01614-324968`
  - Public Email: `www.naimeia1.com@gmail.com` *(Notice to verify inbox deliverability before public sharing)*

---

## 4. Multi-Photo Gallery & Standalone HTML Exporter

- **Multi-File Selection**: Select multiple JPEG, PNG, or WebP images in one action.
- **Local Browser Privacy**: Photos are processed directly in browser memory (`FileReader` data URLs); zero images are uploaded to any external server.
- **Interactive Gallery**: Responsive editorial grid, fullscreen lightbox modal with next/prev navigation, individual image removal, order adjustment, and clear all.
- **Standalone HTML Export**: Click the *"Export Standalone HTML"* button to generate a self-contained single `.html` document with all selected photographs embedded as base64 data URLs. This file can be saved and opened offline on any computer or phone without an internet connection or web server.

---

## 5. Print & PDF Support

- Integrated **Save as PDF / Print** button in the top navigation bar.
- Professional print stylesheet (`@media print`):
  - Automatically switches to a clean white background with high-contrast dark text.
  - Hides web-only controls, 3D canvas, buttons, and upload zones.
  - Retains all profile sections, addresses, family details, education timeline, and selected gallery photographs.

---

## 6. Installation, Execution & Deployment

### Prerequisites
- Node.js (version 18+ or 20+)
- npm or pnpm

### Local Development
```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Open browser at http://localhost:3000
```

### Production Build
```bash
# Type check and build optimized bundle
npm run build

# Preview production build locally
npm run preview
```

### Deployment
The production build outputs to the `dist/` directory. It can be hosted on any static hosting platform:
- Vercel (`vercel deploy`)
- Cloudflare Pages
- Netlify (`netlify deploy --dir=dist`)
- GitHub Pages

---

## 7. Verification & Testing Checklist

| Feature | Status | Notes |
| :--- | :---: | :--- |
| **Bilingual Toggle (BN / EN)** | **PASSED** | Bengali as default; instant toggle across all sections, labels, buttons, and notices with no layout shift. |
| **Real-time 3D WebGL Scene** | **PASSED** | Rendered via Three.js with emerald faceted gem, 3 independent metallic orbital rings, golden dust particles, and fallback. |
| **Interactive 3D Controls** | **PASSED** | Camera presets (*Center*, *Orbit*, *Angle*), play/pause rotation, and mouse/touch drag manipulation with damping. |
| **Verified Personal Details** | **PASSED** | Name, DOB (01.01.2005), Height (6ft), Marital status (Never married) accurately formatted. |
| **Current vs. Permanent Address** | **PASSED** | Strictly separate fields with distinct labels, accurate to supplied locations without conflation. |
| **Islamic Education Timeline** | **PASSED** | Dawrah-e-Hadith (Completed), Takhasus fil Fiqh (Completed), Al-Haiatul Ulya and Befaq boards. Names cleanly editable in code. |
| **Professional Background** | **PASSED** | Mahmudia Madrasa (May 2025+), Teacher & Computer Operator, computer experience since 2021, verified skills. |
| **Family Details Separation** | **PASSED** | Father's name, occupation, and phone (`01614-324968`) rendered in 3 separate fields with clickable `tel:` link. |
| **Faith Statement** | **PASSED** | Exact quote rendered with ornamental gold crest: “আল্লাহ উত্তম পরিকল্পনাকারী। আর তিনি ধৈর্যশীলদের ভালোবাসেন।” |
| **Marriage Preferences** | **PASSED** | Desired qualities, prophetic family aspiration, and “আয়: আলোচনাসাপেক্ষ” income notice correctly presented. |
| **Multi-Photo Upload** | **PASSED** | Supports multiple JPEG/PNG/WebP selection, instant previews, lightbox view, ordering, and deletion. |
| **Standalone HTML Export** | **PASSED** | Generates self-contained `.html` file with embedded base64 photographs for independent offline viewing. |
| **Print / Save as PDF** | **PASSED** | Dedicated print stylesheet hides navigation and 3D scene, rendering clean black-on-white editorial biodata. |
| **Contact Links** | **PASSED** | Clickable `tel:01614324968`, `mailto:www.naimeia1.com@gmail.com`, and deliverability notice. |
| **TypeScript & Build Verification** | **PASSED** | Zero TypeScript compilation errors (`tsc --noEmit`), Vite production build succeeded. |
