export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type ProjectsResponse = {
  allProjects: Project[];
};
