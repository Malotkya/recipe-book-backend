let express = require('express');
let router = express.Router();

let dao = require("../dao/Images.js");

router.post("/:id", (req,res)=>{
    try {
        let file = dao.upload(req.params.id, req.files.image.tempFilePath, req.files.image.mimetype);

        res.json({
            id:req.params.id,
            file:file
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

module.exports = router;
