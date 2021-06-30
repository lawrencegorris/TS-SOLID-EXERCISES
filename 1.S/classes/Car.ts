import { MusicPlayer } from "./musicplayer";
import { Engine } from './engine';
import { Fuel } from './Fuel';

export class Car {   
    private readonly _engine: Engine;
    private readonly _musicPlayer: MusicPlayer;
    private readonly _fuel: Fuel;

    private _miles : number = 0

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this._musicPlayer = new MusicPlayer(0, 50);
        this._engine = new Engine(false);
        this._fuel = new Fuel(0, 10, MAXIMUM_FUEL_CAPACITY)
    }

    get miles(): number {
        return this._miles;
    }

    get fuel(): number {
        return this.fuel;
    }

    get musicPlayer(): MusicPlayer{
        return this._musicPlayer;
    }

    get engine(): Engine{
        return this._engine;
    }

    drive() {
        if(this.engine.engineStatus === false || this.fuel <= 0) {
            return;
        }
        
        this._fuel.fuel -= 1;
        this._miles += this._fuel.FUEL_MILEAGE;
    }

}