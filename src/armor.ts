import { Armor } from "./types";

const armor: Array<Armor> = [
    {name: "Leather",       AC:12,  cost: 20, weight:200},
    {name: "Chainmail",     AC:14,  cost: 40, weight: 400},
    {name: "Plate mail",    AC:16,  cost: 60, weight: 500},
    {name:"Shield",          AC:1,  cost: 10, weight:100, isShield: true}
    
]

export default armor;