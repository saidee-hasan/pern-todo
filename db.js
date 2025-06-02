const { Pool } = require("pg");

const pool = new Pool({
  user: "pern_todo_server_user",
  password: "rFHg4hRkOd4C3DEkMCdiyXuPsHfmvvIR",
  host: "dpg-d0uilu63jp1c7384nnug-a.singapore-postgres.render.com",
  port: 5432,
  database: "pern_todo_server",
  ssl: {
    rejectUnauthorized: false // Render requires SSL connection
  }
});

module.exports = pool;
