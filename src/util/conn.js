module.exports.api = {
    url:"https://api.spoonacular.com/recipes/extract",
    key:"550d3ba1323940b099b7ad98aa4bbdc6"
};

module.exports.knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : 'localhost',
        user     : 'backend',
        password : 'eMUJwAB2',
        database : 'recipebook',
        charset  : 'utf8'
    }
});
