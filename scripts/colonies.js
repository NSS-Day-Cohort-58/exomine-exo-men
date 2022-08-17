import { getColonies, getColoniesMinerals, getMinerals, getTransientStates } from "./database.js"

// 



const listColonies = () => {
    const colonies = getColonies()
    const minerals = getMinerals()
    const colonieMinerals = getColoniesMinerals()
    const transientStates= getTransientStates ()

    const colonyName = colonies.find(
        (colony) => {
            return colony.id === order.colonyId

        }
    )

    const foundMineral = minerals.find(
        (mineral) => {

            if (mineral.id === order.mineralId) {
                return mineral.name
            }

        }

    )

    const mineralTons = order.tons++

    return `<h2>${colonyName.name}<h2>
            <h4>
                ${mineralTons} tons of ${foundMineral.name}
            <h4>`
}
