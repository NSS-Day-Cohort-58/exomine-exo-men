import { getColonies, getColoniesMinerals, getMinerals, getMineralFacility } from "./database.js"

const buildOrderListItem = (order) => {
    const colonies = getColonies()
    const minerals = getMinerals()
    const coloniesMinerals = getColoniesMinerals()
    const mineralFacilities = getMineralFacility()

    const colonyName = colonies.find(
        (colony) => {
            if (colony.id === order.colonyId)
            return colony.name
        }
    )

    const foundMineral = minerals.find(
        (mineral) => {
            if (mineral.id === order.mineralId)
            return mineral.name
        }

    )
        
   const mineralTons = order.tons++

    return `<h2>${colonyName.name}<h2>
            <h4>
                ${mineralTons} tons of ${foundMineral.name}
            <h4>`
}

export const Sales = () => {
    const sales = getColoniesMinerals()
    return `
        <section>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </section>
    `
}
