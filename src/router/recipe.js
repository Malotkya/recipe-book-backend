let express = require('express');
let router = express.Router();
let dao = require('../dao/Recipe.js');

//
router.get("/:id?", async(req, res) => {
    try
    {
        let id = req.params.id;
        if(typeof id === "undefined") {
            res.json(await dao.getAll());
        } else {
            res.json(await dao.getById(id));
        }
    } catch(e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

router.post("/:id?", async(req, res) => {
    try {
        let id = req.params.id;
        if(typeof id === "undefined") {
            res.json(await dao.insert(req.body));
        } else {
            req.body.id = id;
            res.json(await dao.update(req.body))
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        if(typeof id === "undefined")
            throw new Error("id is undefined");

        await dao.delete(id);
        res.json({});
    } catch (e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

module.exports = router;
