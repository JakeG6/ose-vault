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
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    }
 
}

export default defaultCharSheet;