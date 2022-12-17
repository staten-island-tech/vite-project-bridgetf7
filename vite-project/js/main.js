import "/styles/style.css";
import { carsData } from "./cars.js";
console.log(carsData);


const createProduct = function (carsData) {
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
        );
}
carsData
    .forEach((car) => createProduct(car));


const filterProducts = {
    typeAll: function () {
        document.getElementById("allCars").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .forEach((car) => {
                    console.log(car.name)
                    createProduct(car);
                });
        });
    },
    typeSUVs: function () {
        document.getElementById("SUVs").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .filter((car) => car.type.includes("SUV"))
                .forEach((car) => {
                    console.log(car.name);
                    createProduct(car);
                });
        });
    },
    typeElectric: function () {
        document.getElementById("electric").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .filter((car) => car.type.includes("Electric"))
                .forEach((car) => {
                    console.log(car.name);
                    createProduct(car);
                });
        });
    },
    typeTrucks: function () {
        document.getElementById("trucks").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .filter((car) => car.type.includes("Truck"))
                .forEach((car) => {
                    console.log(car.name)
                    createProduct(car);
                });
        });
    },
    typeCoupes: function () {
        document.getElementById("coupes").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .filter((car) => car.type.includes("Coupe"))
                .forEach((car) => {
                    console.log(car.name)
                    createProduct(car);
                });
        });
    },
    typeLowHigh: function () {
        document.getElementById("priceLowHigh").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .sort((a, b) => a.price - b.price)
                .forEach((car) => {
                    console.log(car.name, car.price);
                    createProduct(car);
                });

        });
    },
    typeHighLow: function () {
        document.getElementById("priceHighLow").addEventListener("click", function () {
            //document.querySelectorAll(".productCard").remove();
            carsData
                .sort((a, b) => b.price - a.price)
                .forEach((car) => {
                    console.log(car.name, car.price);
                    createProduct(car);
                });

        });
    }
}

filterProducts.typeAll();
filterProducts.typeElectric();
filterProducts.typeSUVs();
filterProducts.typeTrucks();
filterProducts.typeCoupes();
filterProducts.typeLowHigh();
filterProducts.typeHighLow();






//theme buttons
document.getElementById("toggleTheme").addEventListener("click", function () {
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
    }
    else {
        document.body.classList.add("lightMode");
        document.body.classList.remove("darkMode");
    }
});







