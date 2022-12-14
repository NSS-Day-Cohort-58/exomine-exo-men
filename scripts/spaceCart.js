import { getMinerals, setMinerals, getMineralFacility, getTransientStates, setMineralFacility } from "./database.js"

// when facility mineral is clicked, inside space cart it will display "1 ton of" whatever facility mineral was clicked
// establish a realtionship between transient state mineral id and mineral id
// maybe loop through facility and facility mineral? because the facility and facility mineral must be displayed inside the cart

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            const [, mineralId] = event.target.value.split("--")
            setMinerals(parseInt(mineralId))


        }
    }
)

export const spaceCart = () => {
    const transientStates = getTransientStates()
    const minerals = getMinerals()


    const mineralName = minerals.find(
        (mineral) => {
            return mineral.id === transientStates.mineralId

        }
    )

    if (mineralName) {
        return `<h2> 1 ton of ${mineralName?.name}<h2>
`
    }
    else {
        return ""
    }
}

// create a function that subtracts 1 when the mineral that is clicked inside of facility minerals
// establish a realtionship between mineral id and mineral facility. mineralId
// call object with that realationship and subtract 1 from tons 





document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "purchase") {
            const transientStates = getTransientStates()
            const mineralFacilities = getMineralFacility()



            for (const mineral of mineralFacilities) {
                if (transientStates.mineralId === mineral.mineralId) {
                    if (transientStates.facilityId === mineral.facilityId) {

                        mineral.tons = mineral.tons - 1

                    }
                }
            }

            setMineralFacility(mineralFacilities)

            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

