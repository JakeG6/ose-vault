import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import { AbilityScores } from '../../types';

let chance = require('chance').Chance();

const CharacterCreator = () => {

  const [charSheet, setCharSheet ] = useState(defaultCharSheet);

  const [hasRolledScores, setHasRolledScores] = useState(false)

  const randAbilityScore = () =>  chance.rpg(`3d6`, {sum: true});

  const rollAbilityScores = () => {
      console.log('rolling')

      console.log(randAbilityScore)

      let newScores: AbilityScores = {
        str: randAbilityScore(),
          dex: randAbilityScore(),
          con: randAbilityScore(),
          int: randAbilityScore(),
          wis: randAbilityScore(),
          cha: randAbilityScore(),
      }
      console.log(newScores)

      setCharSheet({
        ...charSheet,
        abilityScores: newScores
      }
      )

      if (!hasRolledScores) {
        setHasRolledScores(true)
      }

      console.log(charSheet)

  }

  return (
    <div className="App">
                

      <Formik
        initialValues={charSheet}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        enableReinitialize={true}

      >
        <Form>
          <label htmlFor="firstName">Name</label>
          <Field id="name" name="name" placeholder="Name" />

          <p>ability scores</p>
          <button type="button" onClick={() => rollAbilityScores()}>Roll Ability Scores</button>
          
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

          <p>Hit Points</p>

          <button type="button" onClick={() => console.log('good job)')} >Roll Hit Points</button>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );

}

export default CharacterCreator;