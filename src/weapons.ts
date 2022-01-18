import { Gear, Weapon } from "./types";

const weapons: Array<Gear> = [
    {name: "Battle axe", type: "weapon", cost: 7, weight: 50, damage: '1d8', qualities:  ["Melee", "Slow", "Two-handed"]},
    {name: "Club", type: "weapon",  cost: 3, weight: 50, damage: '1d4', qualities: ["Blunt", "Melee"]},
    {name: "Crossbow", type: "weapon",  cost: 30, weight: 50, damage: '1d6', qualities: ["Missile (5’–80’ / 81’–160’ / 161’–240’)", "Reload", "Slow", "Two-handed"]},
    {name: "Dagger", type: "weapon",  cost:	3, weight: 10, damage: '1d4', qualities: ["Melee", "Missile (5’–10’ / 11’–20’ / 21’–30’)"]},
    {name: "Hand Axe",type: "weapon",   cost: 4, weight: 30, damage: '1d6', qualities:["Melee", "Missile (5’–10’ / 11’–20’ / 21’–30’)"]},
    {name: "Holy Water Vial",type: "weapon",   cost:	25, weight: 0, damage: "1d8", qualities: ["Missile (5’–10’ / 11’–30’ / 31’–50’), Splash weapon"]},
    {name: "Javelin", type: "weapon",  cost:	1, weight: 20, damage: "1d4", qualities: ["Missile (5’–30’ / 31’–60’ / 61’–90’)"]},
    {name: "Lance",	type: "weapon",  cost: 5, weight: 120, damage: "1d6", qualities:["Charge, Melee"]},
    {name: "Long Bow", type: "weapon",  cost: 40, weight: 30, damage: "1d6", qualities:["Missile (5’–70’ / 71’–140’ / 141’–210’)", "Two-handed"]},
    {name: "Mace", type: "weapon",  cost: 5, weight: 30, damage: "1d6", qualities:["Blunt", "Melee"]},
    {name: "Oil flask, Burning", type: "weapon",  cost: 2, weight: 0, damage: "1d8", qualities:["Missile (5’–10’ / 11’–30’ / 31’–50’)", "Splash weapon"]},
    {name: "Polearm", type: "weapon",  cost:	7, weight: 150, damage: "1d10", qualities:["Brace, Melee, Slow, Two-handed"]},
    {name: "Short Bow", type: "weapon",  cost: 25, weight: 30, damage: "1d6", qualities:["Missile (5’–50’ / 51’–100’ / 101’–150’)", "Two-handed"]},
    {name: "Short Sword", type: "weapon",  cost: 7, weight: 30, damage: "1d6", qualities:["Melee"]},
    {name: "Silver Dagger", type: "weapon",  cost: 30, weight: 10, damage: "1d4", qualities:["Missile (5’–50’ / 51’–100’ / 101’–150’)", "Two-handed"]},
    {name: "Sling",	type: "weapon",  cost: 2, weight: 20, damage: "1d4", qualities:["Blunt", "Missile (5’–40’ / 41’–80’ / 81’–160’)"]},
    {name: "Spear",	type: "weapon",  cost: 4, weight: 30, damage: "1d6", qualities:["Brace", "Melee", "Missile (5’–20’ / 21’–40’ / 41’–60’)"]},
    {name: "Staff",	type: "weapon",  cost: 2, weight: 40, damage: "1d4", qualities: ["Blunt", "Melee", "Slow", "Two-handed"]},
    {name: "Sword", type: "weapon",  cost:10, weight: 60, damage: "1d8", qualities: ["Melee"]},
    {name: "Torch", type: "weapon",  cost: 1, weight: 0, damage: "1d4", qualities: ["Melee"]},
    {name: "Two-handed Sword",	type: "weapon",  cost: 15, weight: 150, damage: "1d10", qualities: ["Melee", "Slow", "Two-handed"]},
    {name: "Warhammer",	type: "weapon",  cost: 5, weight: 30, damage: "1d6", qualities: ["Melee", "Blunt"]}
]

export default weapons;