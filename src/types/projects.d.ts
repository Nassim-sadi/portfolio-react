export type Project = {
  title: string;
  description: string;
  images: string[];
  tools: Tools[];
  githubLink: string;
};

export type Tool = {
  name: string;
  icon: string;
};

export type Projects = Project[];
