import { getShippingShips } from "./database.js"


export const CargoShipList = () => {
    const cargoShips = getShippingShips()

    let cargoHTML = "<ul>"

    for (const ship of cargoShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        cargoHTML += `<li>${ship.name}</li>`
    }

    cargoHTML += "</ul>"

    return cargoHTML
}