import { getTechnology, setTechnology } from "./database.js";
// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    });


const technologyDetail = getTechnology()

export const Technology = () => {
    let html = "";

    const listItemArray = technologyDetail.map((technology) => {
        return `<div>
                    <input type="radio" name="technology" value="${technology.id}"/>${technology.type} $${technology.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }