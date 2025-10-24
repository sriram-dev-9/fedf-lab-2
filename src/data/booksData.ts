export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  rating: number;
}

const booksData: Book[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    author: "Stephen Roy",
    description: "Full-stack development covers designing, building, and maintaining software applications.",
    rating: 4.8
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    rating: 4.5
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical story about following your dreams.",
    rating: 4.7
  }
];

export default booksData;
