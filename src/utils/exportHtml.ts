import { ProfileData, GalleryImage, Language } from '../types';

export function exportStandaloneHtml(
  profile: ProfileData,
  images: GalleryImage[],
  lang: Language = 'bn'
): void {
  const isBn = lang === 'bn';

  // Construct images markup
  const imagesMarkup = images.length > 0
    ? images.map((img, idx) => `
        <div class="photo-card">
          <div class="photo-wrapper">
            <img src="${img.dataUrl}" alt="Photo ${idx + 1}" loading="lazy" />
          </div>
          <div class="photo-caption">${isBn ? `ছবি ${idx + 1}` : `Photograph ${idx + 1}`}</div>
        </div>
      `).join('')
    : `<div class="empty-gallery-note">${isBn ? 'কোনো ছবি সংযুক্ত করা হয়নি।' : 'No photographs attached yet.'}</div>`;

  const htmlContent = `<!DOCTYPE html>
<html lang="${isBn ? 'bn' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${isBn ? profile.fullNameBn : profile.fullNameEn} — ${isBn ? 'বিবাহের উদ্দেশ্যে জীবনবৃত্তান্ত' : 'Islamic Marriage Portfolio'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@400;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-page: #FFFFFF;
      --bg-card: #FFFFFF;
      --bg-sub: #FAF0F2;
      --emerald: #4A1420;
      --emerald-dark: #340B13;
      --gold: #C89B3C;
      --gold-light: #E8CE96;
      --text-main: #220D12;
      --text-muted: #543940;
      --border-emerald: rgba(14, 67, 49, 0.18);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: ${isBn ? "'SutonnyOmj', 'SutonnyMJ', 'SolaimanLipi', 'Kalpurush', 'Times New Roman', Times, serif" : "'Times New Roman', 'SutonnyOmj', 'SutonnyMJ', Times, serif"};
      line-height: 1.6;
      padding: 0;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }
    .bengali-text { font-family: 'SutonnyOmj', 'SutonnyMJ', 'SolaimanLipi', 'Kalpurush', 'Noto Serif Bengali', serif !important; }
    .display-text { font-family: 'Times New Roman', Times, serif !important; }
    .arabic-text { font-family: 'Traditional Arabic', 'Amiri', 'Scheherazade New', serif !important; }
    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 40px 24px;
    }
    header.hero-header {
      text-align: center;
      padding: 48px 24px;
      margin-bottom: 40px;
      border-radius: 16px;
      background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
      color: #FFFFFF;
      border: 1px solid var(--gold);
      position: relative;
      box-shadow: 0 8px 24px -4px rgba(14, 67, 49, 0.25);
    }
    .crest-icon {
      width: 64px;
      height: 64px;
      margin: 0 auto 16px;
      border: 2px solid var(--gold-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gold-light);
      font-size: 28px;
    }
    h1.hero-name {
      font-size: 34px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 12px;
    }
    .hero-tagline {
      font-size: 16px;
      color: #F5EFDF;
      max-width: 680px;
      margin: 0 auto 20px;
      font-style: italic;
    }
    .section-card {
      background: var(--bg-card);
      border: 1px solid var(--border-emerald);
      border-radius: 14px;
      padding: 28px 32px;
      margin-bottom: 28px;
      box-shadow: 0 4px 16px -2px rgba(14, 67, 49, 0.05);
    }
    .section-title {
      font-size: 20px;
      font-weight: 700;
      color: var(--emerald);
      border-bottom: 2px solid var(--border-emerald);
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }
    .info-field {
      padding: 14px 18px;
      background: var(--bg-sub);
      border-radius: 10px;
      border: 1px solid var(--border-emerald);
    }
    .info-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--emerald);
      margin-bottom: 4px;
      font-weight: 700;
    }
    .info-value {
      font-size: 15px;
      color: var(--text-main);
      font-weight: 600;
      word-break: break-word;
    }
    .faith-quote-box {
      text-align: center;
      padding: 36px 24px;
      background: linear-gradient(135deg, var(--emerald) 0%, var(--emerald-dark) 100%);
      color: #FFFFFF;
      border: 2px solid var(--gold);
      border-radius: 14px;
      margin: 28px 0;
      box-shadow: 0 8px 24px -4px rgba(14, 67, 49, 0.2);
    }
    .faith-quote-text {
      font-size: 24px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 8px;
    }
    .faith-quote-sub {
      font-size: 15px;
      color: var(--gold-light);
    }
    .qualities-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 12px;
      list-style: none;
      padding: 0;
    }
    .quality-item {
      padding: 12px 16px;
      background: var(--bg-sub);
      border-radius: 8px;
      border: 1px solid var(--border-emerald);
      color: var(--text-main);
      font-weight: 600;
    }
    /* Photos Gallery Grid */
    .photos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .photo-card {
      background: #FFFFFF;
      border: 1px solid var(--border-emerald);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(14, 67, 49, 0.06);
    }
    .photo-wrapper {
      width: 100%;
      height: 280px;
      background: #f0f7f4;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .photo-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .photo-caption {
      padding: 10px 14px;
      font-size: 13px;
      color: var(--emerald);
      font-weight: 600;
      text-align: center;
    }
    .empty-gallery-note {
      text-align: center;
      padding: 24px;
      color: var(--text-muted);
      font-style: italic;
    }
    a.tel-link {
      color: var(--emerald);
      text-decoration: none;
      font-weight: 700;
    }
    a.tel-link:hover {
      text-decoration: underline;
    }
    footer.doc-footer {
      text-align: center;
      padding: 32px 0 48px;
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid var(--border-emerald);
      margin-top: 40px;
    }
    @media print {
      body {
        background: #ffffff !important;
        color: #111827 !important;
      }
      .section-card {
        background: #ffffff !important;
        border: 1px solid #d1d5db !important;
        color: #111827 !important;
        page-break-inside: avoid;
      }
      .info-field, .quality-item, .photo-card {
        background: #f9fafb !important;
        border: 1px solid #e5e7eb !important;
        color: #111827 !important;
      }
      .info-value, .hero-tagline, .faith-quote-text {
        color: #111827 !important;
      }
      .info-label, .section-title {
        color: #92400e !important;
      }
      .hero-header {
        background: #fdfbf7 !important;
        border: 1px solid #d1d5db !important;
      }
      a.tel-link {
        color: #111827 !important;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="hero-header">
      <div class="crest-icon">✦</div>
      <h1 class="hero-name ${isBn ? 'bengali-text' : 'display-text'}">
        ${isBn ? profile.fullNameBn : profile.fullNameEn}
      </h1>
      <p class="hero-tagline ${isBn ? 'bengali-text' : ''}">
        ${isBn
          ? '“বিবাহের উদ্দেশ্যে আমার সংক্ষিপ্ত পরিচিতি। দ্বীন, আমানতদারি, ধৈর্য ও পারস্পরিক সম্মানের ভিত্তিতে একটি সুন্দর পরিবার গড়ে তোলাই আমার প্রত্যাশা।”'
          : '“A personal introduction for the purpose of marriage. I hope to build a family grounded in faith, trustworthiness, patience, and mutual respect.”'}
      </p>
      <div style="font-size: 13px; color: var(--gold); letter-spacing: 0.05em;">
        ${isBn ? 'অবিবাহিত · ৬ ফুট · জন্ম: ০১.০১.২০০৫' : 'Never Married · 6 Feet · Born: 01.01.2005'}
      </div>
    </header>

    <!-- 1. Personal Information -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'ব্যক্তিগত তথ্যাবলি' : 'Personal Information'}</span>
      </h2>
      <div class="info-grid">
        <div class="info-field">
          <div class="info-label">${isBn ? 'পূর্ণ নাম' : 'Full Name'}</div>
          <div class="info-value ${isBn ? 'bengali-text' : ''}">
            ${isBn ? profile.fullNameBn : profile.fullNameEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'জন্ম তারিখ' : 'Date of Birth'}</div>
          <div class="info-value">01.01.2005</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'উচ্চতা' : 'Height'}</div>
          <div class="info-value">${isBn ? profile.heightBn : profile.heightEn}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'গায়ের রঙ ও স্বাস্থ্য' : 'Complexion & Physical Status'}</div>
          <div class="info-value">${isBn ? `${profile.complexionBn} · ${profile.physicalStatusBn || 'সুস্থ ও স্বাভাবিক'}` : `${profile.complexionEn} · ${profile.physicalStatusEn || 'Healthy and sound'}`}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'বৈবাহিক অবস্থা' : 'Marital Status'}</div>
          <div class="info-value">${isBn ? profile.maritalStatusBn : profile.maritalStatusEn}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'ধর্মীয় আদর্শ' : 'Religious Ideology'}</div>
          <div class="info-value">${isBn ? 'ইসলাম (হানাফী মাযহাব)' : 'Islam (Hanafi Madhhab)'}</div>
        </div>
      </div>
    </section>

    <!-- 2. Address Details (Strictly Separate Fields) -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'ঠিকানা বিবরণী' : 'Address Details'}</span>
      </h2>
      <div class="info-grid" style="grid-template-columns: 1fr;">
        <div class="info-field">
          <div class="info-label">${isBn ? 'বর্তমান ঠিকানা (Current Address)' : 'Current Address'}</div>
          <div class="info-value ${isBn ? 'bengali-text' : ''}">
            ${isBn ? profile.currentAddressBn : profile.currentAddressEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'স্থায়ী ঠিকানা (Permanent Address)' : 'Permanent Address'}</div>
          <div class="info-value ${isBn ? 'bengali-text' : ''}">
            ${isBn ? profile.permanentAddressBn : profile.permanentAddressEn}
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Islamic Educational Qualifications -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'ইসলামিক শিক্ষাগত যোগ্যতা' : 'Islamic Educational Qualifications'}</span>
      </h2>
      <div class="info-grid">
        ${profile.education.map(edu => `
          <div class="info-field">
            <div class="info-label">${isBn ? edu.degreeBn : edu.degreeEn}</div>
            <div class="info-value" style="font-weight: 600; margin-bottom: 4px;">
              ${isBn ? edu.institutionBn : edu.institutionEn}
            </div>
            <div style="font-size: 13px; color: var(--gold-light);">
              ${isBn ? `অবস্থা: ${edu.statusBn}` : `Status: ${edu.statusEn}`}
            </div>
            ${edu.noteBn ? `<div style="font-size: 12px; color: var(--sage); margin-top: 4px;">${isBn ? edu.noteBn : edu.noteEn}</div>` : ''}
          </div>
        `).join('')}
      </div>
      <div style="margin-top: 16px; padding: 12px 16px; background: rgba(18, 60, 43, 0.25); border-radius: 8px; border: 1px solid rgba(215, 184, 117, 0.15);">
        <div class="info-label">${isBn ? 'পরীক্ষাগত প্রেক্ষিত' : 'Examination Board Background'}</div>
        <div class="info-value" style="font-size: 14px; margin-bottom: 4px;">
          • ${isBn ? profile.examinationBoards.dawrahBoardBn : profile.examinationBoards.dawrahBoardEn}
        </div>
        <div class="info-value" style="font-size: 14px;">
          • ${isBn ? profile.examinationBoards.mishkatBoardBn : profile.examinationBoards.mishkatBoardEn}
        </div>
      </div>
    </section>

    <!-- 4. Deeni Service & Skills -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'দ্বীনি খেদমত ও দক্ষতা' : 'Deeni Service & Skills'}</span>
      </h2>
      <div class="info-grid">
        <div class="info-field">
          <div class="info-label">${isBn ? 'বর্তমান কর্মস্থল ও খেদমত' : 'Current Workplace & Service'}</div>
          <div class="info-value" style="font-weight: 600;">
            ${isBn ? profile.currentWorkplaceBn : profile.currentWorkplaceEn}
          </div>
          <div style="font-size: 12px; color: var(--sage); margin-top: 4px;">
            ${isBn ? profile.employmentNotes.madrasaSinceBn : profile.employmentNotes.madrasaSinceEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'দ্বীনি দায়িত্বসমূহ' : 'Current Roles'}</div>
          <div class="info-value">
            ${profile.currentRoles.map(r => `<div>• ${isBn ? r.titleBn : r.titleEn}</div>`).join('')}
          </div>
        </div>
      </div>
      <div style="margin-top: 16px;">
        <div class="info-label" style="margin-bottom: 8px;">${isBn ? 'দক্ষতা ও বিশেষ আগ্রহ' : 'Skills & Interests'}</div>
        <div class="qualities-list">
          ${(isBn ? profile.skillsAndInterestsBn : profile.skillsAndInterestsEn).map(skill => `
            <div class="quality-item">${skill}</div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 5. Family Background (Strictly Separate Fields) -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'পারিবারিক পরিচয় ও বিবরণ' : 'Family Background'}</span>
      </h2>
      <div class="info-grid">
        <div class="info-field">
          <div class="info-label">${isBn ? 'পিতার নাম' : "Father's Name"}</div>
          <div class="info-value" style="font-weight: 600;">
            ${isBn ? profile.fatherNameBn : profile.fatherNameEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'পিতার পেশা ও ধর্মীয় বিশ্বাস' : "Father's Occupation & Faith"}</div>
          <div class="info-value">
            ${isBn ? `${profile.fatherOccupationBn} (${profile.fatherReligionDetailsBn || 'জীবিত, মুসলিম ধর্মের অনুসারী ও হানাফী মাযহাব পালনকারী'})` : `${profile.fatherOccupationEn} (${profile.fatherReligionDetailsEn || 'Alive, Practicing Muslim, Hanafi Madhhab'})`}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'পিতার মোবাইল (অভিভাবক)' : "Father's Phone Number (Guardian)"}</div>
          <div class="info-value">
            <a href="tel:${profile.fatherPhone.replace(/[^0-9]/g, '')}" class="tel-link">
              ${profile.fatherPhone}
            </a>
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'মাতার নাম ও অবস্থা' : "Mother's Name & Status"}</div>
          <div class="info-value" style="font-weight: 600;">
            ${isBn ? `${profile.motherNameBn} (${profile.motherOccupationBn || 'গৃহিণী, জীবিত'})` : `${profile.motherNameEn} (${profile.motherOccupationEn || 'Homemaker, Alive'})`}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'ভাই-বোন ও পরিবারে অবস্থান' : 'Siblings & Position'}</div>
          <div class="info-value">${isBn ? `${profile.siblingsBn} · বড় সন্তান` : `${profile.siblingsEn} · Eldest child`}</div>
        </div>
      </div>
    </section>

    <!-- 6. Faith & Personal Outlook -->
    <div class="faith-quote-box">
      <div class="faith-quote-text ${isBn ? 'bengali-text' : 'display-text'}">
        ${isBn ? profile.faithQuoteBn : profile.faithQuoteEn}
      </div>
      <div class="faith-quote-sub">
        ${isBn ? profile.faithQuoteEn : profile.faithQuoteBn}
      </div>
    </div>

    <!-- 7. Marriage Intentions & Desired Qualities -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'বিবাহের প্রত্যাশা ও পাত্রীর কাঙ্ক্ষিত গুণাবলি' : 'Marriage Intentions & Desired Qualities'}</span>
      </h2>
      <div class="qualities-list" style="margin-bottom: 20px;">
        ${(isBn ? profile.desiredQualitiesBn : profile.desiredQualitiesEn).map(q => `
          <div class="quality-item">• ${q}</div>
        `).join('')}
      </div>
      <div class="info-grid" style="margin-bottom: 20px;">
        <div class="info-field">
          <div class="info-label">${isBn ? '১. দ্বীনদারী ও পর্দা' : '1. Purdah & Deen'}</div>
          <div class="info-value">${isBn ? profile.expectationPurdahBn : profile.expectationPurdahEn}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? '২. শিক্ষাগত যোগ্যতা' : '2. Educational Qualification'}</div>
          <div class="info-value">${isBn ? profile.expectationEducationBn : profile.expectationEducationEn}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? '৩. বয়সসীমা' : '3. Expected Age'}</div>
          <div class="info-value">${isBn ? profile.expectationAgeBn : profile.expectationAgeEn}</div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? '৪. জেলা বা অঞ্চল' : '4. Region / District'}</div>
          <div class="info-value">${isBn ? profile.expectationDistrictBn : profile.expectationDistrictEn}</div>
        </div>
        <div class="info-field" style="grid-column: 1 / -1;">
          <div class="info-label">${isBn ? '৫. জীবনযাপন ও মানসিকতা' : '5. Lifestyle & Values'}</div>
          <div class="info-value">${isBn ? profile.expectationLifestyleBn : profile.expectationLifestyleEn}</div>
        </div>
      </div>
      <div class="info-grid">
        <div class="info-field">
          <div class="info-label">${isBn ? 'ভবিষ্যৎ লক্ষ্য ও অনুপ্রেরণা' : 'Future Family Aspiration'}</div>
          <div class="info-value ${isBn ? 'bengali-text' : ''}">
            ${isBn ? profile.futureAspirationBn : profile.futureAspirationEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'আর্থিক বিবরণ' : 'Financial Information'}</div>
          <div class="info-value" style="font-weight: 600;">
            ${isBn ? profile.financialInfoBn : profile.financialInfoEn}
          </div>
        </div>
      </div>
    </section>

    <!-- 8. Attached Photographs Gallery -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'সংযুক্ত আলোকচিত্রসমূহ' : 'Attached Photographs'} (${images.length})</span>
      </h2>
      <div class="photos-grid">
        ${imagesMarkup}
      </div>
    </section>

    <!-- 9. Contact & Guardian Information -->
    <section class="section-card">
      <h2 class="section-title">
        <span>${isBn ? 'যোগাযোগ ও অভিভাবক' : 'Contact & Guardian Information'}</span>
      </h2>
      <div class="info-grid">
        <div class="info-field">
          <div class="info-label">${isBn ? 'অভিভাবকের মোবাইল (পিতা)' : "Guardian's Phone (Father)"}</div>
          <div class="info-value">
            <a href="tel:${profile.fatherPhone.replace(/[^0-9]/g, '')}" class="tel-link">
              ${profile.fatherPhone}
            </a>
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'যোগাযোগের মাধ্যম' : 'Contact Arrangement'}</div>
          <div class="info-value">
            ${isBn ? profile.contactPreferenceBn : profile.contactPreferenceEn}
          </div>
        </div>
        <div class="info-field">
          <div class="info-label">${isBn ? 'পাবলিক ইমেইল' : 'Public Email'}</div>
          <div class="info-value">
            <a href="mailto:${profile.publicEmail}" class="tel-link">${profile.publicEmail}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer & Privacy Notice -->
    <footer class="doc-footer">
      <p style="margin-bottom: 8px;">
        ${isBn
          ? 'এই জীবনবৃত্তান্তটি শুধুমাত্র বিবাহের পবিত্র উদ্দেশ্যে সম্মান ও বিশ্বস্ততার সাথে প্রস্তুত করা হয়েছে।'
          : 'This portfolio has been respectfully compiled solely for the purpose of Islamic matrimony.'}
      </p>
      <p style="font-size: 12px; color: var(--gold);">
        ${isBn ? profile.fullNameBn : profile.fullNameEn} · ${new Date().toLocaleDateString()}
      </p>
    </footer>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Ariful_Islam_Naime_Marriage_Portfolio_${isBn ? 'BN' : 'EN'}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
