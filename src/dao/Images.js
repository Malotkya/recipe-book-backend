const fs = require('fs');
let dao = {};

const imgDir = "./public/images";

const createPath = target => {
    let path = imgDir + "/" + target;

    if( !fs.existsSync(path) )
        fs.mkdirSync(path);

    return path;
};

dao.upload = (target, temp, type) => {
    let data = type.split("/");

    if(data[0] != "image")
        throw new Error("Not an image");

    let list = temp.split("-");
    let fileName = list[1] + list[2] + "." + data[1];
    let path = createPath(target) + "/" + fileName;

    fs.copyFileSync(temp, path);
    return fileName;
};

dao.insert = (target, file) => {
    let src  = createPath("-1")   + "/" + fileName;
    let dest = createPath(target) + "/" + fileName;

    fs.copyFileSync(temp, path);
};

dao.delete = file => {

};

module.exports = dao;
