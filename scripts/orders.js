import { getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js"

const buildOrderListItems = (order) => {
    let totalPrice = 0
    
    const paints = getPaintColor();
    const interiors = getInterior();
    const technologys = getTechnology();
    const wheels = getWheels();

    // FIND METHOD & TOTAL PRICE
    const foundPaint = paints.find((paint) => paint.id === order.paintColorId);
    totalPrice += foundPaint.price

    const foundInterior = interiors.find((interior) => interior.id === order.interiorId);
    totalPrice += foundInterior.price

    const foundTechnology = technologys.find((technology) => technology.id === order.technologyId);
    totalPrice += foundTechnology.price

    const foundWheels = wheels.find((wheel) => wheel.id === order.wheelsId);
    totalPrice += foundWheels.price

    
    // DEFINE CURRENCY
    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    // PRINT INFO
    return `<li>
                Order #${order.id} costs ${costString}
            </li>`;
};

export const Orders = () => {
    const orders = getOrders();
    let html = "<ul>";
    // PUT IN FUNCTION HERE
    const listItems = orders.map(buildOrderListItems);
    html += listItems.join("");
    html += "</ul>";
    return html

}