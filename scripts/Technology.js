import { getTechnology, setTechnology } from "./database.js";
// CHANGE EVENT
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technologys") {
            setTechnology(parseInt(event.target.value))
        }
    });


const technologyDetail = getTechnology()

export const Technology = () => {
    let html = "";

    const listItemArray = technologyDetail.map((technology) => {
        return `<div>
                    <input type="radio" name="technology" id="technologys ${technology.id}"/>${technology.type} $${technology.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }