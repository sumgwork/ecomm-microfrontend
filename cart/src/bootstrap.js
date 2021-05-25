import faker from "faker";

const cart = `<h3>Congratulations! You have ${faker.datatype.number()} products in your cart.</h3>`;

document.querySelector("#dev-cart").innerHTML = cart;
