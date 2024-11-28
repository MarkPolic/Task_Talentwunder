// src/types/index.ts
export interface JobExperience {
    title: string;
    company: string;
    organizationId:number;
    start: string;
    end: string;
  }
  
  export interface Candidate {
    id: number;
    name: string;
    email: string;
    position: string;
    experiences: JobExperience[];
  }
  