import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import AbilityScoreGen from './AbilityScoreGen';
import ChooseClass from './ChooseClass';
import HitPointGen from './HitPointGen';
import AlignmentAndLanguages from './AlignmentAndLanguages';
import CharGenOptions from './CharGenOptions';
import CharSummary from './CharSummary';
import ChooseEquipment from './ChooseEquipment';


const CharacterCreator = () => {

  const [charSheet, setCharSheet ] = useState(defaultCharSheet);
  const [formStep, setFormStep] = useState(0)
  
  const displayFormStep = (formStep: number) => {
    switch (formStep) {
      case 0:
        return <CharGenOptions  />;
      case 1:
        return <AbilityScoreGen charSheet={charSheet} setCharSheet={setCharSheet}  />;
      case 2:
        return <ChooseClass  />;
      case 3:
        return <HitPointGen charSheet={charSheet} setCharSheet={setCharSheet}  />;
      case 4:
        return <AlignmentAndLanguages  />;
      case 5:
        return <ChooseEquipment  />;
      case 6:
        return <CharSummary  />;
      default:
        return <div>Not Found</div>;
    }
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
          {displayFormStep(formStep)}
        </Form>
      </Formik>
      { formStep !== 0 ? <div onClick={() => setFormStep(formStep - 1)}>back</div> : <div></div> }
      { formStep + 1 !== 7 ? <div onClick={() => setFormStep(formStep + 1)}>next</div> : <div></div> }
    </div>
  );

}

export default CharacterCreator;