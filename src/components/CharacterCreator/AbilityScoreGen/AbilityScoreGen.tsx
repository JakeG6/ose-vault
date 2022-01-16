import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext,  } from 'formik';
import { AbilityScores } from '../../../types';
import ChaBlurb from './ChaBlurb';
import StrBlurb from './StrBlurb';
import DexBlurb from './DexBlurb';
import IntBlurb from './IntBlurb';
import ConBlurb from './ConBlurb';
import WisBlurb from './WisBlurb';

let chance = require('chance').Chance();

const AbilityScoreGen = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext();

    const values:any= formikProps.values;

    //ability score focused on for blurb display
    const [abilityOnFocus, setAbilityOnFocus] = useState<string>(!props.pageData.hasRolledScores ? '' : 'str')

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
        console.log(newScores);

        formikProps.setFieldValue("abilityScores", newScores);

        if (!props.pageData.hasRolledScores) {
            props.setPageData({...props.pageData, hasRolledScores: true});
            setAbilityOnFocus('str')
        }

    }

    const setAbilityBlurb = (abilityName:string) => {
        
        switch (abilityName) {
            case 'str':
                return StrBlurb(values.abilityScores.str);
            case 'dex':
                return DexBlurb(values.abilityScores.dex);
            case 'con':
                return ConBlurb(values.abilityScores.con);
            case 'int':
                return IntBlurb(values.abilityScores.int);
            case 'wis':
                return WisBlurb(values.abilityScores.wis);
            case 'cha':
                return ChaBlurb(values.abilityScores.cha);
            default:
                return (<div></div>)
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
                    <div onClick={() => setAbilityOnFocus('str')}>
                        <label htmlFor="abilityScores.str">Strength</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="str" name="abilityScores.str"  />
                    </div>
                    <div onClick={() => setAbilityOnFocus('dex')}>
                        <label htmlFor="abilityScores.dex">Dexterity</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="dex" name="abilityScores.dex"  />

                    </div>
                    <div onClick={() => setAbilityOnFocus('con')}>
                        <label htmlFor="abilityScores.con">Constitution</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="con" name="abilityScores.con"  />

                    </div>
                    <div onClick={() => setAbilityOnFocus('int')}>
                        <label htmlFor="abilityScores.int">Intelligence</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="int" name="abilityScores.int"  />
                    </div>
                    <div onClick={() => setAbilityOnFocus('wis')}>
                        <label htmlFor="abilityScores.wis">Wisdom</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="wis" name="abilityScores.wis"  />

                    </div>
                    <div onClick={() => setAbilityOnFocus('cha')}>
                        <label htmlFor="abilityScores.cha">Charisma</label>
                        <Field className="w-10" disabled={!props.pageData.hasRolledScores} type="number" min="3" max="18" id="cha" name="abilityScores.cha"  />

                    </div>
                </div>
                <div className="bg-fuchsia-200" >
                    {setAbilityBlurb(abilityOnFocus)}
                </div>
            </div>
        </div>
    )
}

export default AbilityScoreGen;