import { CharSheet } from "../../types";

const defaultCharSheet: CharSheet = {
    name: '',
    class: '',
    title: '',
    level: 1,
    alignment: 'neutral',
    languages: ['common'],
    ac: 9,
    hp: 1,
    abilityScores: {
        str: 3,
        dex: 3,
        con: 3,
        int: 3,
        wis: 3,
        cha: 3
    },
    charMoney: {
        cp: 0,
        sp: 0,
        gp: 0,
        ep: 0,
        pp: 0
    },
    equipment: [],
    spellsKnown: []
 
}

export default defaultCharSheet;