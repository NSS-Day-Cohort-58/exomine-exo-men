// import functions go here 

import { Facilities } from "./facilities.js"

import { Governers } from "./governors.js"
import { listColonies } from "./colonies.js"
import { Minerals } from "./minerals.js"


// import { addPurchase } from "./database.js"
// import { Sales } from "./Sales.js"
// import {Entrees} from "./Entrees.js"
// import {Sides} from "./SideDishes.js"
// import {Vegetables} from "./Vegetables.js"

// event listener go here

// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("purchase")){
//             addPurchase()
//         }
//     }
// )

export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Exo Men Mining Marketplace</h1>
        </header>

        <article class="choices">
             <section class="choices__governor options">
                 ${Governers()}
             </section>
             <section class="choices__facility options">
                 ${Facilities()}
             </section>
             <section class="choices__minerals options">
                ${ Minerals() }
            </section>
        </article>

        <article class="customerOrders">
            
        ${listColonies()}
        </article>
        
        <aside class="spaceCart">
        <h2>Space Cart </h2>
        <button id="purchase">Purchase Mineral</button>
    </aside>

    `
}