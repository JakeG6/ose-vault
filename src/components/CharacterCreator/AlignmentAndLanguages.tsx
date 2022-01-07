import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import { AbilityScores } from '../../types';

const languageArr: Array<string> = [
    "Bugbear",
    "Doppelgänger",
    "Dragon",
    "Dwarvish",
    "Elvish",
    "Gargoyle",
    "Gnoll",
    "Gnomish",
    "Goblin",
    "Halfling",
    "Harpy",
    "Hobgoblin",
    "Kobold",
    "Lizard man",
    "Medusa",
    "Minotaur",
    "Ogre",
    "Orcish",
    "Pixie",
    "Human dialect"
]

const AlignmentAndLanguages = () => {

    return (
        <div>

            <p>Alignment and Languages</p>

            <label htmlFor="alignment">Alignment</label>
            <Field as="select" name="alignment">
                <option value="lawful">Lawful</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic">Chaotic</option>
            </Field>

            <div role="group" aria-labelledby="checkbox-group">
                
            {
                languageArr.map(language => (
                    <label>
                        <Field type="checkbox" name="languages" value={language} />
                        {language}
                    </label>
                ))
            }
            </div>

            <label htmlFor="languages">Languages</label>
            <Field as="checkbox" name="languages">
                <option value="lawful">Lawful</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic">Chaotic</option>
            </Field>
        </div>
    )
}

export default AlignmentAndLanguages;