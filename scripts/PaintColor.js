import { getPaintColor } from "./database.js";

    // ADDING CLICK EVENT
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("paints")) {
                const [,paintId] = itemClicked.id.split("--")
    
                for (const paint of paintColor) {
                    if (paint.id === parseInt(paintId)) {
                        window.alert(`${paint.type} costs $${paint.price.toFixed(2)}`)
                    }
                }
            }
        }
    )

const paintColor = getPaintColor()

export const Paint = () => {
    let html = "";

    const listItemArray = paintColor.map((paint) => {
        return `<div>
                    <input type="radio" name="paint" id="paints--${paint.id}"/>${paint.type} $${paint.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }

