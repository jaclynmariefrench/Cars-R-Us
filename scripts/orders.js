import { getCarType, getInterior, getOrders, getPaintColor, getTechnology, getWheels } from "./database.js"

const buildOrderListItems = (order) => {
    
    const paints = getPaintColor();
    const interiors = getInterior();
    const technologys = getTechnology();
    const wheels = getWheels();
    const carType = getCarType();

    // FIND METHOD & TOTAL PRICE
    const foundPaint = paints.find((paint) => paint.id === order.paintColorId);
    const foundInterior = interiors.find((interior) => interior.id === order.interiorId);
    const foundTechnology = technologys.find((technology) => technology.id === order.technologyId);
    const foundWheels = wheels.find((wheel) => wheel.id === order.wheelsId);
    const foundCarType = carType.find((car)=> car.id === order.carTypeId)
    
    // ADDING UP PRICE
    const totalPrice = (foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price) * foundCarType.priceIncrease

    // DEFINE CURRENCY
    const costString = totalPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    // PRINT INFO
    return `<li>
                Order #${order.id} costs ${costString} at ${order.timestamp}
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