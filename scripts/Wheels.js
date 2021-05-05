import { getWheels, setWheels } from "./database.js";
// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    });


const wheelsDetail = getWheels()

export const Wheels = () => {
    let html = "";

    const listItemArray = wheelsDetail.map((wheels) => {
        return `<div>
                    <input type="radio" name="wheels" id="wheels${wheels.id}"/>${wheels.type} $${wheels.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }