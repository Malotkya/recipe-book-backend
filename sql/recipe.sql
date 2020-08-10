USE recipeBook;

DROP TABLE calendar;
DROP TABLE recipes;

CREATE TABLE recipes (
	id INT AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    items JSON default (JSON_ARRAY()),
    ingredients JSON default (JSON_ARRAY()),
    directions JSON default (JSON_ARRAY()),
    images JSON default (JSON_ARRAY()),
    CONSTRAINT PRIMARY KEY(id)
);

CREATE TABLE calendar (
	date char(10),
    id INT,
    CONSTRAINT FOREIGN KEY(id) REFERENCES recipes(id),
    CONSTRAINT PRIMARY KEY(date, recipe_id)
);

INSERT INTO recipes(title, items, ingredients, directions, images)
VALUES( "Salisbury Steak",
		'[
            "Crockpot",
            "Skillet",
            "Plate",
            "Small Bowl",
            "Stirring utensil-2",
            "Measuring cups",
            "Measuring Spoons"
        ]',
        '[
            "½ Cup bread crumbs",
            "¼ cup onion",
            "1 egg",
            "1 lb ground beef",
            "½ lb pork",
            "2 Tbls Veggie Oil",
            "1 tsp Worcestershire sauce",
            "1 garlic clove",
            "3 lbs of beef-cured, corned, brisket",
            "1 large onion",
            "muchrooms",
            "¼ cup red wine",
            "2 cups beef broth",
            "1 tbl tomato paste",
            "½ tsp pepper",
            "2 tbl beef broth",
            "2 tbl cornstarch"
        ]',
        '[
            "Combine bread crumbs, onion, egg, parsley, Worcestershire sauce, and garlic in a large bowl. Stir well and add beef and pork.",
            "Mix gently and form 8 equal portions. Place patties on a plate, cover with plastic wrap, and refrigerate 1 hour. Remove from the refrigerator 30 minutes before cooking.",
            "Add oil to skillet. Saute 2 minutes per side. Transfer cooked patties to a plate. Add onions to the pot and cook until brown, about 2 minutes. Add mushrooms and cook 2 minutes more.",
            "Pour wine into the pot and stir, scraping up all the brown bits from the bottom. Add broth, tomato paste, salt, and pepper; stir well.",
            "Put all items in crock pot, including the patties. Put on lowest heating setting. Leave in for about an hour.",
            "Combine 4 tablespoons broth and cornstarch in a bowl and stir until dissolved. Add mixture to the pot slowly, stirring constantly. Let thicken for 5 minutes."

        ]',
        '[
			"1.jpeg",
            "2.jpeg",
            "3.jpeg"
        ]'
	);
    
INSERT INTO recipes(title)
VALUES("Testing");

INSERT INTO recipes(title)
VALUES("Recipe Name");

INSERT INTO calendar(date, recipe_id)
VALUES('2020-08-09', 1);

INSERT INTO calendar(date, recipe_id)
VALUES('2020-08-10', 1);

INSERT INTO calendar(date, recipe_id)
VALUES('2020-08-13', 2);

INSERT INTO calendar(date, recipe_id)
VALUES('2020-08-13', 3);

SELECT * FROM recipes;
SELECT * FROM calendar;