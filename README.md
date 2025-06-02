# 🗂️ PERN Todo App - Server

This is the **backend API server** for the PERN Todo Application built with **Node.js**, **Express.js**, and **PostgreSQL**. It provides RESTful endpoints for managing todo items and handles database operations.

---

## 🚀 Features

- 🔄 Full CRUD API for Todo items
- 🔒 Basic authentication (optional)
- ⚡ Fast and lightweight Express server
- 🗃️ PostgreSQL database integration with `pg` library
- 🧪 Easy to test and extend

---

## 📦 Tech Stack

| Technology  | Purpose                      |
|-------------|------------------------------|
| Node.js     | Runtime environment          |
| Express.js  | Web framework                |
| PostgreSQL  | Relational database          |
| pg          | PostgreSQL client for Node   |
| dotenv      | Environment variable loader  |
| cors        | Cross-Origin Resource Sharing|

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/saidee-hasan/pern-todo-server.git
cd pern-todo-server

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env file to add your DB connection string and PORT

# Start the server
npm start
