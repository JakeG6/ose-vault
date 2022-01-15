import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import ClericBlurb from './ClericBlurb';
import DwarfBlurb from './DwarfBlurb';
import ElfBlurb from './ElfBlurb';
import HalflingBlurb from './HalflingBlurb';
import MagicUserBlurb from './MagicUserBlurb';
import FighterBlurb from './FighterBlurb';
import ThiefBlurb from './ThiefBlurb';


const ChooseClass = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const values:any= formikProps.values;

    //show associated class information on right side
    const setClassBlurb = (className:string) => {

        switch (className) {
            case 'cleric':
              return ClericBlurb()
              break;
            case 'dwarf':
                return DwarfBlurb()
              break;
            case 'elf':
              return ElfBlurb()
              break;
            case 'fighter':
                return FighterBlurb()
                break;
            case 'halfling':
                return HalflingBlurb()
                break;
            case 'magic-user':
                return MagicUserBlurb()
                break;
            case 'thief':
                return ThiefBlurb()
                break;
            default:
              return (<div></div>)
          }

    }

    return (
        <div>

            <p>Character Class</p>
            <div className="grid grid-cols-2">        
                <div className="grid grid-cols-1">
                    <label htmlFor="cleric">
                    <Field type="radio" name="class" value="cleric" />
                        Cleric
                    </label>
                    <label htmlFor="dwarf">
                        <Field disabled={values.abilityScores.con < 9} type="radio" name="class" value="dwarf" />
                        Dwarf
                    </label>
                    <label htmlFor="elf">
                        <Field disabled={values.abilityScores.int < 9} type="radio" name="class" value="elf" />
                        Elf
                    </label>
                    <label htmlFor="fighter">
                        <Field type="radio" name="class" value="fighter" />
                        Fighter
                    </label>
                    <label htmlFor="halfling">
                        <Field disabled={values.abilityScores.con >= 9 && values.abilityScores.dex >= 9} type="radio" name="class" value="halfling" />
                        Halfling
                    </label>
                    <label htmlFor="magic-user">
                        <Field  type="radio" name="class" value="magic-user" />
                        Magic-User
                    </label>
                    <label htmlFor="thief">
                        <Field  type="radio" name="class" value="thief" />
                        Thief
                    </label>
                    
                </div>
                <div>
                    {setClassBlurb(values.class)}
                </div>
            </div>
        </div>
    )
}

export default ChooseClass;