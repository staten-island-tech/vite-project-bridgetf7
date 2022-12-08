import "/styles/style.css";
import { carsData } from "./cars.js";
console.log(carsData);


carsData.forEach(carsData => {
    document.getElementById("products").insertAdjacentHTML
        ("beforeend",
            `
      <div id="productCard">
      <h2>${carsData.name}</h2>
      <p><img src=${carsData.imgURL}></p>
      <p id="outputText">Type: ${carsData.type}</p>
      <p id="outputText">Price: ${carsData.price}</p>
      <button id="shopBtn">Shop Now</button>
    `
        )
});




/*filters out the type of car
carsData is my ARRAY, car is my chosen ITEM NAME
*/

//ALL 
document.getElementById("allCars").addEventListener("click", function () {
    carsData
        .forEach((car) => {
            console.log(car.name)
        });
});

//SUVs
document.getElementById("SUVs").addEventListener("click", function () {
    carsData
        .filter((car) => car.type === "SUV")
        .forEach((car) => {
            console.log(car.name)
        });
});

//Electrified 
document.getElementById("electrified").addEventListener("click", function () {
    carsData
        .filter((car) => car.type === "electrified")
        .forEach((car) => {
            console.log(car.name)
        });
});

//Trucks 
document.getElementById("trucks").addEventListener("click", function () {
    carsData
        .filter((car) => car.type === "Truck")
        .forEach((car) => {
            console.log(car.name)
        });
});

//Sedans & Coupes
document.getElementById("sedansCoupes").addEventListener("click", function () {
    carsData
        .filter((car) => car.type === "Sedan", "Coupe")
        .forEach((car) => {
            console.log(car.name)
        });
});