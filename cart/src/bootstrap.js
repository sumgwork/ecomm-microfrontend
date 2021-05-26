import faker from "faker";

const mount = (el) => {
  const cart = `<h3>Congratulations! You have ${faker.datatype.number()} products in your cart.</h3>`;
  el.innerHTML = cart;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };
