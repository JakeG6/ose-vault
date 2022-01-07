import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';

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
            <label htmlFor="firstName">Name</label>
            <Field id="name" name="name" placeholder="Name" />

            <label htmlFor="alignment">Alignment</label>
            <Field as="select" name="alignment">
                <option value="lawful">Lawful</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic">Chaotic</option>
            </Field>

            <p>Languages</p>
            <div role="group" aria-labelledby="checkbox-group">
            {
                languageArr.map(language => (
                    <label>
                        <Field type="Checkbox" key={language} name="languages" value={language} />
                        {language}
                    </label>
                ))
            }
            </div>

        </div>
    )
}

export default AlignmentAndLanguages;