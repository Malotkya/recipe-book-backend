let express = require('express');
let router = express.Router();
const {api} = require("../util/conn.js");
const fetch = require("node-fetch");
const dao = require("../dao/Recipe.js");

router.get("/", async(req,res)=>{
    try {
        let url = api.url + "?apiKey=" + api.key + "&url=" + req.query.target;
        let responce = await fetch(url, {method: 'GET'});
        if(responce.ok) {
            let object = await responce.json();
            let recipe = {
                title: object.title,
                images:[object.image],
                items:[],
                ingredients:[],
                directions:[]
            };

            object.extendedIngredients.forEach(obj=>recipe.ingredients.push(obj.originalString));

            object.analyzedInstructions[0].steps.forEach(obj=>recipe.directions.push(obj.step));

            res.json(await dao.insert(recipe));
        } else {
            let error = await responce.json();
            throw error;
        }
    } catch (e) {
        res.status(500).json({
            message: e.message,
            err: e
        });
    } finally {

    }

})

module.exports = router;
