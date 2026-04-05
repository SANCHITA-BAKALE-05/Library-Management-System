// backend/scripts/seed.js
const mongoose = require("mongoose");
const Book = require("./models/Book"); // adjust path if needed

// Replace with your MongoDB Atlas connection string
const MONGO_URI ="mongodb://bakalesanchita43_db_user:NUm8CGDE1jQpNuL9@ac-xovqoww-shard-00-00.o41atsu.mongodb.net:27017,ac-xovqoww-shard-00-01.o41atsu.mongodb.net:27017,ac-xovqoww-shard-00-02.o41atsu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ks8b27-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const books = [
  { title: "Data Structures in C", author: "Reema Thareja", category: "Computer Science", publishedYear: 2015, quantity: 10 },
  { title: "Operating System Concepts", author: "Silberschatz", category: "Computer Science", publishedYear: 2018, quantity: 5 },
  { title: "Database System Concepts", author: "Korth", category: "Computer Science", publishedYear: 2019, quantity: 7 },
  { title: "Introduction to Algorithms", author: "Cormen", category: "Computer Science", publishedYear: 2009, quantity: 12 },
  { title: "Clean Code", author: "Robert C. Martin", category: "Software Engineering", publishedYear: 2008, quantity: 8 },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Software Engineering", publishedYear: 1999, quantity: 6 },
  { title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig", category: "AI", publishedYear: 2020, quantity: 9 },
  { title: "Deep Learning", author: "Ian Goodfellow", category: "AI", publishedYear: 2016, quantity: 4 },
  { title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", publishedYear: 2011, quantity: 7 },
  { title: "Modern Operating Systems", author: "Andrew S. Tanenbaum", category: "Computer Science", publishedYear: 2014, quantity: 5 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", publishedYear: 1925, quantity: 10 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", publishedYear: 1960, quantity: 12 },
  { title: "1984", author: "George Orwell", category: "Fiction", publishedYear: 1949, quantity: 15 },
  { title: "Brave New World", author: "Aldous Huxley", category: "Fiction", publishedYear: 1932, quantity: 9 },
  { title: "Moby Dick", author: "Herman Melville", category: "Fiction", publishedYear: 1851, quantity: 6 },
  { title: "War and Peace", author: "Leo Tolstoy", category: "Fiction", publishedYear: 1869, quantity: 5 },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "Fiction", publishedYear: 1813, quantity: 8 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", publishedYear: 1951, quantity: 7 },
  { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "History", publishedYear: 2014, quantity: 10 },
  { title: "Homo Deus", author: "Yuval Noah Harari", category: "History", publishedYear: 2016, quantity: 9 },
  { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", publishedYear: 1988, quantity: 11 },
  { title: "The Selfish Gene", author: "Richard Dawkins", category: "Science", publishedYear: 1976, quantity: 6 },
  { title: "Cosmos", author: "Carl Sagan", category: "Science", publishedYear: 1980, quantity: 7 },
  { title: "The Origin of Species", author: "Charles Darwin", category: "Science", publishedYear: 1859, quantity: 5 },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology", publishedYear: 2011, quantity: 10 },
  { title: "Man’s Search for Meaning", author: "Viktor Frankl", category: "Psychology", publishedYear: 1946, quantity: 8 },
  { title: "Atomic Habits", author: "James Clear", category: "Self-Help", publishedYear: 2018, quantity: 12 },
  { title: "The Power of Habit", author: "Charles Duhigg", category: "Self-Help", publishedYear: 2012, quantity: 9 },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", publishedYear: 1997, quantity: 15 },
  { title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance", publishedYear: 1949, quantity: 7 },
  { title: "Zero to One", author: "Peter Thiel", category: "Business", publishedYear: 2014, quantity: 6 },
  { title: "Lean Startup", author: "Eric Ries", category: "Business", publishedYear: 2011, quantity: 8 },
  { title: "The Innovator’s Dilemma", author: "Clayton Christensen", category: "Business", publishedYear: 1997, quantity: 5 },
  { title: "Good to Great", author: "Jim Collins", category: "Business", publishedYear: 2001, quantity: 9 },
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", publishedYear: 1988, quantity: 14 },
  { title: "The Kite Runner", author: "Khaled Hosseini", category: "Fiction", publishedYear: 2003, quantity: 10 },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", category: "Fiction", publishedYear: 2007, quantity: 8 },
  { title: "The Book Thief", author: "Markus Zusak", category: "Fiction", publishedYear: 2005, quantity: 7 },
  { title: "Life of Pi", author: "Yann Martel", category: "Fiction", publishedYear: 2001, quantity: 6 },
  { title: "The Road", author: "Cormac McCarthy", category: "Fiction", publishedYear: 2006, quantity: 5 },
  { title: "Beloved", author: "Toni Morrison", category: "Fiction", publishedYear: 1987, quantity: 4 },
  { title: "Invisible Man", author: "Ralph Ellison", category: "Fiction", publishedYear: 1952, quantity: 6 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "Fiction", publishedYear: 1866, quantity: 5 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", category: "Fiction", publishedYear: 1880, quantity: 4 },
  { title: "Don Quixote", author: "Miguel de Cervantes", category: "Fiction", publishedYear: 1605, quantity: 3 },
  { title: "Les Misérables", author: "Victor Hugo", category: "Fiction", publishedYear: 1862, quantity: 5 },
  { title: "The Divine Comedy", author: "Dante Alighieri", category: "Poetry", publishedYear: 1320, quantity: 2 },
  { title: "Hamlet", author: "William Shakespeare", category: "Drama", publishedYear: 1603, quantity: 3 },
  { title: "Macbeth", author: "William Shakespeare", category: "Drama", publishedYear: 1606, quantity: 3 }
];

Book.insertMany(books)
  .then(() => {
    console.log("Books inserted successfully!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error inserting books:", err);
    mongoose.connection.close();
  });