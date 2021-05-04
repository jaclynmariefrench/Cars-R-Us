import { getTechnology } from "./database.js";


const technologyDetail = getTechnology()

export const Technology = () => {
    let html = "";

    const listItemArray = technologyDetail.map((technology) => {
        return `<div>
                    <input type="radio" name="technology" value="${technology.id}"/>${technology.type} ${technology.price}
        </div>`
    });
    
    html += listItemArray.join(" ");
    return html
        
    }