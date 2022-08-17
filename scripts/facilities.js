import { getFacilities, setFacility } from "./database.js";
const facilities= getFacilities ()

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