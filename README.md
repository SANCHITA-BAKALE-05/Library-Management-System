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
│   ├── middleware
│   |   └──auth.js
│   ├── models
|   |   ├── Book.js
|   |   └── User.js
|   ├── routes
|   |   ├──authRoutes.js
|   |   ├── bookRoutes.js
|   |   └──dataRoutes.js
|   ├── server.js
|   ├── package.json
|   ├── package-lock.json
|   ├── .env
|   └── node_modules
|
├── Frontend
|   ├── css
|   |   └──style.css
|   ├── js
|   |   └── script.js
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
