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
      <p>Type: ${carsData.type}</p>
      <p>Price: ${carsData.price}</p>
    `
        )
});




