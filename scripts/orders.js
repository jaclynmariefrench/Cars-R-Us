import { getOrders } from "./database.js"

const buildOrderListItems = (order) => {
// PUT IN MORE HERE 5/5
}

export const Orders = () => {
    const orders = getOrders();
    let html = "<ul>";
    // PUT IN FUNCTION HERE
    const listItems = orders.map(buildOrderListItems);
    html += listItems.join("");
    html += "</ul>";
    return html

}