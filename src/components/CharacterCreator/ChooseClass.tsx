import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';


const ChooseClass = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const values:any= formikProps.values;


    return (
        <div>

            <p>Character Class</p>

            <label htmlFor="class">Class</label>
            <Field as="select" name="class">
                <option  value="cleric">Cleric</option>
                <option disabled={values.abilityScores.con < 9} value="dwarf">Dwarf</option>
                <option disabled={values.abilityScores.int < 9} value="elf">Elf</option>
                <option value="fighter">Fighter</option>
                <option disabled={values.abilityScores.con >= 9 && values.abilityScores.dex >= 9} value="halfling">Halfling</option>
                <option value="magic-user">Magic-User</option>
                <option value="thief">Thief</option>
            </Field>
            <div>
                <p>Class Blurb goes here</p>
            </div>
        </div>
    )
}

export default ChooseClass;