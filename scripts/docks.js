import { getDocks, getHaulingShips } from "./database.js"

const allHaulers = getHaulingShips()

export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-id="${dock.id}" data-location="${dock.location}"data-type="dock">${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        //was a dock item clicked
        if(itemClicked.dataset.type === "dock"){
        
        //get the dock id of item clicked from data attributes
        const dockId = itemClicked.dataset.id
        const dockLocation = itemClicked.dataset.location

        //define a default variable for what is being docked
        let dockedHauler = ""

        //iterate the array of hauler objects
        
        for (const hauler of allHaulers) {
        
            //does the dock id foreign key match the id of the current dock
            if(parseInt(dockId) === hauler.dockId){

            //reassign default variable of dockedHauler
            //if the id of a dock only matches one hauler then i want to add that hauler to the dockedHauler variable
                dockedHauler += `${hauler.name}, `

                // concatenatedString.substring(0, concatenatedString.length - 1)
            }
            //if the id of a dock matches the dock id of more than one hauler then i want to add BOTH to dockedHauler variable
            //if the id of a dock never matches any dock id of a hauler then i want to add string "nothing" to dockedHauler variable
        }
            if(dockedHauler === ""){
                window.alert(`The ${dockLocation} dock is currently unloading nothing`)
            }else{
        //show alert with specific format
        const dockedHauler2 = dockedHauler.slice(0, dockedHauler.length - 2)
        window.alert(`The ${dockLocation} dock is currently unloading ${dockedHauler2}`)
            }
        } 
    }
)