import { sayHi } from "./module";
import "./style.css";
import Img from "./webpack.png";

const func = (a) => a * a;
console.log(func(25));
sayHi();

function image() {
    const element = document.createElement("div");
    // Add the image to our existing div.
    const myImage = new Image();
    myImage.src = Img;
    myImage.height = 600;
    myImage.width = 600;

    element.appendChild(myImage);

    return element;
}
document.body.appendChild(image());
