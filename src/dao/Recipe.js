const database = require("../util/database.js");
let imageDao = require('./Images.js');

let Recipe = database.model('Recipe', {
    tableName: 'recipes'
});

let dao = {};

const validate = object => {
    object.items = json(object.items);
    object.ingredients = json(object.ingredients);
    object.directions = json(object.directions);
    object.images = json(object.images);

    return object;
};

const json = input => {
    if(typeof input === "object")
        return JSON.stringify(input);
    if(typeof input === "undefined" || typeof input === "null" )
        return "[]";

    return "[ " + input + "]";
}

const parse = object => {
    object.items = JSON.parse(object.items);
    object.ingredients = JSON.parse(object.ingredients);
    object.directions = JSON.parse(object.directions);
    object.images = JSON.parse(object.images);

    return object;
};

dao.getAll = async() => {
    let output = [];
    let responce = await new Recipe().fetchAll();
    responce.models.forEach(obj => output.push(parse(obj.attributes)));
    return output;
};

dao.getById = async(id) => parse( (await new Recipe({id:id}).fetch()).attributes );

dao.update = async(object) => {
    let recipe = parse( (await new Recipe(validate(object)).save()).attributes );

    let current = imageDao.getById(recipe.id);
    for(let i=0; i<recipe.images.length; i++) {
        let index = current.indexOf(recipe.images[i]);
        if(index >= 0) {
            current.splice(index, 1);
        } else {
            console.error("image in object but not in files");
        }
    }

    current.forEach(file => imageDao.delete(recipe.id, file));
    return recipe;
}

dao.insert = async(object) => {
    let recipe = parse( (await new Recipe(validate(object)).save(null, {method:"insert"})).attributes );

    recipe.images.forEach(file => {
        imageDao.insert(recipe.id, file);
    });

    return recipe;
}

dao.delete = async(id) => {
    imageDao.delete(id);
    await new Recipe({id:id}).destroy();
}

module.exports = dao;
