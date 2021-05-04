import { Cars_r_us } from "./Cars-r-us.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Cars_r_us()
}

renderAllHTML()