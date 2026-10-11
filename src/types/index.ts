export type Language = 'bn' | 'en';
export type Theme = 'emerald' | 'ivory';

export interface GalleryImage {
  id: string;
  dataUrl: string;
  name: string;
  size: number;
  addedAt: number;
}

export interface EducationItem {
  degreeBn: string;
  degreeEn: string;
  institutionBn: string;
  institutionEn: string;
  statusBn: string;
  statusEn: string;
  boardBn?: string;
  boardEn?: string;
  noteBn?: string;
  noteEn?: string;
}

export interface RoleItem {
  titleBn: string;
  titleEn: string;
}

export interface ProfileData {
  fullNameBn: string;
  fullNameEn: string;
  dateOfBirth: string; // 01.01.2005
  heightBn: string;
  heightEn: string;
  maritalStatusBn: string;
  maritalStatusEn: string;
  
  // Addresses (Strictly separate fields)
  currentAddressBn: string;
  currentAddressEn: string;
  permanentAddressBn: string;
  permanentAddressEn: string;

  // Education
  education: EducationItem[];
  examinationBoards: {
    dawrahBoardBn: string;
    dawrahBoardEn: string;
    mishkatBoardBn: string;
    mishkatBoardEn: string;
  };

  // Professional
  currentWorkplaceBn: string;
  currentWorkplaceEn: string;
  currentRoles: RoleItem[];
  employmentNotes: {
    computerOperatorSinceBn: string;
    computerOperatorSinceEn: string;
    madrasaSinceBn: string;
    madrasaSinceEn: string;
  };
  skillsAndInterestsBn: string[];
  skillsAndInterestsEn: string[];

  // Physical Attributes
  complexionBn?: string;
  complexionEn?: string;
  physicalStatusBn?: string;
  physicalStatusEn?: string;

  // Family Background (Distinct separate fields)
  fatherNameBn: string;
  fatherNameEn: string;
  fatherOccupationBn: string;
  fatherOccupationEn: string;
  fatherReligionDetailsBn?: string;
  fatherReligionDetailsEn?: string;
  fatherPhone: string; // 01614-324968
  motherNameBn: string;
  motherNameEn: string;
  motherOccupationBn?: string;
  motherOccupationEn?: string;
  siblingsBn: string;
  siblingsEn: string;
  familyStatusDetailsBn?: string;
  familyStatusDetailsEn?: string;

  // Faith & Outlook (Exact quote)
  faithQuoteBn: string;
  faithQuoteEn: string;

  // Marriage Intentions & Expectations from Spouse
  desiredQualitiesBn: string[];
  desiredQualitiesEn: string[];
  expectationPurdahBn?: string;
  expectationPurdahEn?: string;
  expectationEducationBn?: string;
  expectationEducationEn?: string;
  expectationAgeBn?: string;
  expectationAgeEn?: string;
  expectationDistrictBn?: string;
  expectationDistrictEn?: string;
  expectationLifestyleBn?: string;
  expectationLifestyleEn?: string;
  futureAspirationBn: string;
  futureAspirationEn: string;
  financialInfoBn: string;
  financialInfoEn: string;

  // Contact
  publicEmail: string; // www.naimeia1.com@gmail.com
  contactPreferenceBn: string;
  contactPreferenceEn: string;
}
