const database = {
    governors: [
        { id: 1, name: "Shane", active: false, colonyId: 1 },
        { id: 2, name: "Nathan", active: true, colonyId: 2 },
        { id: 3, name: "Nick", active: true, colonyId: 3 },
        { id: 4, name: "Val", active: true, colonyId: 4 },
    ],

    colonies: [
        { id: 1, name: "Hockeytown" },
        { id: 2, name: "NSS" },
        { id: 3, name: "AC/DC" },
        { id: 4, name: "Codetown" },
    ],

    minerals: [
        { id: 1, name: "Gold" },
        { id: 2, name: "Silver" },
        { id: 3, name: "Urainum" },
        { id: 4, name: "Bitcoin" },
    ],

    facilities: [
        { id: 1, name: "Hockeyshop", active: true },
        { id: 2, name: "NSS Lab", active: false },
        { id: 3, name: "Rock City", active: true },
        { id: 4, name: "Code Kiosk", active: true },
    ],

    coloniesMinerals: [
        { id: 1, colonyId: 3, mineralId: 2, tons: 2 },
    ],

    mineralFacility: [
        { id: 1, mineralId: 1, facilityId: 4, tons: 30 },
        { id: 2, mineralId: 2, facilityId: 3, tons: 50 },
        { id: 3, mineralId: 4, facilityId: 2, tons: 20 },
        { id: 4, mineralId: 3, facilityId: 1, tons: 5 },
    ],


    transientState: {}
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}

export const getColoniesMinerals = () => {
    return database.coloniesMinerals.map(coloniesMineral => ({ ...coloniesMineral }))
}
export const getMineralFacility = () => {
    return database.mineralFacility.map(mineralFacility => ({ ...mineralFacility }))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernors = (id) => {
    database.transientState.governorId = id
}
export const setFacilities = (id) => {
    database.transientState.facilityId = id
}
export const setMinerals = (id) => {
    database.transientState.mineralId = id
}
export const setColonies = (id) => {
    database.transientState.colonyId = id
}




export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setStyle = (id) => {
    database.orderBuilder.styleId = id
}






export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}