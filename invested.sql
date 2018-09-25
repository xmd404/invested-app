CREATE TABLE users(
    id serial PRIMARY KEY NOT NULL,
    userName TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);