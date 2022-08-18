import { getColonies, getColoniesMinerals, getMinerals, getTransientStates } from "./database.js"
import { Minerals } from "./minerals.js"
// 



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
