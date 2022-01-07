interface AbilityScores {
    str: number,
    dex: number,
    con: number,
    int: number,
    wis: number,
    cha: number
}

interface Gear {
    name: string,
    cost: number,
}

interface Armor {
    name: string,
    AC: number,
    cost: number,
    weight: number
}

interface CharSheet {
    name: string,
    class: string,
    title: string,
    level: number,
    alignment: string,
    languages: Array<string>
    ac: number,
    hp: number,
    abilityScores: AbilityScores
}

interface Weapon {
    name: string,
    cost: number,
    weight: number,
    damage: string,
    qualities: Array<string>
}

export { 
    AbilityScores, 
    Armor,
    Gear,
    CharSheet,
    Weapon
}