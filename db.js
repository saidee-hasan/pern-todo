const { Pool } = require("pg");

const pool = new Pool({
  user: "perntodo_72lm_user",
  password: "Y6opf1O4EjHjOBIwB29jfSLFisyqUqqq",
  host: "dpg-d0ujn32dbo4c73b7nv6g-a.singapore-postgres.render.com",
  port: 5432,
  database: "perntodo_72lm",
  ssl: {
    rejectUnauthorized: false // Needed for Render
  }
});

module.exports = pool;
