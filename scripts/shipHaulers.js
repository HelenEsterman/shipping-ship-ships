import { getHaulingShips } from "./database.js"


export const HaulersList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
        haulersHTML += `<li>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}