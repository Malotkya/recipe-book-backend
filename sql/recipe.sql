USE recipeBook;

DROP TABLE recipes;
DROP TABLE calendar;

CREATE TABLE recipes (
	id INT AUTO_INCREMENT,
    title VARCHAR(50),
    items TEXT,
    ingredients TEXT,
    directions TEXT,
    image VARCHAR(20),
    CONSTRAINT PRIMARY KEY(id)
);

CREATE TABLE calendar (
	date INT,
    recipe_id INT,
    CONSTRAINT FOREIGN KEY(recipe_id) REFERENCES recipes(id),
    CONSTRAINT PRIMARY KEY(date, recipe_id)
);