import { getWheels } from "./database.js";
// ADDING CLICK EVENT
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("wheels--")) {
            const [,wheelId] = itemClicked.id.split("--")

            for (const wheel of wheelsDetail) {
                if (wheel.id === parseInt(wheelId)) {
                    window.alert(`${wheel.type} costs $${wheel.price.toFixed(2)}`)
                }
            }
        }
    }
)

const wheelsDetail = getWheels()

export const Wheels = () => {
    let html = "";

    const listItemArray = wheelsDetail.map((wheels) => {
        return `<div>
                    <input type="radio" name="wheels" id="wheels--${wheels.id}"/>${wheels.type} $${wheels.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }