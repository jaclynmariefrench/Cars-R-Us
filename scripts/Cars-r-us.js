import { addCustomOrder } from "./database.js"
import { Interior } from "./Interior.js"
import { Orders } from "./orders.js"
import { Paint } from "./PaintColor.js"
import { Technology } from "./Technology.js"
import { Wheels } from "./Wheels.js"

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.id.startsWith("orderButton")) {
      addCustomOrder();
    }
  });


export const Cars_r_us = () => {
    return `
    <h1>Cars R Us</h1>

    <article class="choices">
        <section class="choices__paintColor options">
            <h2>Paint Color</h2>
            ${ Paint() }
        </section>
        <section class="choices__interior options">
            <h2>Interior</h2>
            ${ Interior() }
        </section>
        <section class="choices__technology options">
            <h2>Technology</h2>
            ${ Technology() }
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${ Wheels() } 
        </section>
    </article>
    <article>
        <button id="orderButton">Order Submit</button>
    </article>
    <article class="customOrder">
        <h2>Custom Car Orders</h2>
        ${ Orders() }
    </article>
    `
}