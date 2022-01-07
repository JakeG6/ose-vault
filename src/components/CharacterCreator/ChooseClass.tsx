import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import { AbilityScores } from '../../types';


const ChooseClass = () => {

    return (
        <div>

            <p>Character Class</p>

            <label htmlFor="class">Class</label>
            <Field as="select" name="class">
            <option value="cleric">Cleric</option>
            <option value="dwarf">Dwarf</option>
            <option value="elf">Elf</option>
            <option value="fighter">Fighter</option>
            <option value="halfling">Halfling</option>
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