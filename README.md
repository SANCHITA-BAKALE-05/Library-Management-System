# 📚 Library Management System

A full‑stack web application to manage books, users, and roles in a digital library.  
Built with **Node.js, Express, MongoDB Atlas, and vanilla HTML/CSS/JS**.

---

## 🚀 Features

- 🔐 **Role‑based access** (Admin/User)
- 📖 **CRUD operations** for books (Add, Edit, Delete)
- 👩‍💼 **Admin Panel**: manage inventory, adjust quantities
- 🙋 **User Panel**: borrow books based on availability
- 🌐 **MongoDB Atlas integration** for cloud database
- 🎨 **Responsive frontend** with clean dashboard UI

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js, JWT Authentication
- **Database**: MongoDB Atlas
- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

Library-Management/ ├── backend/ │   ├── models/        # Mongoose schemas (Book, User) │   ├── routes/        # Express routes (authRoutes, bookRoutes) │   ├── middleware/    # Authentication & role-based middleware │   └── server.js      # Entry point ├── frontend/ │   ├── css/           # Stylesheets │   ├── js/            # Frontend scripts │   ├── images/        # Assets │   ├── dashboard.html # Admin/User dashboard │   ├── view-books.html# Book listing page │   └── ...            # Other pages (login, about, etc.) └── README.md
