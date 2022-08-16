import { getColonies, getColoniesMinerals, getMinerals } from "./database.js"





const buildOrderListItem = (order) => {
    const colonies = getColonies()
    const minerals = getMinerals()
    const colonieMinerals = getColoniesMinerals()

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
