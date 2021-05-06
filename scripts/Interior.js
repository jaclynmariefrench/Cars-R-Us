import { getInterior, setInterior } from "./database.js";
// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    });

const interiorDetail = getInterior()

export const Interior = () => {
    let html = "";

    const listItemArray = interiorDetail.map((interior) => {
        return `<div>
                    <input type="radio" name="interior" value="${interior.id}"/>${interior.type} $${interior.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }