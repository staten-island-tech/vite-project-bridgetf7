import "/styles/style.css";
import { carsData } from "./cars.js";
console.log(carsData);


carsData.forEach(carsData => {
    document.getElementById("products").insertAdjacentHTML
        ("beforeend",
            `
      <div id="productCard">
      <p><img src=${carsData.imgURL}></p>
      <h2>${carsData.name}</h2>

      <p id="outputText">Type: ${carsData.type}</p>
      <p id="outputText">Price: ${carsData.price}</p>
      <button id="shopBtn">Shop Now</button>
      </div>
    `
        )
});

//theme buttons
document.getElementById("toggleTheme").addEventListener("click", function () {
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
    } else {
        document.body.classList.add("lightMode");
        document.body.classList.remove("darkMode");
    }
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

//Electric
document.getElementById("electric").addEventListener("click", function () {
    carsData
        .filter((car) => car.type === "electric")
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