class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }

    private makeSound() : string {
        return 'Woef';
    }
}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }

    private makeSound() : string {
        return 'Miauw';
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }

    private makeSound() : string {
        return 'Im a pirate';
    }
}

class Pikachu {
    private _name;

    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get type(){
        return 'pikachu';
    }

    private makeSound() : string {
        return 'Pika Pika';
    }
}

class Wally {
    private _name;

    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get type(){
        return 'Wally';
    }

    private makeSound() : string {
        return 'Amai zeg!';
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Pikachu);
zoo.addAnimal(new Wally);

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound(animal) + "<br>");
});