import { getTechnology } from "./database.js";
// ADDING CLICK EVENT
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("technologys")) {
            const [,technologyId] = itemClicked.id.split("--")

            for (const technology of technologyDetail) {
                if (technology.id === parseInt(technologyId)) {
                    window.alert(`${technology.type} costs $${technology.price.toFixed(2)}`)
                }
            }
        }
    }
)

const technologyDetail = getTechnology()

export const Technology = () => {
    let html = "";

    const listItemArray = technologyDetail.map((technology) => {
        return `<div>
                    <input type="radio" name="technology" id="technologys--${technology.id}"/>${technology.type} $${technology.price.toFixed(2)}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }