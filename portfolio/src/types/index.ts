export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  image: string;

  social: {
    github: string;
    linkedin: string;
    facebook: string;
    x: string;
  };

  resume: string;
  availability: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}