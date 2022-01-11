import { Weapon } from "./types";

const weapons: Array<Weapon> = [
    {name: "Battle axe",  cost: 7, weight: 50, damage: '1d8', qualities:  ["Melee", "Slow", "Two-handed"]},
    {name: "Club", cost: 3, weight: 50, damage: '1d4', qualities: ["Blunt", "Melee"]},
    {name: "Crossbow", cost: 30, weight: 50, damage: '1d6', qualities: ["Missile (5’–80’ / 81’–160’ / 161’–240’)", "Reload", "Slow", "Two-handed"]},
    {name: "Dagger", cost:	3, weight: 10, damage: '1d4', qualities: ["Melee", "Missile (5’–10’ / 11’–20’ / 21’–30’)"]},
    {name: "Hand Axe", cost: 4, weight: 30, damage: '1d6', qualities:["Melee", "Missile (5’–10’ / 11’–20’ / 21’–30’)"]},
    {name: "Holy Water Vial", cost:	25, weight: 0, damage: "1d8", qualities: ["Missile (5’–10’ / 11’–30’ / 31’–50’), Splash weapon"]},
    {name: "Javelin", cost:	1, weight: 20, damage: "1d4", qualities: ["Missile (5’–30’ / 31’–60’ / 61’–90’)"]},
    {name: "Lance",	cost: 5, weight: 120, damage: "1d6", qualities:["Charge, Melee"]},
    {name: "Long Bow", cost: 40, weight: 30, damage: "1d6", qualities:["Missile (5’–70’ / 71’–140’ / 141’–210’)", "Two-handed"]},
    {name: "Mace", cost: 5, weight: 30, damage: "1d6", qualities:["Blunt", "Melee"]},
    {name: "Oil flask, Burning", cost: 2, weight: 0, damage: "1d8", qualities:["Missile (5’–10’ / 11’–30’ / 31’–50’)", "Splash weapon"]},
    {name: "Polearm", cost:	7, weight: 150, damage: "1d10", qualities:["Brace, Melee, Slow, Two-handed"]},
    {name: "Short Bow", cost: 25, weight: 30, damage: "1d6", qualities:["Missile (5’–50’ / 51’–100’ / 101’–150’)", "Two-handed"]},
    {name: "Short Sword", cost: 7, weight: 30, damage: "1d6", qualities:["Melee"]},
    {name: "Silver Dagger", cost: 30, weight: 10, damage: "1d4", qualities:["Missile (5’–50’ / 51’–100’ / 101’–150’)", "Two-handed"]},
    {name: "Sling",	cost: 2, weight: 20, damage: "1d4", qualities:["Blunt", "Missile (5’–40’ / 41’–80’ / 81’–160’)"]},
    {name: "Spear",	cost: 4, weight: 30, damage: "1d6", qualities:["Brace", "Melee", "Missile (5’–20’ / 21’–40’ / 41’–60’)"]},
    {name: "Staff",	cost: 2, weight: 40, damage: "1d4", qualities: ["Blunt", "Melee", "Slow", "Two-handed"]},
    {name: "Sword", cost:10, weight: 60, damage: "1d8", qualities: ["Melee"]},
    {name: "Torch", cost: 1, weight: 0, damage: "1d4", qualities: ["Melee"]},
    {name: "Two-handed Sword",	cost: 15, weight: 150, damage: "1d10", qualities: ["Melee", "Slow", "Two-handed"]},
    {name: "Warhammer",	cost: 5, weight: 30, damage: "1d6", qualities: ["Melee", "Blunt"]}
]

export default weapons;