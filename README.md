# Book Store Website

## 📌 Project Description

The **Book Store Website** is a full-stack web application built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). This platform allows users to browse, purchase, and manage books online with features like user authentication, cart functionality, and order tracking.

## 🚀 Features

- **User Authentication** (Register, Login, Logout)
- **Admin Dashboard** for managing books and orders
- **Book Listings** with search and filter options
- **Shopping Cart** and order management
- **User Profile** for order history
- **Responsive Design**

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT & Cookies

## 📂 Folder Structure

```
📦 bookstore
├── 📁 backend (Node.js, Express, MongoDB)
│   ├── 📁 controllers (Business logic)
│   ├── 📁 models (Mongoose schemas)
│   ├── 📁 routes (API endpoints)
│   ├── 📁 middleware (Auth & error handling)
│   ├── indexjs (Main entry point)
│
├── 📁 frontend (React.js, Redux)
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── 📁 redux
│   │   ├── 📁 utils
|   |   |── 📁 redux
|   |   |── 📁 context
|   |   |── 📁 firebase
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
├── 📄 .env (Environment variables)
├── 📄 README.md
```

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/darav321/bookstore.git
cd bookstore
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
```



```
```

Run the server:

```sh
npm start
```

### 3️⃣ Frontend Setup

```sh
cd frontend
npm install
```

Create a `.env` file inside `frontend` and add:

```
VITE_BACKEND_URL=http://localhost:5000
```

Run the frontend:

## 🔥 API Endpoints

### **Authentication**

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - Logout user

### **Books**

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- POST /api/create-book - Add a new book (Admin only)
- `DELETE /api/books/:id` - Delete book (Admin only)

### **Cart & Orders**

- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `POST /api/orders` - Place an order
- `GET /api/orders/:id` - Get order details

## 🤝 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to your fork (`git push origin feature-name`)
5. Open a Pull Request
