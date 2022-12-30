import Laptop from "./BaseLaptop";

class Macbook<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touch: boolean){
        super("Macbook", type, numeric, touch)
    }
}

export default Macbook;