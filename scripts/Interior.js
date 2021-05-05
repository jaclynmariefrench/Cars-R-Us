import { getInterior } from "./database.js";
// ADDING CLICK EVENT
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("interiors--")) {
            const [,interiorId] = itemClicked.id.split("--")

            for (const interior of interiorDetail) {
                if (interior.id === parseInt(interiorId)) {
                    window.alert(`${interior.type} costs $${interior.price.toFixed(2)}`)
                }
            }
        }
    }
)

const interiorDetail = getInterior()

export const Interior = () => {
    let html = "";

    const listItemArray = interiorDetail.map((interior) => {
        return `<div>
                    <input type="radio" name="interior" id="interiors--${interior.id}"/>${interior.type} $${interior.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }