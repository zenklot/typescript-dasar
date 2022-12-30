import Laptop from "./BaseLaptop";

class Asus<T> extends Laptop<T> {
    constructor(type: T, numeric: boolean, touch: boolean) {
        super("Asus", type, numeric, touch);
    }
}

export default Asus;