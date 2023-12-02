export type Experience = {
  from: string;
  to: string;
  jobTitle: string;
  company?: string;
  description: string;
};

export type Course = {
  name: string;
  school: string;
  to: string;
};

export type Skill = {
  name: string;
  observation?: string;
  startYear: number;
  level: string;
  icon: string;
  bg?: string;
};
