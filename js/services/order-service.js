import * as shippingService from "./shipping-service.js";

export function total(order) {
    return order.basic * (1 - order.discount / 100) + shippingService.shipment(order);
}