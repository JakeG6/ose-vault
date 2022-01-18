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
    type?:string,
    damage?: string,
    ac?: number,
    weight?:number,
    isShield?:boolean
    qualities?: Array<string>
}

interface Armor {
    name: string,
    AC: number,
    cost: number,
    weight: number,
    isShield?: boolean
}

interface CharMoney {
    
    cp: number,
    sp: number,
    gp: number,
    ep: number,
    pp: number
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
    abilityScores: AbilityScores,
    charMoney: CharMoney,
    equipment: (Gear)[],
    spellsKnown: (Spell)[],
    wornArmor: Gear | undefined
}
interface SavingThrows {
    d: number,
    w: number,
    p: number,
    b: number,
    s: number
}

interface Spell {
    class: string,
    level: number,
    duration: string,
    range: string,
    description: string

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
    SavingThrows,
    Spell,
    Weapon
}