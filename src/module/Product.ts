import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus('Zenbook', true, false);
console.log(asus)

let macbook = new Macbook(2017, false, false)
console.log(macbook)
macbook.a()
macbook.b()