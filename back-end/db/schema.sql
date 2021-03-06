DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS snowboard;

CREATE TABLE snowboard (
    id SERIAL PRIMARY KEY, 
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    img TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN DEFAULT false
);
