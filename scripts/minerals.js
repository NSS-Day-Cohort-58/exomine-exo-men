import { getMinerals, setMinerals } from "./database.js"

const minerals = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "minerals") {
            const [, mineralId] = event.target.value.split("--")
            setMinerals(parseInt(mineralId))

        }
    }
)

export const Minerals = () => {
    return `
        <ul id="minerals">
            
            ${minerals.map(
        (minerals) => {
            return `<li value="minerals--${minerals.id}">${minerals.name}</li>`
        }
    ).join("")
        }
        </ul>
    `
}