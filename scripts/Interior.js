import { getInterior, setInterior } from "./database.js";
// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    });

const interiorDetail = getInterior()

export const Interior = () => {
    let html = "";

    const listItemArray = interiorDetail.map((interior) => {
        return `<div>
                    <input type="radio" name="interior" id="interiors${interior.id}"/>${interior.type} $${interior.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }