const database = require("../util/database.js");
const Stamp = require("../util/Stamp.js");

let Calendar = database.model('Calendar', {
    tableName: 'calendar'
})

let dao = {};

const inc = date => {
    date.setDate(date.getDate() + 1);
    return date;
};

const dec = date => {
    date.setDate(date.getDate() - 1);
    return date;
};

const sunday = date => {
    while(!date.isSunday()) {
        date.dec();
    }
    return date;
}

dao.getDay = async(day) => {
    let output = [];
    let results = await new Calendar().where({date:day}).fetchAll();
    results.models.forEach(obj => output.push(obj.attributes.id));
    return output;
}

dao.getWeek = async(date) => {
    let output = [];
    let day=sunday(new Stamp(date));

    for(let i=0;i<7;i++) {
        output.push(await dao.getDay(day.toString()));
        day.inc();
    }

    return output;
}

dao.getMonth = async(date) => {
    let output = [];
    let day = new Stamp(date);
    day.day = 1;
    let month = day.month;

    while(this.month == month) {
        output.push(await dao.getDay(day.toString()));
        day.inc();
    }

    return output;
}

dao.updateDay = async(date, list) => {
    let current = await dao.getDay(date);

    for(let i=0; i<list.length; i++) {
        let index = current.indexOf(list[i])
        if( index >= 0 ) {
            current.splice(index, 1);
        } else {
            await new Calendar({
                date:date,
                id:list[i]
            }).save(null, {method:"insert"});
        }
    }

    for(i=0; i<current.length; i++) {
        await new Calendar({
            date:date,
            id:current[i]
        }).destroy();
    }
}

dao.updateWeek = async(date, list) => {
    let day=sunday(new Stamp(date));
    for(let i=0;i<7;i++) {
        await dao.updateDay(day.toString(), list[i]);
        day.inc();
    }
}

module.exports = dao;
