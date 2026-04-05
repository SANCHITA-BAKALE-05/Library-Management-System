const API_URL = "http://localhost:5000/api/books";
const DATA_API_URL = "http://localhost:5000/api/data";

const form = document.getElementById("bookForm");

// ✅ Redirect to login if not authenticated
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
  }
});

// ✅ Add Book
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const book = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      category: document.getElementById("category").value,
      publishedYear: document.getElementById("publishedYear").value,
      quantity: document.getElementById("quantity").value
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(book)
      });

      if (res.ok) {
        document.getElementById("message").innerText = "✅ Book added successfully!";
        form.reset();
        fetchBooks();
        loadDashboard();
      } else {
        const errData = await res.json();
        document.getElementById("message").innerText = `❌ Error: ${errData.message}`;
      }
    } catch (error) {
      document.getElementById("message").innerText = "⚠️ Failed to connect to server.";
    }
  });
}

// ✅ Fetch Books
async function fetchBooks() {
  const booksTable = document.getElementById("booksTable");
  if (!booksTable) return;

  try {
    const token = localStorage.getItem("token");
    const res = await fetch(API_URL, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await res.json();

    booksTable.innerHTML = "";

    data.forEach(book => {
      booksTable.innerHTML += `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.category}</td>
          <td>${book.publishedYear}</td>
          <td>${book.quantity}</td>
          <td>
            <button class="action-btn edit-btn" onclick="updateBook('${book._id}')">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteBook('${book._id}')">Delete</button>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.log("Error fetching books:", error);
  }
}

// ✅ Delete Book
async function deleteBook(id) {
  try {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }
    });
    fetchBooks();
    loadDashboard();
  } catch (error) {
    alert("Error deleting book");
  }
}

// ✅ Update Book
async function updateBook(id) {
  const title = prompt("Enter new title");
  const author = prompt("Enter new author");
  const category = prompt("Enter new category");
  const publishedYear = prompt("Enter new year");
  const quantity = prompt("Enter new quantity");

  if (!title || !author || !category || !publishedYear || !quantity) {
    alert("All fields are required");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, author, category, publishedYear, quantity })
    });

    fetchBooks();
    loadDashboard();
  } catch (error) {
    alert("Error updating book");
  }
}

// ✅ Dashboard Loader
async function loadDashboard() {
  const sampleBooksCount = document.getElementById("sampleBooksCount");
  const totalBooks = document.getElementById("totalBooks");
  const totalQuantity = document.getElementById("totalQuantity");
  const availableCount = document.getElementById("availableCount");
  const sampleBooksTable = document.getElementById("sampleBooksTable");
  const recentBooks = document.getElementById("recentBooks");

  try {
    // Sample data
    const sampleRes = await fetch(DATA_API_URL);
    const sampleData = await sampleRes.json();

    if (sampleBooksCount) sampleBooksCount.innerText = sampleData.length;

    let available = 0;
    if (sampleBooksTable) sampleBooksTable.innerHTML = "";

    sampleData.forEach(book => {
      if (book.status === "Available") available++;

      if (sampleBooksTable) {
        sampleBooksTable.innerHTML += `
          <tr>
            <td>${book.title}</td>
            <td>${book.rack}</td>
            <td>${book.status}</td>
          </tr>
        `;
      }
    });

    if (availableCount) availableCount.innerText = available;

    // Mongo data
    const token = localStorage.getItem("token");
    const mongoRes = await fetch(API_URL, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const mongoData = await mongoRes.json();

    if (totalBooks) totalBooks.innerText = mongoData.length;

    let qty = 0;
    mongoData.forEach(book => {
      qty += Number(book.quantity);
    });

    if (totalQuantity) totalQuantity.innerText = qty;

    if (recentBooks) {
      recentBooks.innerHTML = "";
      mongoData.slice(0, 5).forEach(book => {
        recentBooks.innerHTML += `
          <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.quantity}</td>
          </tr>
        `;
      });
    }
  } catch (error) {
    console.log("Dashboard loading error:", error);
  }
}