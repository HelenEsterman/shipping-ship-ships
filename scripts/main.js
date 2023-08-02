import { CargoShipList } from "./cargoShips.js";
import { HaulersList } from "./shipHaulers.js";
import { DockList } from "./docks.js";

let htmlContainer = document.querySelector(".container")

const htmlContent = 
    `<h1>Shipping Ship Ships</h1>
    <article class="details">
        <section class="detail--column"> 
            <h2>List of Cargo Ships</h2>
            ${CargoShipList()}
        </section>
        <section class="detail--column">
            <h2>Haulers</h2>
            ${HaulersList()}
        </section>
        <section class="detail--column">
            <h2>Docks</h2>
            ${DockList()}
        </section>
    </article>`
    // <article>
    //     <h2>Current Assignments</h2>
    //     ${Assignments()}
    // </article>

    htmlContainer.innerHTML = htmlContent

    