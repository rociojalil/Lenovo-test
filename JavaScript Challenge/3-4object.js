//3)

class Car {
    constructor(make, model, year, engineDisplacement) {
    this.make = make;
    this.model = model;
    this.turnedOn = false;
    this.engineDisplacement = engineDisplacement;
    this.year = year;
    this.isOn = function() {
        return this.turnedOn
    };
    this.turnOn = function() {
        this.turnedOn = true
    };
    this.turnOff = function() {
        this.turnedOn = false
    };
    this.toString = function() {
        return `${this.make}, ${this.model}, ${this.year}, ${this.engineDisplacement}`
    };
    this.getMarketingData = function() {
        return `${this.make}, ${this.model}, ${this.year}`
    }
}
};

//4)

class Bicycle extends Car {
    constructor(make, model, year) {
        super(make, model, year)
    }
};
const bici = new Bicycle('Olmo', 'XT200', 2021);
bici.getMarketingData();