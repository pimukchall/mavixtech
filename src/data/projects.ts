export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  images?: string[];
  tags?: string[];
  url?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "001",
    title: "Project Title",
    description: "Project description goes here.",
    imageUrl: "/projects/001/IMG_3968.JPG",
    images: [
      "/projects/001/IMG_3968.JPG",
      "/projects/001/IMG_3969.JPG",
      "/projects/001/IMG_3970.JPG",
      "/projects/001/IMG_3971.JPG",
      "/projects/001/IMG_3972.JPG",
      "/projects/001/IMG_3973.JPG",
      "/projects/001/IMG_3974.JPG",
      "/projects/001/IMG_3975.JPG",
    ],
    tags: ["Tag1", "Tag2"],
    featured: true,
  },
];

export default projects;
