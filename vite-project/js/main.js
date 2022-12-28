import "/styles/style.css";
import { carsData } from "./cars.js";
import { DOM } from "./DOM.js";
console.log(carsData);


//theme buttons
DOM.toggleTheme.addEventListener("click", function () {
    if (document.body.classList.contains("lightMode")) {
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
    }
    else {
        document.body.classList.add("lightMode");
        document.body.classList.remove("darkMode");
    }
});

const createProduct = function (carsData) {
    DOM.products.insertAdjacentHTML
        ("beforeend",
            `
          <div id="productCard">
          <p><img src=${carsData.imgURL}></p>
          <h2>${carsData.name}</h2>
          <p id="outputText">Type: ${carsData.type}</p><br>
          <p id="outputText">Description: ${carsData.description}</p><br>
          <p id="outputText">Price: ${carsData.price}</p><br>
          <button id="shopBtn">Shop Now</button>
          </div>
        `
        );
}

carsData
    .forEach((car) => createProduct(car));

const remove = function () {
    document.querySelectorAll("#productCard").forEach((card) => card.remove());
};

const mapData = function () {
    carsData
        .map((car) => ({
            name: car.name,
            imgURL: car.imgURL,
            price: car.price,
            type: car.type,
            description: car.description
        }))
};



const filterProducts = {
    typeAll: function () {
        DOM.allCars.addEventListener("click", function () {
            remove();
            carsData
                .forEach((car) => {
                    console.log(car.name);
                    createProduct(car);
                });
        });
    },
    typeSUVs: function () {
        DOM.SUVs.addEventListener("click", function () {
            remove();
            mapData();
            carsData
                .filter((car) => car.type.includes("SUV"))
                .forEach((car) => {
                    console.log(car.name);
                    createProduct(car);
                });
        });
    },
    typeElectric: function () {
        DOM.electric.addEventListener("click", function () {
            remove();
            mapData();
            carsData
                .filter((car) => car.type.includes("Electric"))
                .forEach((car) => {
                    console.log(car.name);
                    createProduct(car);
                });
        });
    },
    typeTrucks: function () {
        DOM.trucks.addEventListener("click", function () {
            remove();
            mapData();
            carsData
                .filter((car) => car.type.includes("Truck"))
                .forEach((car) => {
                    console.log(car.name)
                    createProduct(car);
                });
        });
    },
    typeCoupes: function () {
        DOM.coupes.addEventListener("click", function () {
            remove();
            mapData();
            carsData
                .filter((car) => car.type.includes("Coupe"))
                .forEach((car) => {
                    console.log(car.name)
                    createProduct(car);
                });
        });
    },
    typeLowHigh: function () {
        DOM.priceLowHigh.addEventListener("click", function () {
            remove();
            mapData();
            carsData
                .sort((a, b) => a.price - b.price)
                .forEach((car) => {
                    console.log(car.name, car.price);
                    createProduct(car);
                });

        });
    },
    typeHighLow: function () {
        DOM.priceHighLow.addEventListener("click", function () {
            remove();
            mapData();
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











