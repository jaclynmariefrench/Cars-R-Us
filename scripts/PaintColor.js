import { getPaintColor } from "./database.js";

document.addEventListener("click", (event) => {
    const itemClicked = clickEvent.target
    if(itemClicked.id.startsWith("paint")) {
        const [, paintId] = itemClicked.id.split("--")
        window.alert(`Hi`)
    }
    
    })


const paintColor = getPaintColor()

export const Paint = () => {
    let html = "";

    const listItemArray = paintColor.map((paint) => {
        return `<div>
                    <input type="radio" name="paint--" value="${paint.id}"/>${paint.type} ${paint.price}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }
