let express = require('express');
let router = express.Router();

let fs = require('fs');

router.post("/:id", (req,res)=>{
    try {
        let id = req.params.id;
        let path = process.cwd() + "/../images/" + id + "/" + req.files.image.name;
        fs.writeFileSync(path, req.files.image.data);

        res.json({
            id:id,
            file:req.files.image.name
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    }
});

module.exports = router;
