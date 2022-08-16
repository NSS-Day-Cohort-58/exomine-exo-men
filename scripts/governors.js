import { getGovernors, setColonies } from "./database.js"

const governers = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governer") {
            setColonies(parseInt(event.target.value))
        }
    }
)






export const Governers = () => {
    return `<h2>Governors</h2>
        <select id="governer">
            <option value="1">Select a governer type</option>
            ${governers.map(
        (governer) => {
            return `<option value="${governer.id}">${governer.name}</option>`
        }
    ).join("")
        }
        </select>
    `
}