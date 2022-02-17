DROP TABLE IF EXISTS snowboard;

CREATE TABLE snowboard (
    id SERIAL PRIMARY KEY, 
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    img TEXT NOT NULL,
    description TEXT NOT NULL,
    price INT DEFAULT 0,
    rating INT DEFAULT 0,
    featured BOOLEAN DEFAULT false

);
