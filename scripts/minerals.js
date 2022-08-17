import { getMinerals, setMinerals, getMineralFacility, getTransientStates} from "./database.js"

const minerals = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            const [, mineralId] = event.target.value.split("--")
            setMinerals(parseInt(mineralId))

        }
    }
)

export const Minerals = () => {
    const mineralFacilities = getMineralFacility()
    const transientStates = getTransientStates()
   
    const facilityName = mineralFacilities.find(
        (mineralFacility) => {
            return mineralFacility.id === transientStates.facilityId
        }
    )
   
    // const mineralName = mineralFacilities.find(
    //     (mineralFacility) => {
    //         return mineralFacility.mineralId === transientStates.mineralId
    //     }
    // )

    let html = "<ul>"
        
    const listMinerals = minerals.map(
        (mineral) => {
            return `<li>
                <input type="radio" name="mineral" value="--${mineral.id}"/>${facilityName?.tons} tons of ${mineral.name}
                </li>`
        }
    )
    html += listMinerals.join("")
    html += "</ul>"

    return html
    
}

