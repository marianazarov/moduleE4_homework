function ElectricalAppliance(applianceName, powerConsumption) {
    this.applianceName = applianceName;
    this.powerConsumption = powerConsumption;
    this.pluggedIn = false;
}

// Метод включения прибора
ElectricalAppliance.prototype.turnOn = function() {
    this.pluggedIn = true;
    console.log(this.applianceName + " теперь включено.");
}

// Метод выключения прибора
ElectricalAppliance.prototype.turnOff = function() {
    this.pluggedIn = false;
    console.log(this.applianceName + " теперь выключено.");
}

function DeskLamp(brightness) {
    this.applianceName = "Desk Lamp";
    this.powerConsumption = 50;
    this.brightness = brightness;
}
DeskLamp.prototype = new ElectricalAppliance();

function Computer(brand, model) {
    this.applianceName = "Computer";
    this.powerConsumption = 200;
    this.brand = brand;
    this.model = model;
}
Computer.prototype = new ElectricalAppliance();

// Создание экземпляров каждого прибора
const lamp = new DeskLamp(80);
const computer = new Computer("Dell", "XPS 13");

// Включение приборов
lamp.turnOn();
computer.turnOn();

// Вычисление общего энергопотребления
let totalPowerConsumption = lamp.powerConsumption + computer.powerConsumption;

// Вывод результата
console.log("Общее энергопотребление: " + totalPowerConsumption + " ватт.");

// Выключение приборов
lamp.turnOff();
computer.turnOff();