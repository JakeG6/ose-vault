import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext,  } from 'formik';
import { AbilityScores } from '../../types';

let chance = require('chance').Chance();

const AbilityScoreGen = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const [hasRolledScores, setHasRolledScores] = useState(false)

    const rollAbilityScores = () => {

        const randAbilityScore = () =>  chance.rpg(`3d6`, {sum: true});

        let newScores: AbilityScores = {
            str: randAbilityScore(),
            dex: randAbilityScore(),
            con: randAbilityScore(),
            int: randAbilityScore(),
            wis: randAbilityScore(),
            cha: randAbilityScore(),
        }
        console.log(newScores)

        formikProps.setFieldValue("abilityScores", newScores)

        if (!hasRolledScores) {
            setHasRolledScores(true)
        }

    }

    return (
        <div>

            <p>Ability Score</p>
            <button type="button" onClick={() => rollAbilityScores()}>Roll Ability Scores</button>
            <div>
                <label htmlFor="abilityScores.str">Strength</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="str" name="abilityScores.str"  />
                <label htmlFor="abilityScores.dex">Dexterity</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="dex" name="abilityScores.dex"  />
                <label htmlFor="abilityScores.con">Constitution</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="con" name="abilityScores.con"  />
                <label htmlFor="abilityScores.int">Intelligence</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="int" name="abilityScores.int"  />
                <label htmlFor="abilityScores.wis">Wisdom</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="wis" name="abilityScores.wis"  />
                <label htmlFor="abilityScores.cha">Charisma</label>
                <Field disabled={!hasRolledScores} type="number" min="3" id="cha" name="abilityScores.cha"  />
            </div>
            <div>
                <p>Ability Score Blurb goes here</p>
            </div>
        </div>
    )
}

export default AbilityScoreGen;