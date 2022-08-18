import { getMinerals, setMinerals, getMineralFacility, getTransientStates, getFacilities} from "./database.js"

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
    const minerals= getMinerals ()
    const facilities= getFacilities ()
   
    // loop through facilites
    // loop through mineral facilities 
    // if mineral faciliteis equals mineral id then print mineral name? 

    let foundFaciltyObjects= []
    for (const facility of facilities){
        if (facility.id=== transientStates.facilityId)
    for(const facilityOject of mineralFacilities){
        if(facilityOject.facilityId === facility.id){
            foundFaciltyObjects.push(facilityOject)
        }
    }
    }

    let mineralFacilitiesNames = ""
            for (const foundFaciltyObject of foundFaciltyObjects){
                for (const mineral of minerals){
                    if (mineral.id === foundFaciltyObject.mineralId){
                        mineralFacilitiesNames+= `
                        <li>
                        <input type= "radio" name="facility" value="${mineral.id}"/>${foundFaciltyObject.tons} tons of ${mineral.name}
                        </li>
                        `
                    }
                }
            }
            return `${mineralFacilitiesNames}`

        }