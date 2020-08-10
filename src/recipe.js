let express = require('express');
let router = express.Router();

//
router.get("/:id?", (req, res) => {
    res.json({
        id: 1,
        title: "Salisbury Steak",
        items: [
            "Crockpot",
            "Skillet",
            "Plate",
            "Small Bowl",
            "Stirring utensil-2",
            "Measuring cups",
            "Measuring Spoons"
        ],
        ingredients: [
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
        ],
        directions: [
            "Combine bread crumbs, onion, egg, parsley, Worcestershire sauce, and garlic in a large bowl. Stir well and add beef and pork.",
            "Mix gently and form 8 equal portions. Place patties on a plate, cover with plastic wrap, and refrigerate 1 hour. Remove from the refrigerator 30 minutes before cooking.",
            "Add oil to skillet. Saute 2 minutes per side. Transfer cooked patties to a plate. Add onions to the pot and cook until brown, about 2 minutes. Add mushrooms and cook 2 minutes more.",
            "Pour wine into the pot and stir, scraping up all the brown bits from the bottom. Add broth, tomato paste, salt, and pepper; stir well.",
            "Put all items in crock pot, including the patties. Put on lowest heating setting. Leave in for about an hour.",
            "Combine 4 tablespoons broth and cornstarch in a bowl and stir until dissolved. Add mixture to the pot slowly, stirring constantly. Let thicken for 5 minutes."

        ]
    });
});

router.post("/:id?", (req, res) => {
    res.status("501").end();
});

router.delete("/:id", (req, res) => {
    res.status("501").end();
});

module.exports = router;
