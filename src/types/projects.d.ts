export type Project = {
  title: string;
  description: string | React.ReactNode;
  images: string[];
  tools: Tools[];
  actions: Action[];
};

export type Action = {
  name: string;
  link: string;
};

export type Tool = {
  name: string;
  icon: string;
};

export type Projects = Project[];
