class ElectricalAppliance {
    constructor(applianceName, powerConsumption) {
        this.applianceName = applianceName;
        this.powerConsumption = powerConsumption;
        this.pluggedIn = false;
    }

    // Метод включения прибора
    turnOn() {
        this.pluggedIn = true;
        console.log(`${this.applianceName} теперь включено.`);
    }

    // Метод выключения прибора
    turnOff() {
        this.pluggedIn = false;
        console.log(`${this.applianceName} теперь выключено.`);
    }
}

class DeskLamp extends ElectricalAppliance {
    constructor(brightness) {
        super("Desk Lamp", 50);
        this.brightness = brightness;
    }
}

class Computer extends ElectricalAppliance {
    constructor(brand, model) {
        super("Computer", 200);
        this.brand = brand;
        this.model = model;
    }
}

// Создание экземпляров каждого прибора
const lamp = new DeskLamp(80);
const computer = new Computer("Dell", "XPS 13");

//  Включение приборов
lamp.turnOn();
computer.turnOn();

// Вычисление общего энергопотребления
let totalPowerConsumption = lamp.powerConsumption + computer.powerConsumption;

// Вывод результата
console.log(`Общее энергопотребление: ${totalPowerConsumption} ватт.`);

// Выключение приборов
lamp.turnOff();
computer.turnOff();