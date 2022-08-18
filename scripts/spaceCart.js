import { getMinerals, setMinerals, getMineralFacility, getTransientStates, getFacilities} from "./database.js"

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

export const spaceCart= () => {
const transientStates= getTransientStates ()
const minerals= getMinerals ()

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