import { getWheels } from "./database.js";


const wheelsDetail = getWheels()

export const Wheels = () => {
    let html = "";

    const listItemArray = wheelsDetail.map((wheels) => {
        return `<div>
                    <input type="radio" name="wheels" value="${wheels.id}"/>${wheels.type} ${wheels.price}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }