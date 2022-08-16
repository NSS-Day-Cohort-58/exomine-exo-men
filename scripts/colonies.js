import { getColonies, getColoniesMinerals, getMinerals } from "./database.js"

const buildOrderListItem = (order) => {
    const colonies = getColonies()
    const minerals = getMinerals()

    const colonyName = colonies.find(
        (colony) => {
            if (colony.id === order.colonyId)
            return colony.name
        }
    )

    const foundMineral = minerals.find(
        (mineral) => {
            if (mineral.id === order.mineralID)
            return mineral.name
        }

    )
        
   const mineralTons = minerals.find(
        (mineral) => {
            if (mineral.id === order.mineralID)
            return order.tons++
        }
   )

    return `<h2>${colonyName}<h2>
            <h4>
                ${mineralTons} tons of ${foundMineral}
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
