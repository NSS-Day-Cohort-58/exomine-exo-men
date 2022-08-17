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

    // const mineralTons = colonieMinerals.find(
    //     (colonieMineral) => {
    //         if (colonieMineral.id === transientStates.colonyId) {
    //             return colonieMinerals.tons++
    //         }
    //     }
    // )
    // const tonsAmount = colonieMinerals.find(
    //     (colonieMineral) => {
    //         return colonieMineral.mineralId === minerals.id
    //         // return `${mineralTons} tons of ${foundMineral.name}
    //         // `
    //     }
    // )
    return `<h2>${colonyName?.name}<h2>
            <h4>${5} tons of ${"bitcoin"}</h4>
    `
}
