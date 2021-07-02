import { Discount } from './Discount';

export class VariableDiscount implements Discount{
    _value: number;

    apply(price : number) : number{
        return (price - (price * this._value / 100));
    }

    showCalculation(price : number) : string{
        return price + " € -  "+ this._value +"%";
    }

    constructor(value: number){
        this._value = value;
    }
}