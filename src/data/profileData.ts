import { ProfileData } from '../types';

/**
 * Verified Personal Information for Ariful Islam Naime.
 * Note: Educational institution names and details are defined as editable constants below
 * to allow convenient updates or spelling corrections in source code.
 */

export const INSTITUTIONS = {
  tongiMadrasaBn: 'টঙ্গী দারুল উলূম মাদ্রাসা',
  tongiMadrasaEn: 'Tongi Darul Ulum Madrasa',
  tongiIftaBn: 'টঙ্গী কেন্দ্রীয় দারুল ইফতা',
  tongiIftaEn: 'Tongi Kendriya Darul Ifta',
  mahmudiaMadrasaBn: 'মাহমুদিয়া মাদ্রাসা, গাজীপুর',
  mahmudiaMadrasaEn: 'Mahmudia Madrasa, Gazipur',
  alHaiatulUlyaBn: 'আল-হাইআতুল উলয়া লিল-জামি‘আতিল কওমিয়া',
  alHaiatulUlyaEn: 'Al-Haiatul Ulya Lil-Jamiatil Qawmia',
  befaqBn: 'বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ',
  befaqEn: 'Befaqul Madarisil Arabia Bangladesh',
};

export const PROFILE_DATA: ProfileData = {
  fullNameBn: 'আরিফুল ইসলাম নাঈম',
  fullNameEn: 'Ariful Islam Naime',
  dateOfBirth: '01.01.2005',
  heightBn: '৬ ফুট',
  heightEn: '6 feet',
  complexionBn: 'শ্যামলা',
  complexionEn: 'Wheaten / Dusky (Shyamla)',
  physicalStatusBn: 'শারীরিকভাবে সম্পূর্ণ স্বাভাবিক ও সুস্থ',
  physicalStatusEn: 'Healthy and physically sound',
  maritalStatusBn: 'অবিবাহিত',
  maritalStatusEn: 'Never married',

  // Current & Permanent Addresses (Separate fields)
  currentAddressBn: 'বাদেকলমেশ্বর, জাতীয় বিশ্ব বিদ্যালয় (১৭০৪), গাজীপুর সিটি, গাজীপুর, ঢাকা।',
  currentAddressEn: 'Badekalamshwar, National University (1704), Gazipur City, Gazipur, Dhaka.',
  permanentAddressBn: 'পারতিতপরল, সারিয়াকান্দি, সারিয়াকান্দি, বগুড়া, রাজশাহী।',
  permanentAddressEn: 'Partitparal, Sariakandi, Sariakandi, Bogura, Rajshahi.',

  // Educational Qualifications
  education: [
    {
      degreeBn: 'দাওরায়ে হাদিস (তাকমীল)',
      degreeEn: 'Dawrah-e-Hadith (Takmil)',
      institutionBn: INSTITUTIONS.tongiMadrasaBn,
      institutionEn: INSTITUTIONS.tongiMadrasaEn,
      statusBn: 'সম্পন্ন',
      statusEn: 'Completed',
      boardBn: INSTITUTIONS.alHaiatulUlyaBn,
      boardEn: INSTITUTIONS.alHaiatulUlyaEn,
      noteBn: 'আল-হাইআতুল উলয়া লিল-জামি‘আতিল কওমিয়ার অধীনে দাওরায়ে হাদিস পরীক্ষা সম্পন্ন।',
      noteEn: 'Dawrah-e-Hadith examination under Al-Haiatul Ulya Lil-Jamiatil Qawmia.',
    },
    {
      degreeBn: 'তাখাচ্ছুস ফিল ফিকহ ওয়াল ইফতা',
      degreeEn: 'Takhasus fil Fiqh wal Ifta',
      institutionBn: INSTITUTIONS.tongiIftaBn,
      institutionEn: INSTITUTIONS.tongiIftaEn,
      statusBn: 'সম্পন্ন',
      statusEn: 'Completed',
      noteBn: 'উচ্চতর ইসলামিক আইনশাস্ত্র ও ফতোয়া গবেষণা সম্পন্ন।',
      noteEn: 'Specialized higher study in Islamic Jurisprudence and Fatwa.',
    },
  ],

  examinationBoards: {
    dawrahBoardBn: 'দাওরায়ে হাদিস পরীক্ষা: আল-হাইআতুল উলয়া লিল-জামি‘আতিল কওমিয়া',
    dawrahBoardEn: 'Dawrah-e-Hadith examination under Al-Haiatul Ulya Lil-Jamiatil Qawmia',
    mishkatBoardBn: 'মিশকাত পরীক্ষা: বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ',
    mishkatBoardEn: 'Mishkat examination under Befaqul Madarisil Arabia Bangladesh',
  },

  // Professional Background
  currentWorkplaceBn: INSTITUTIONS.mahmudiaMadrasaBn,
  currentWorkplaceEn: INSTITUTIONS.mahmudiaMadrasaEn,
  currentRoles: [
    {
      titleBn: 'সাধারণ শিক্ষক',
      titleEn: 'General Teacher',
    },
    {
      titleBn: 'কম্পিউটার অপারেটর',
      titleEn: 'Computer Operator',
    },
  ],
  employmentNotes: {
    computerOperatorSinceBn: '২০২১ সাল থেকে বিভিন্ন প্রতিষ্ঠানে দায়িত্বশীলতার সাথে কম্পিউটার ও আইটি পরিচালনা করে আসছেন।',
    computerOperatorSinceEn: 'Serving as Computer Operator across institutions since 2021.',
    madrasaSinceBn: 'মে ২০২৫ থেকে মাহমুদিয়া মাদ্রাসা, গাজীপুরে শিক্ষকতা ও কম্পিউটার পরিচালনায় কর্মরত।',
    madrasaSinceEn: 'Serving as Teacher & Computer Operator at Mahmudia Madrasa, Gazipur since May 2025.',
  },
  skillsAndInterestsBn: [
    'দ্বীনি ও ইলমী গবেষণা',
    'ইসলামিক ও জ্ঞানমূলক বই পাঠ',
    'কম্পিউটার ও আইটি বিষয়ক কাজ',
    'গ্রাফিক ডিজাইন',
  ],
  skillsAndInterestsEn: [
    'Islamic & scholarly research',
    'Reading books',
    'Computer and digital work',
    'Graphic design',
  ],

  // Family Background (Strictly distinct fields)
  fatherNameBn: 'মোঃ সুলতান আহমেদ',
  fatherNameEn: 'Md. Sultan Ahmed',
  fatherOccupationBn: 'চাকরিজীবী',
  fatherOccupationEn: 'Service Holder (Employed)',
  fatherReligionDetailsBn: 'জীবিত, মুসলিম ধর্মের অনুসারী ও হানাফী মাযহাব পালনকারী',
  fatherReligionDetailsEn: 'Alive, Practicing Muslim and follower of the Hanafi Madhhab',
  fatherPhone: '01614-324968',
  motherNameBn: 'মোসা: নার্গিস বেগম',
  motherNameEn: 'Mst. Nargis Begum',
  motherOccupationBn: 'গৃহিণী',
  motherOccupationEn: 'Homemaker (Alive)',
  siblingsBn: '১ জন ছোট বোন (মাদ্রাসায় অধ্যয়নরত)',
  siblingsEn: '1 Younger Sister (Studying in Madrasa)',
  familyStatusDetailsBn: 'পরিবারে আমিই সবচেয়ে বড় সন্তান। ধর্মীয় ও নৈতিক মূল্যবোধে বিশ্বাসী পরিবার।',
  familyStatusDetailsEn: 'I am the eldest child in the family. Rooted in Islamic and moral values.',

  // Faith and Personal Outlook (Exact user provided quote)
  faithQuoteBn: '“আল্লাহ উত্তম পরিকল্পনাকারী। আর তিনি ধৈর্যশীলদের ভালোবাসেন।”',
  faithQuoteEn: '“Allah is the best of planners, and He loves those who are patient.”',

  // Marriage Intentions & Expectations from Spouse
  desiredQualitiesBn: [
    'দ্বীনদার ও খোদাভীরু',
    'পূর্ণ শরয়ী পর্দা পালনকারী (হাত-পা মোজাসহ নিকাব)',
    'আলেমা বা হাফেজা অগ্রাধিকার (অন্য যেকোনো দ্বীনদারও গ্রহণযোগ্য)',
    'আমানতদার ও ধৈর্যশীল',
    'সরল ও অনাড়ম্বর জীবনযাপনে অভ্যস্ত',
    'নম্র, বিনয়ী ও শিষ্টাচারী',
  ],
  desiredQualitiesEn: [
    'Faithful & God-conscious (Taqwa-oriented)',
    'Observing full Shar’i purdah (Niqab with gloves and socks)',
    'Alimah / Hafizah preferred (or any devoted practicing sister)',
    'Trustworthy & Patient (Amanatdar & Sabirah)',
    'Accustomed to a simple and content lifestyle',
    'Gentle and respectful in conduct',
  ],
  expectationPurdahBn: 'পূর্ণ শরয়ী পর্দা (হাত-পা মোজাসহ নিকাব) মেনে চলা আবশ্যক।',
  expectationPurdahEn: 'Observance of complete Shar’i Purdah (Niqab including hand & foot coverings) is required.',
  expectationEducationBn: 'আলেমা কিংবা হাফেজা হলে অগ্রাধিকার, তবে যেকোনো দ্বীনদার ও সমঝদার হলেও চলবে।',
  expectationEducationEn: 'Preference for an Alimah or Hafizah; however, any devout and understanding practicing sister is welcomed.',
  expectationAgeBn: '১৮ – ২০ বছর (বা পাত্রের বয়স অনুযায়ী সামঞ্জস্যপূর্ণ স্ট্যান্ডার্ড বয়স)।',
  expectationAgeEn: '18 – 20 years (or standard age appropriate to the groom’s age).',
  expectationDistrictBn: 'কোনো জেলা বা অঞ্চলের সীমাবদ্ধতা নেই (যেকোনো অঞ্চল গ্রহণযোগ্য)।',
  expectationDistrictEn: 'No district or regional restriction (Open to any region).',
  expectationLifestyleBn: 'সরল, অনাড়ম্বর জীবনযাপনে অভ্যস্ত এবং পারস্পরিক শ্রদ্ধাবোধে বিশ্বাসী।',
  expectationLifestyleEn: 'Accustomed to a simple lifestyle, valuing modesty and mutual respect.',
  futureAspirationBn: '“একটি নববী আদর্শে উজ্জীবিত পরিবার গড়ে তোলা।”',
  futureAspirationEn: '“To build a family inspired by the Prophetic example.”',
  financialInfoBn: 'আয়: আলোচনাসাপেক্ষ।',
  financialInfoEn: 'Income: Open for discussion.',

  // Contact Information
  publicEmail: 'www.naimeia1.com@gmail.com',
  contactPreferenceBn: 'অভিভাবকের মাধ্যমে যোগাযোগ কাম্য',
  contactPreferenceEn: 'Contact through the guardian is preferred.',
};
