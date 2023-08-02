import { getShippingShips, getHaulingShips } from "./database.js"

const haulers = getHaulingShips()

const cargoShips = getShippingShips()

cargoShips.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })

export const CargoShipList = () => {


    let cargoHTML = "<ul>"

    for (const ship of cargoShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
        cargoHTML += `<li data-haulerid="${ship.haulerId}" data-cargoname="${ship.name}" data-type="cargoships">${ship.name}</li>`
    }

    cargoHTML += "</ul>"

    return cargoHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if(itemClicked.dataset.type === "cargoships"){

            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.haulerid
            const shipName = itemClicked.dataset.cargoname

            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            for (const hauler of haulers) {
                // Does the haulerId foreign key match the id of the current hauler?
                if(parseInt(haulerId) === hauler.id){
                     // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = hauler.name
                }
            }
            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant
            window.alert(`${shipName} is being hauled by ${haulingShip}`)
        }
    }
)