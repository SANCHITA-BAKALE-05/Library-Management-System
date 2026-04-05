const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const { authMiddleware, adminOnly } = require("../middleware/auth");

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST add new book (admin only)
router.post("/", authMiddleware, adminOnly, async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update book (admin only)
router.put("/:id", authMiddleware, adminOnly, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE book (admin only)
router.delete("/:id", authMiddleware, adminOnly, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Borrow a book (any authenticated user)
router.post("/borrow/:id", authMiddleware, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.quantity <= 0) return res.status(400).json({ message: "Book not available" });

    book.quantity -= 1;
    await book.save();
    res.json({ message: "Book borrowed successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Return a book (any authenticated user)
router.post("/return/:id", authMiddleware, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    book.quantity += 1;
    await book.save();
    res.json({ message: "Book returned successfully", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;