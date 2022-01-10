import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext,  } from 'formik';
import { AbilityScores } from '../../types';

let chance = require('chance').Chance();

const AbilityScoreGen = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext();

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

        if (!props.pageData.hasRolledScores) {
            props.setPageData({...props.pageData, hasRolledScores: true})
        }

    }

    return (
        <div>

            <p className="text-3xl font-bold underline">Ability Scores</p>
            <button type="button" onClick={() => rollAbilityScores()} className='rounded-none bg-green-50'>
                Roll Ability Scores
            </button>
            <div className="bg-rose-200 grid grid-cols-2" >
                <div  >
                    <div>
                        <label htmlFor="abilityScores.str">Strength</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="str" name="abilityScores.str"  />
                    </div>
                    <div>
                        <label htmlFor="abilityScores.dex">Dexterity</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="dex" name="abilityScores.dex"  />

                    </div>
                    <div>
                        <label htmlFor="abilityScores.con">Constitution</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="con" name="abilityScores.con"  />

                    </div>
                    <div>
                        <label htmlFor="abilityScores.int">Intelligence</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="int" name="abilityScores.int"  />

                    </div>
                    <div>
                        <label htmlFor="abilityScores.wis">Wisdom</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="wis" name="abilityScores.wis"  />

                    </div>
                    <div>
                        <label htmlFor="abilityScores.cha">Charisma</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" id="cha" name="abilityScores.cha"  />

                    </div>
                </div>
                <div className="bg-fuchsia-200" >
                    <p>Ability Score Blurb goes here</p>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default AbilityScoreGen;