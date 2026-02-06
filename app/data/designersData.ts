export type Designer = {
  id: number;
  name: string;
  bio: string;
  image: string;
};

export const designers: Designer[] = [
  {
    id: 1,
    name: "Sofia Martinez",
    bio: "Interior designer specializing in modern and Scandinavian spaces.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    id: 2,
    name: "James Chen",
    bio: "Focused on warm, functional interiors with natural materials.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    id: 3,
    name: "Elena Rossi",
    bio: "Luxury interior designer with a passion for elegant, timeless homes.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
];
