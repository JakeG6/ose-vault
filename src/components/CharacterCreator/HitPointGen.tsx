import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import { AbilityScores } from '../../types';

let chance = require('chance').Chance();



const HitPointGen = (props: any) => {

    const [hasRolledHP, setHasRolledHP] = useState(false)

    const getConMod = (con: number) => {
        if (con === 3) {
            return -3
        }
        else if (con <= 5) { return -2 }
        else if (con <= 8) { return -1 }
        else if (con <= 12) { return 0 }
        else if (con <= 15) { return 1 }
        else if (con <= 17) { return 2 }
        else if (con >= 18) { return 3 }
        else { return 0 }
    }



    const randStartingHitPoints = (con: number, charClass: string) =>  {

        let hitDie: string = `1d4`;

        if (charClass === 'cleric') { 
            hitDie = '1d6' ; 
        }
        if (charClass === 'dwarf') { 
            hitDie = '1d8' ; 
        }
        if (charClass === 'elf') { 
            hitDie = '1d6' ; 
        }
        if (charClass === 'fighter') { 
            hitDie = '1d8' ; 
        }
        if (charClass === 'halfling') { 
            hitDie = '1d6' ; 
        }
        if (charClass === 'magic-user') { 
            hitDie = '1d4' ; 
        }
        if (charClass === 'thief') { 
            hitDie = '1d4' ; 
        }

        const rolledHP = chance.rpg(hitDie);

        rolledHP < 1 ? randStartingHitPoints(con, charClass) : props.setCharSheet({ ...props.charSheet, hp: rolledHP })
    }


    return (
        <div>

            <p>Starting Hit Points</p>
            <button type="button" onClick={() => console.log('number here')}>Roll Starting Hit Points</button>

            <label htmlFor="hp">Hit Points</label>
            <Field disabled={!hasRolledHP} type="number" min="1" id="hp" name="hp"  />

        </div>
    )
}

export default HitPointGen;