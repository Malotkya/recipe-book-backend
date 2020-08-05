let express = require('express');
let router = express.Router();

router.get("/:date?", (req, res) => {
    res.status("501").end();
});

router.post("/:date", (req, res) => {
    res.status("501").end();
});

module.exports = router;
