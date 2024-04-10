import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Thura Htet Aung.',
  tagline: 'I create reliable cloud solutions and build scalable applications.',
  description:
    "I'm a passionate Site Reliability Engineer, Cloud Solution Architect, DevOps Engineer, and Backend Developer who wants to explore new technologies and solve real-world problems.",
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
