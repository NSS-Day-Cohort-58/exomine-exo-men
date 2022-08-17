import { getGovernors, setColonies, setGovernors, purchaseMineral } from "./database.js"

const governers = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governer") {
            const [govId, colonyId] = event.target.value.split("--")
            setColonies(parseInt(colonyId))
            setGovernors(parseInt(govId))
        }
    }
)

export const Governers = () => {
    return `<h2>Governors</h2>
        <select id="governer">
            <option value="0">Select a governer type</option>
            ${governers.map(
        (governer) => {
            return `<option value="${governer.id}--${governer.colonyId}">${governer.name}</option>`
        }
    ).join("")
        }
        </select>
    `
}