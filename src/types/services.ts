export type Tool = {
  name: string;
  icon: string;
};

export type Service = {
  title: string;
  description: string;
  tools: Tool[];
  icon: React.ReactNode;
  Children?: Service[];
};
