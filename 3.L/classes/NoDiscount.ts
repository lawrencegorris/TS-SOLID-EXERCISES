import { Discount } from './Discount'

export class NoDiscount implements Discount{
    _value: number; 

    apply(price : number) : number{
        return price;
    }

    showCalculation(price : number) : string{
        return "No discount";
    }

    constructor(){
        this._value = 0;
    }
}