import { getPaintColor, setPaintColor } from "./database.js";

    // CHANGE EVENT
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "paints") {
                setPaintColor(parseInt(event.target.value))
            }
        });

const paintColor = getPaintColor()

export const Paint = () => {
    let html = "";

    const listItemArray = paintColor.map((paint) => {
        return `<div>
                    <input type="radio" name="paint" id="paints${paint.id}"/>${paint.type} $${paint.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }

