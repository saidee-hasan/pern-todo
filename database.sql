-- Active: 1748836110132@@dpg-d0ujn32dbo4c73b7nv6g-a.singapore-postgres.render.com@5432@perntodo_72lm
-- In psql or PgAdmin

CREATE DATABASE perntodo;

\c perntodo







CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(260),
    name VARCHAR(50)
);


SELECT * FROM todo;
DELETE FROM todo;



