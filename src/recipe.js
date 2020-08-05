let express = require('express');
let router = express.Router();

//
router.get("/:id?", (req, res) => {
    res.json([
        {id: 1, title: "Recipe 1"},
        {id: 2, title: "Recipe 2"}
    ]);
});

router.post("/:id?", (req, res) => {
    res.status("501").end();
});

router.delete("/:id", (req, res) => {
    res.status("501").end();
});

module.exports = router;
