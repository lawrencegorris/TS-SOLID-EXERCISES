import { Discount } from './Discount';

export class FixedDiscount implements Discount{
    _value: number;

    apply(price: number) : number{
        return Math.max(0, price - this._value);
    }

    showCalculation(price : number) : string{
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }
    constructor(value : number){
        this._value = value;
    }
}