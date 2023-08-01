const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Teenie Weenie", dockId: 3},
        { id: 2, name: "Jean Bean", dockId: 2},
        { id: 3, name: "Humpty Dumpty", dockId: 2},
        { id: 4, name: "Lou Goo", dockId: 1},
        { id: 5, name: "Lyle Crocodile", dockId: 1},

    ],
    shippingShips: [
        {id: 1, name: "Ghost of Red Sea", haulerId: 1},
        {id: 2, name: "Titan Titanic", haulerId: 3 },
        {id: 3, name: "Ocean Spray", haulerId: 5},
        {id: 4, name: "Sea Breeze", haulerId: 2},
        {id: 5, name: "Lady Atlantis", haulerId: 4},
        {id: 6, name: "Myflour", haulerId: 1},
        {id: 7, name: "Plankton", haulerId: 3 },
        {id: 8, name: "Bab's Barnacle", haulerId: 5},
        {id: 9, name: "Pirate's of the Caribbean 4", haulerId: 2},
        {id: 10, name: "Lois Griffin", haulerId: 1}
    ]
}

export const getDocks = () => {
    // You write the code for copying the array and returning it
    return database.docks.map(dock=>({...dock}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return database.haulers.map(hauler=>({...hauler}))
}

export const getShippingShips = () => {
    // You write the code for copying the array and returning it
    return database.shippingShips.map(ship=>({...ship}))
}