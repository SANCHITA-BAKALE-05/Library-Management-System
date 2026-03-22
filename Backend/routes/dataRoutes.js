const express = require("express");
const router = express.Router();

const libraryBooksData = [
  {
    id: 1,
    title: "Data Structures in C",
    author: "E. Balagurusamy",
    category: "Programming",
    publishedYear: 2020,
    quantity: 12,
    rack: "A-12",
    status: "Available"
  },
  {
    id: 2,
    title: "Artificial Intelligence Basics",
    author: "Tom Taulli",
    category: "AI",
    publishedYear: 2021,
    quantity: 8,
    rack: "B-05",
    status: "Available"
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Software Engineering",
    publishedYear: 2008,
    quantity: 5,
    rack: "A-01",
    status: "Available"
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Software Engineering",
    publishedYear: 1999,
    quantity: 3,
    rack: "A-02",
    status: "Out of Stock"
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Programming",
    publishedYear: 2008,
    quantity: 10,
    rack: "C-01",
    status: "Available"
  },
  {
    id: 6,
    title: "Introduction to Algorithms",
    author: "Cormen, Leiserson, Rivest, Stein",
    category: "Algorithms",
    publishedYear: 2009,
    quantity: 4,
    rack: "A-15",
    status: "Available"
  },
  {
    id: 7,
    title: "Deep Learning",
    author: "Ian Goodfellow",
    category: "AI",
    publishedYear: 2016,
    quantity: 6,
    rack: "B-07",
    status: "Available"
  },
  {
    id: 8,
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Software Engineering",
    publishedYear: 1994,
    quantity: 2,
    rack: "A-05",
    status: "Available"
  },
  {
    id: 9,
    title: "The Rust Programming Language",
    author: "Steve Klabnik",
    category: "Programming",
    publishedYear: 2018,
    quantity: 7,
    rack: "C-04",
    status: "Available"
  },
  {
    id: 10,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    publishedYear: 1988,
    quantity: 15,
    rack: "D-01",
    status: "Available"
  },
  {
    id: 11,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    publishedYear: 2018,
    quantity: 20,
    rack: "E-10",
    status: "Available"
  }
];

router.get("/", (req, res) => {
  res.json(libraryBooksData);
});

module.exports = router;