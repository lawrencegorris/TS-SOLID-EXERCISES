var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function () {
        return 'Woef';
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function () {
        return 'Miauw';
    };
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function () {
        return 'Im a pirate';
    };
    return Parrot;
}());
var Pikachu = /** @class */ (function () {
    function Pikachu() {
    }
    Object.defineProperty(Pikachu.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pikachu.prototype, "type", {
        get: function () {
            return 'pikachu';
        },
        enumerable: false,
        configurable: true
    });
    Pikachu.prototype.makeSound = function () {
        return 'Pika Pika';
    };
    return Pikachu;
}());
var Wally = /** @class */ (function () {
    function Wally() {
    }
    Object.defineProperty(Wally.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wally.prototype, "type", {
        get: function () {
            return 'Wally';
        },
        enumerable: false,
        configurable: true
    });
    Wally.prototype.makeSound = function () {
        return 'Amai zeg!';
    };
    return Wally;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Pikachu);
zoo.addAnimal(new Wally);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});
