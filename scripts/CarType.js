import { getCarType, setCarType } from "./database.js";

const carType = getCarType(); 

// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "car") {
            setCarType(parseInt(event.target.value))
        }
    });

// MAP METHOD
    export const CarType = () => {
        let html = "";
    
        const listItemArray = carType.map((car) => {
            return `<div>
                        <input type="radio" name="car" value="${car.id}"/>${car.type}
            </div>`
        });
        
        html += listItemArray.join(" ");
        return html
            
        }