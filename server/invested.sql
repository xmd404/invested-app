CREATE TABLE users(
    id serial PRIMARY KEY NOT NULL,
    userName TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    cash NUMERIC NOT NULL,
    portfolioQuantity INTEGER NOT NULL
);

CREATE TABLE portfolio(
    userId serial PRIMARY KEY NOT NULL,
    stockId INTEGER,
    stockSharesOwned INTEGER,
    stockPurchasedPrice INTEGER
);

CREATE TABLE stocks(
    stockName TEXT NOT NULL,
    stockId INTEGER
);