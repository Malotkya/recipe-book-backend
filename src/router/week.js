let express = require('express');
let router = express.Router();

let dao = require('../dao/Calendar.js');

router.get("/:date?", async(req, res) => {
    try {
        let date = req.params.date;
        if(typeof date === "undefined") {
            date = new Date();
        }

        res.json(await dao.getWeek(date));

    } catch(e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

router.post("/:date", async(req, res) => {
    try {
        let date = req.params.date;

        await dao.updateWeek(date, req.body);
        res.json(await dao.getWeek(date));
    } catch(e) {
        res.status(500).json({
            message:e.message,
            err: e
        });
    }
});

module.exports = router;
