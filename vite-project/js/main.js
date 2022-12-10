import "/styles/style.css";
import { carsData } from "./cars.js";
console.log(carsData);

/*
function createProduct() {
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
};
//createProduct();
*/

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

//filter through selected car types
const filterProducts = {
    typeAll: function () {
        document.getElementById("allCars").addEventListener("click", function () {
            carsData
                .forEach((car) => {
                    console.log(car.name)

                    document.getElementById("products").insertAdjacentHTML
                        ("beforeend",
                            `<div id="productCard">
                        <p><img src=${car.imgURL}></p>
                        <h2>${car.name}</h2>
                        <p id="outputText">Type: ${car.type}</p>
                        <p id="outputText">Price: ${car.price}</p>
                        <button id="shopBtn">Shop Now</button>
                        </div>
                         `
                        )
                });
        });
    },

    typeSUVs: function () {
        document.getElementById("SUVs").addEventListener("click", function () {
            carsData
                .filter((car) => car.type === "SUV")
                .forEach((car) => {
                    console.log(car.name)
                    document.getElementById("products").insertAdjacentHTML
                        ("beforeend",
                            `<div id="productCard">
                            <p><img src=${car.imgURL}></p>
                            <h2>${car.name}</h2>
                            <p id="outputText">Type: ${car.type}</p>
                            <p id="outputText">Price: ${car.price}</p>
                            <button id="shopBtn">Shop Now</button>
                            </div>
                             `
                        )
                });
        });
    },

    typeElectric: function () {
        document.getElementById("electric").addEventListener("click", function () {
            carsData
                .filter((car) => car.type === "electric")
                .forEach((car) => {
                    console.log(car.name)
                    document.getElementById("products").insertAdjacentHTML
                        ("beforeend",
                            `<div id="productCard">
                        <p><img src=${car.imgURL}></p>
                        <h2>${car.name}</h2>
                        <p id="outputText">Type: ${car.type}</p>
                        <p id="outputText">Price: ${car.price}</p>
                        <button id="shopBtn">Shop Now</button>
                        </div>
                         `
                        )
                });
        });

    },

    typeTrucks: function () {
        document.getElementById("trucks").addEventListener("click", function () {
            carsData
                .filter((car) => car.type === "Truck")
                .forEach((car) => {
                    console.log(car.name)
                    document.getElementById("products").insertAdjacentHTML
                        ("beforeend",
                            `<div id="productCard">
                        <p><img src=${car.imgURL}></p>
                        <h2>${car.name}</h2>
                        <p id="outputText">Type: ${car.type}</p>
                        <p id="outputText">Price: ${car.price}</p>
                        <button id="shopBtn">Shop Now</button>
                        </div>
                         `
                        )
                });
        });
    },

    typeSedansCoupes: function () {
        document.getElementById("sedansCoupes").addEventListener("click", function () {
            carsData
                .filter((car) => car.type === "Sedan", "Coupe")
                .forEach((car) => {
                    console.log(car.name)
                    document.getElementById("products").insertAdjacentHTML
                        ("beforeend",
                            `<div id="productCard">
                        <p><img src=${car.imgURL}></p>
                        <h2>${car.name}</h2>
                        <p id="outputText">Type: ${car.type}</p>
                        <p id="outputText">Price: ${car.price}</p>
                        <button id="shopBtn">Shop Now</button>
                        </div>
                         `
                        )
                });
        });
    }

};

filterProducts.typeAll();
filterProducts.typeElectric();
filterProducts.typeSUVs();
filterProducts.typeTrucks();
filterProducts.typeSedansCoupes();




