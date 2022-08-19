import { getColonies, getColoniesMinerals, getMinerals, getTransientStates, setColoniesMinerals, addPurchase } from "./database.js"
import { Minerals } from "./minerals.js"
// 



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "purchase") {
            const transientStates = getTransientStates()
            const coloniesMinerals = getColoniesMinerals()



            for (const newArray of coloniesMinerals) {
                if (transientStates.mineralId === newArray.mineralId) {
                    if (transientStates.colonyId === newArray.colonyId) {

                        newArray.tons = newArray.tons + 1

                    }
                }
            }

            setColoniesMinerals(coloniesMinerals)


            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id === "purchase") {
//             const transientStates = getTransientStates()
//             const mineralFacilities = getMineralFacility()



//             for (const mineral of mineralFacilities) {
//                 if (transientStates.mineralId === mineral.mineralId) {
//                     if (transientStates.facilityId === mineral.facilityId) {

//                         mineral.tons = mineral.tons - 1

//                     }
//                 }
//             }

//             setMineralFacility(mineralFacilities)

//             document.dispatchEvent(new CustomEvent("stateChanged"))
//         }
//     }
// )








export const listColonies = () => {
    const colonies = getColonies()
    const minerals = getMinerals()
    const colonieMinerals = getColoniesMinerals()
    const transientStates = getTransientStates()
    const Mineral = Minerals()
    const colonyName = colonies.find(
        (colony) => {
            return colony.id === transientStates.colonyId

        }
    )

    const foundMineral = minerals.find(
        (minerals) => {

            return minerals.id === transientStates.mineralId


        }

    )


    if (colonyName) {
        return `<h2>${colonyName?.name}<h2>
    `
    }
    else {
        return `Colony Minerals`
    }
}


// establish a realtionship between colonies and colonies minerals
// establish a realtionship between colony minerals and colonies
// return html that output mineral name to mineral colony

// create a event listener that will set colony mineral id in the transient state
//
export const governorColonyMineral = () => {
    const colonies = getColonies()
    const colonieMinerals = getColoniesMinerals()
    const minerals = getMinerals()
    const transientStates = getTransientStates()




    let foundColonyMineralObjects = []
    for (const colonie of colonies) {
        if (colonie.id === transientStates.colonyId)
            for (const colonyMineralOject of colonieMinerals) {
                if (colonyMineralOject.colonyId === colonie.id) {
                    foundColonyMineralObjects.push(colonyMineralOject)
                }
            }
    }

    let colonyMineralNames = ""
    for (const foundColonyMineralObject of foundColonyMineralObjects) {
        for (const mineral of minerals) {
            if (mineral.id === foundColonyMineralObject.mineralId) {
                colonyMineralNames += `<div value="${mineral.id}">${foundColonyMineralObject.tons} tons of ${mineral.name}</div>`
            }
        }
    }
    return `${colonyMineralNames}`

}

