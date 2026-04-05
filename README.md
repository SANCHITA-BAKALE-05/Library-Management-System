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

```bash
Library-Management-System
├── Backend
|   ├── middleware
|   │   └──auth.js
|   ├── models
|   │   ├── Book.js
|   │   └── User.js
|   ├── routes
|   │   ├──authRoutes.js
|   │   ├── bookRoutes.js
|   │   └──dataRoutes.js
|   ├── server.js
|   ├── package.json
|   ├── package-lock.json
|   ├── .env
|   └── node_modules
|
├── Frontend
|   ├── css
|   │   └──style.css
|   ├── js
|   │   └── script.js
|   ├── images
|   ├── index.html
|   ├── about.html
|   ├── about_index.html
|   ├── add-book.html
|   ├── dashboard.html
|   ├── login.html
|   ├── logout.html
|   └── signup.html
|
├── view-books.html
├──.gitignore
└── README.md

```


---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```

2. **Install dependencies**
    ```bash
   cd backend
   npm install
    ```

3. **Configure environment variables**
    - Create a .env file in backend/
    - Add your MongoDB Atlas URI and JWT secret:
   ```bash
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the backend server**
    ```bash
    node server.js
    ```
    -Server runs on http://localhost:5000

5. **Open frontend**
   -Open frontend/index.html in your browser
   -Login as admin/user to access features

---

##📡 API Endpoints
**📚 Books**
  -GET /api/books → Fetch all books
  -POST /api/books → Add new book (Admin only)
  -PUT /api/books/:id → Update book (Admin only)
  -DELETE /api/books/:id → Delete book (Admin only)
  -POST /api/books/borrow/:id → Borrow book (User)
  -POST /api/books/return/:id → Return book (User)
**🔐 Auth**
  -POST /api/auth/register → Register new user
  -POST /api/auth/login → Login and get JWT

---

## 🔮 Feature Improvements

Planned enhancements and future roadmap for the Library Management System:

- 📊 **Analytics Dashboard**: Track borrowing trends, most popular books, and user activity.
- 🔐 **User Borrow History**: Maintain logs so only the borrower can return a book.
- 📱 **Responsive UI Upgrade**: Improve mobile and tablet experience with modern design.
- 📦 **Quantity Controls for Admins**: Inline +/‑ buttons to adjust stock directly from the table.
- 📧 **Email Notifications**: Notify users when borrowed books are due or when new books are added.
- 🌍 **Search & Filter**: Advanced search by category, author, or availability.
- 🗂 **Role Management**: Add librarian role with limited admin privileges.
- 🛡 **Enhanced Security**: Password reset, stronger JWT handling, and audit logs.
- ☁️ **Cloud Deployment**: Deploy on platforms like Heroku, Vercel, or Azure for live demo access.

   JWT_SECRET=your_secret_key
   ```
