import "../styles/style.css";
import {carsData} from "./cars.js";
console.log (carsData);

document.getElementById("products").insertAdjacentHTML (
    "beforeend",
    `<div id="productCard">
    <h2>${cars.name}</h2>
    <p><img src=${cars.imgURL}></p>`
);