import { getGovernors } from "./database.js"

const governers = getGovernors()








export const Governers = () => {
    return `<h2>Governors</h2>
        <select id="wheel">
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