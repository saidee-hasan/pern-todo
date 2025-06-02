// index.js
const express = require('express');
const cors = require("cors");
const pool = require("./db");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// POST route to create a todo
app.post('/todos', async (req, res) => {
    try {
        const { description, name, priority } = req.body; // ✅ priority যোগ করা হয়েছে

        console.log(req.body);

        const newTodo = await pool.query(
            'INSERT INTO todo (description, name, priority) VALUES ($1, $2, $3) RETURNING *',
            [description, name, priority]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// 👉 Get all todos
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo ORDER BY todo_id');
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// 👉 Get a single todo
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// 👉 Update a todo
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description, priority } = req.body;

        await pool.query(
            'UPDATE todo SET description = $1, priority = $2 WHERE todo_id = $3',
            [description, priority, id]
        );

        res.json({ message: "Todo was updated!" });
    } catch (err) {
        console.error(err.message);
    }
});


// 👉 Delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
        res.json({ message: "Todo was deleted!" });
    } catch (err) {
        console.error(err.message);
    }
});
app.get("/", (req, res) => {
    res.send("✅ API is running!");
  });
  

// ✅ Start the server
app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
