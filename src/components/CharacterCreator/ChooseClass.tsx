import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';


const ChooseClass = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const values:any= formikProps.values;


    return (
        <div>

            <p>Character Class</p>
            <div>
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
                <p>Class Blurb goes here</p>
            </div>
        </div>
    )
}

export default ChooseClass;