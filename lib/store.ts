import { create } from 'zustand';

export interface ResumeState {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    id: string;
    school: string;
    degree: string;
    year: string;
  }>;
  skills: string[];
  actions: {
    updatePersonalInfo: (info: Partial<ResumeState['personalInfo']>) => void;
    addExperience: () => void;
    updateExperience: (id: string, exp: Partial<ResumeState['experience'][0]>) => void;
    addEducation: () => void;
    updateEducation: (id: string, edu: Partial<ResumeState['education'][0]>) => void;
  };
}

export const useResumeStore = create<ResumeState>((set) => ({
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  actions: {
    updatePersonalInfo: (info) =>
      set((state) => ({
        personalInfo: { ...state.personalInfo, ...info },
      })),
    addExperience: () =>
      set((state) => ({
        experience: [
          ...state.experience,
          {
            id: crypto.randomUUID(),
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            description: '',
          },
        ],
      })),
    updateExperience: (id, exp) =>
      set((state) => ({
        experience: state.experience.map((e) => (e.id === id ? { ...e, ...exp } : e)),
      })),
    addEducation: () =>
      set((state) => ({
        education: [
          ...state.education,
          {
            id: crypto.randomUUID(),
            school: '',
            degree: '',
            year: '',
          },
        ],
      })),
    updateEducation: (id, edu) =>
      set((state) => ({
        education: state.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
      })),
  },
}));
