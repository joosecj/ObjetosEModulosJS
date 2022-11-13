import Order from "./model/order.js";
import * as orderService from "./services/order-service.js";


const btn = document.querySelector("#send");

function inicio () {
 
    const orderNumber = document.querySelector("#order-number");
    const numberValue = orderNumber.value;

    const orderPrice = document.querySelector("#order-price");
    const priceValue = orderPrice.value;

    const orderDiscount = document.querySelector("#order-discount");
    const discountValue = orderDiscount.value;
    

    if(valida(numberValue) && valida(priceValue)) {
        const order = pedido(numberValue, priceValue, discountValue);
        orderService.total(order);
        criarElemento(order);
    };

}

btn.addEventListener("click", (e) => {
    e.preventDefault();
        inicio();
});

function valida(value) {
    if (value.length < 1) {
        alert("Numero não pode ser menor que 1!!!");
        return false;
    }
    return true;
}

function criarElemento(order) {
    const paragrafo = `<p>Pedido: <span class="total">${order.code}</span></p><p>Total <span class="total">R$ ${orderService.total(order).toFixed(2)}</span></p>`;
    return document.querySelector(".result").innerHTML = paragrafo;
};

function pedido(code, price, discount) {
    return new Order(Number(code), Number(price), Number(discount));
};