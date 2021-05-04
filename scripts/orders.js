import { getOrders } from "./database.js"

export const Orders = () => {
    const orders = getOrders();
    let html = "<ul>";
    // PUT IN FUNCTION HERE
    const listItems = orders.map();
    html += listItems.join("");
    html += "</ul>";
    return html

}