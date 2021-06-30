"use strict";
exports.__esModule = true;
exports.Car = void 0;
var musicplayer_1 = require("./musicplayer");
var engine_1 = require("./engine");
var Fuel_1 = require("./Fuel");
var Car = /** @class */ (function () {
    function Car(MAXIMUM_FUEL_CAPACITY) {
        this._miles = 0;
        this._musicPlayer = new musicplayer_1.MusicPlayer(0, 50);
        this._engine = new engine_1.Engine(false);
        this._fuel = new Fuel_1.Fuel(0, 10, MAXIMUM_FUEL_CAPACITY);
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuel", {
        get: function () {
            return this.fuel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "musicPlayer", {
        get: function () {
            return this._musicPlayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        if (this.engine.engineStatus === false || this.fuel <= 0) {
            return;
        }
        this._fuel.fuel -= 1;
        this._miles += this._fuel.FUEL_MILEAGE;
    };
    return Car;
}());
exports.Car = Car;
