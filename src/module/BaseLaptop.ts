import ILaptop from "./ILaptop";
import {a, b} from "./Keyboard"

abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(name: string, type: T, numeric: boolean, touch: boolean){
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touch;
    }    

    a() : void {
        console.log(a());
    }
    b() : void {
        console.log(b())
    }
    
}

export default BaseLaptop;