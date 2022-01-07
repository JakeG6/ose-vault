import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';

let chance = require('chance').Chance();


const HitPointGen = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    console.log(formikProps)

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

    const values:any= formikProps.values;

    const randStartingHitPoints = (con: number, charClass: string) =>  {

        console.log(con, charClass);

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

        const rolledHP = chance.rpg(hitDie, {sum: true});
        console.log(rolledHP)

        if (rolledHP + getConMod(con) < 1) {
            randStartingHitPoints(con, charClass);
        }
        else {
            formikProps.setFieldValue("hp", rolledHP);
            formikProps.setFieldTouched("hp", true)
        }
       
    }

    return (
        <div>

            <p>Starting Hit Points</p>
            <button type="button" onClick={() => randStartingHitPoints(values.abilityScores.con, values.class)}>Roll Starting Hit Points</button>

            <label htmlFor="hp">Hit Points</label>
            <Field disabled={true} type="number" min="1" id="hp" name="hp"  />

        </div>
    )
}

export default HitPointGen;