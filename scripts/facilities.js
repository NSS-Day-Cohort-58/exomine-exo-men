import { getFacilities, setFacility, getTransientStates } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facility") {
            const [, facilityId] = event.target.value.split("--")
            setFacility(parseInt(facilityId))
            
        }
    }
)


export const Facilities = () => {
    const facilities= getFacilities ()
    

    let html = "<h2>Facilities</h2>"

    html += '<select id="facility">'
    html += '<option value="0">Choose a facility</option>'

    const arrayofFacilities = facilities.map( (facility) => {
            return `<option value="--${facility.id}">${facility.name}</option>`
        }
    )

    html += arrayofFacilities.join("")
    html += "</select>"
    return html
}
//display the facility name when facility is clicked on 
// establish realtionship facility.id & transisent state. facilityID
//return html that has the name of the facility

export const facilitiesName = () => {
const transientStates= getTransientStates ()
const facilities = getFacilities ()

const colonyName = facilities.find(
    (facility) => {
        return facility.id === transientStates.facilityId

    }
)
if (colonyName) {
    return `Minerals of ${colonyName?.name}
`
}
else {
    return `Facility Minerals`
}


}