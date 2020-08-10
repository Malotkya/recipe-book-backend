let express = require('express');
let router = express.Router();
let {knex, api} = require('../util/conn.js');
let fetch = require('node-fetch');

const testDatabase = async() => {
    try
    {
        let responce = await knex.raw("select 1+1 as result");
        return {
            status:"OK",
            conn:knex.client.connectionSettings
        };
    } catch(e) {
        return {
            status:"BAD",
            error:e.message
        };
    }
};

const testSpoonacular = async() => {
    try {
        let test = "https://foodista.com/recipe/ZHK4KPB6/chocolate-crinkle-cookies";
        let url = api.url + "?apiKey=" + api.key + "&url=" + test;
        let responce = await fetch(url, {method: 'GET'});
        if(!responce.ok) {
            throw await responce.json();
        }

        return {
            status:"OK",
            conn: api
        };

    } catch (e) {
        return {
            status:"BAD",
            error:e
        };
    }
};

router.all("/", async(req,res) => {
    let database = await testDatabase();
    let api = await testSpoonacular();

    res.json({
        database:database,
        api:api
    });
});

module.exports = router;
