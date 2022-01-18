import { Armor, Gear } from "./types";

const armor: Array<Gear> = [
    {name: "Leather",    type:'armor',   ac:12,  cost: 20, weight:200},
    {name: "Chainmail", type:'armor',    ac:14,  cost: 40, weight: 400},
    {name: "Plate mail",  type:'armor',  ac:16,  cost: 60, weight: 500},
    {name:"Shield",      type:'armor',    ac:1,  cost: 10, weight:100, isShield: true}
    
]

export default armor;