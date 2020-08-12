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
    let src  = createPath("-1")   + "/" + file;
    let dest = createPath(target) + "/" + file;

    fs.copyFileSync(temp, path);
};

dao.delete = (target, file) => {
    if(file === undefined) {
        fs.rmdirSync(createPath(target), {recursive: true})
    } else {
        fs.unlinkSync(createPath(target) + "/" + file);
    }

};

dao.getById = id => {
    let path = createPath(id);
    return fs.readdirSync(path);
}

module.exports = dao;
