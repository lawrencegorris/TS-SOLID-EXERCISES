"use strict";
exports.__esModule = true;
exports.Engine = void 0;
var Engine = /** @class */ (function () {
    function Engine(engineStatus) {
        this._engineStatus = false;
        this._engineStatus = engineStatus;
    }
    Object.defineProperty(Engine.prototype, "engineStatus", {
        get: function () {
            return this.engineStatus;
        },
        enumerable: false,
        configurable: true
    });
    Engine.prototype.turnEngineOn = function () {
        this._engineStatus = true;
    };
    Engine.prototype.turnEngineOff = function () {
        this._engineStatus = false;
    };
    return Engine;
}());
exports.Engine = Engine;
