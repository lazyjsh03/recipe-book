CREATE TABLE IF NOT EXISTS ingredients (
	id SERIAL PRIMARY KEY,
	ingr_name VARCHAR(20) NOT NULL,
	amount INTEGER,
	expire_date date
);

INSERT INTO ingredients (ingr_name, amount) VALUES ('척 아이롤', 350);