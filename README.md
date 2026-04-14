# 🚀 Redux Toolkit Todo App

A modern and professional **Task Management Application** built with **React + Redux Toolkit**.
This project demonstrates clean state management, scalable architecture, and a modern UI.

---

## 🔗 Live Demo

👉 https://redux-toolkit-todo-alpha.vercel.app/

## 📂 GitHub Repository

👉 https://github.com/AhmedDevx07/ReduxToolkit-Todo

---

## ✨ Features

* ✅ Add new tasks
* 📝 Edit existing tasks
* ❌ Delete tasks
* ✔️ Mark tasks as completed / pending
* 🔍 Filter tasks (All / Completed / Pending)
* 💾 Persistent storage using LocalStorage
* ⚡ Fast and optimized state management with Redux Toolkit
* 🎨 Clean and modern UI (Tailwind CSS)

> This project follows best practices for Redux Toolkit and scalable folder structure. ([GitHub][1])

---

## 🛠️ Tech Stack

* ⚛️ React (Vite)
* 🧠 Redux Toolkit
* 🔗 React Redux
* 🎨 Tailwind CSS
* 💾 LocalStorage API

---

## 📁 Folder Structure

```
src/
 ├── app/
 │    └── store.js
 │
 ├── features/
 │    └── todo/
 │         ├── todoSlice.js
 │         ├── AddTodo.jsx
 │         ├── TodoItem.jsx
 │         ├── TodoList.jsx
 │         └── Filter.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/AhmedDevx07/ReduxToolkit-Todo.git
```

Navigate into the project folder:

```bash
cd ReduxToolkit-Todo
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🧠 How It Works

Redux Toolkit simplifies state management by combining:

* **Slices** (state + reducers)
* **Actions**
* **Central Store**

Flow:

```
Component → Dispatch Action → Slice Updates State → UI Re-renders
```

This architecture ensures:

* Clean code
* Predictable state updates
* Easy scalability

---

## 🚀 Future Improvements

* 🔍 Search functionality
* 📊 Task analytics dashboard
* 🌐 API integration (RTK Query)
* 🔐 Authentication system
* 📱 Fully responsive design

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Share feedback

---

## 📌 Note

This project is built for **learning Redux Toolkit** and demonstrating real-world frontend architecture using modern tools.

---

[1]: https://github.com/bezkoder/redux-toolkit-example-crud?utm_source=chatgpt.com "GitHub - bezkoder/redux-toolkit-example-crud: Redux-Toolkit example with CRUD Application, Axios, Bootstrap, and Rest API"