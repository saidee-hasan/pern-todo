-- Active: 1748790932367@@127.0.0.1@5432@perntodo
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



