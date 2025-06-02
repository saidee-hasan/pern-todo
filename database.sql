-- Active: 1748836110132@@dpg-d0uilu63jp1c7384nnug-a.singapore-postgres.render.com@5432@pern_todo_server
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



