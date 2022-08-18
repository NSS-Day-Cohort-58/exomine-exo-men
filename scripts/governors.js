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








// when governors is clicked the colony appears
// when the colony appears the minerals associated with that colony needs to pop up
// if colony id is equal to colony mineral . colony id 
// if mineral id is equal to colony mineral . mineral id 
// print statement

// I think this is how we need to set it up 

// const employees = getEmployees()
// const orders = getOrders()


// Function whose responsibility is to find the product for an order
// const findProduct = (order, allProducts) => {
//     let orderProduct = ""

//     for (const product of allProducts) {
//         if (product.id === order.productId) {
//             orderProduct = product
//         }
//     }

//     return orderProduct
// }

// // Function whose responsibility is to find the employee for an order
// const findEmployee = (order, allEmployees) => {
//     let orderEmployee = ""

//     for (const employee of allEmployees) {
//         if (employee.id === order.employeeId) {
//             orderEmployee = employee
//         }
//     }

//     return orderEmployee
// }

// export const Orders = () => {
//     let html = ""
//     html += "<ul>"

//     for (const order of orders) {
//         const employee = findEmployee(order, employees)
//         const product = findProduct(order,products)
        
//         html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
//     }

//     html += "</ul>"

//     return html
// }
