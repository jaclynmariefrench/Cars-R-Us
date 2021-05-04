import { getInterior } from "./database.js";


const interiorDetail = getInterior()

export const Interior = () => {
    let html = "";

    const listItemArray = interiorDetail.map((interior) => {
        return `<div>
                    <input type="radio" name="interior" value="${interior.id}"/>${interior.type} ${interior.price}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }