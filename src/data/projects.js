// src/data/projects.js

export const projects = [
  {
    slug: "project1",
    title: "Shrek",
    location: "the swamp",
    coverImage: "/projects/shrek.jpg", // put the real image in public/projects/jewel.jpg
    gallery: [
        "/projects/shrek.jpg",  // main / first image
        "/projects/luffy.webp",
    ],
    summary: "sexiest mf ever.",
  },
  {
    slug: "project2",
    title: "Monkey D. Luffy",
    location: "Windmill Village",
    coverImage: "/projects/luffy.webp",
    gallery: [
      "/projects/luffy.webp",  // main / first image
      "/projects/gojo.jpg",
      "/projects/shrek.jpg",
      "/projects/jewel-4.jpg",
    ],
    summary: "Future king of the pirates.",
  },
  {
    slug: "project3",
    title: "Satoru Gojo",
    location: "Tokyo, Japan",
    coverImage: "/projects/gojo.jpg",
    gallery: [
      "/projects/jewel-cover.jpg",  // main / first image
      "/projects/jewel-2.jpg",
      "/projects/shrek.jpg",
    ],
    summary: "Strongest Jujutsu Sorcerer.",
  },
  {
    slug: "project4",
    title: "Twilight Sparkle",
    location: "Ponyville",
    coverImage: "/projects/twilight.webp",
    gallery: [
      "/projects/twilight.webp",  // main / first image
      "/projects/gojo.jpg",
      "/projects/jewel-3.jpg",
      "/projects/jewel-4.jpg",
      "/projects/shrek.jpg",
    ],
    summary: "big NERD",
  },
  {
    slug: "beans",
    title: "Beans",
    location: "Beans, USA",
    coverImage: "/projects/beans.webp",
    gallery: [
      "/projects/jewel-cover.jpg",  // main / first image
      "/projects/jewel-2.jpg",
      "/projects/jewel-3.jpg",
    ],
    summary: "too political.",
  },
];
