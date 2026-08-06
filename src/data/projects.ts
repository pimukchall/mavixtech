export type Solution = {
  name: string;
  detail: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  body?: string;
  solutions?: Solution[];
  imageUrl?: string;
  images?: string[];
  tags?: string[];
  url?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "001",
    title: "MAVIXTECH at Samui IT Club 2026",
    description:
      "MAVIXTECH participated as an exhibitor at Samui IT Club 2026, showcasing innovative technology solutions for IT professionals in the hospitality sector.",
    body: "MAVIXTECH was pleased to participate as an exhibitor at the Samui IT Club 2026 event, where we showcased innovative technology solutions and shared industry knowledge with IT professionals from the hospitality sector.\n\nWe sincerely thank Samui IT Club for the opportunity to participate in this event and extend our appreciation to all visitors who stopped by the MAVIXTECH booth to learn more about our solutions and exchange valuable insights. We look forward to supporting the hospitality industry with innovative and reliable technology solutions.",
    solutions: [
      {
        name: "WatchGuard",
        detail:
          "A comprehensive cybersecurity solution that helps hotels strengthen network security, protect critical data, and defend against evolving cyber threats.",
      },
      {
        name: "CodeSoft POS",
        detail:
          "A reliable and high-performance Point of Sale (POS) solution that streamlines restaurant operations, improves service efficiency, and supports continuous, stable performance in hotel environments.",
      },
      {
        name: "Smart Glass",
        detail:
          "An innovative smart glass solution that enhances the aesthetics, privacy, and functionality of hotel spaces, creating a modern and premium guest experience.",
      },
    ],
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
    tags: ["Cybersecurity", "POS", "Smart Glass", "Hospitality", "Event"],
    featured: true,
  },
];

export default projects;
