import { getPaintColor } from "./database.js";


const paintColor = getPaintColor()

export const Paint = () => {
    let html = "";

    const listItemArray = paintColor.map((paint) => {
        return `<div>
                    <input type="radio" name="paint" value="${paint.id}"/>${paint.type} ${paint.price}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }
