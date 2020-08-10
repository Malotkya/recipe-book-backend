class Stamp {
    constructor(string){
        if(typeof string === "string") {
            let date = string.split("-");
            this.year = Number(date[0]);
            this.month = Number(date[1]);
            this.day = Number(date[2]);
        } else {
            let date = new Date(string);
            if(typeof string === "undefined")
                date = new Date();

            this.year = date.getFullYear();
            this.month = date.getMonth()+1;
            this.day = date.getDate();
        }
    }

    update(){
        let mod = 0;
        switch(this.month) {
            case 2:
                if(this.year % 4 === 0) {
                    if(this.year % 100 === 0) {
                        if(this.year % 400 === 0) {
                            mod = 28
                        } else {
                            mod = 27
                        }
                    } else {
                        mod = 28;
                    }
                } else {
                    mod = 27;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                mod = 30;
                break;
            default:
                mod = 31;
        }

        if(this.day > mod) {
            this.day = this.day - mod;
            this.month++;
        } else if(this.day <= 0) {
            this.day = mod - this.day;
            this.month--;
        }

        if(this.month > 12) {
            this.month = this.month - 12;
            this.year++;
        } else if(this.month <= 0) {
            this.month = 12 - this.month;
            this.year--;
        }
    }

    inc(){
        this.day++;
        this.update();
    }

    dec(){
        this.day--;
        this.update();
    }

    isSunday() {
        return (new Date(this.year, this.month-1, this.day).getDay() == 0)
    }

    toString(){
        let output = this.year + "-";

        if(this.month < 10)
            output += "0";
        output += this.month + "-";

        if(this.day < 10)
            output += "0"
        output += this.day;

        return output;
    }
}

module.exports = Stamp;
