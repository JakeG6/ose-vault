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

  const [formStep, setFormStep] = useState<number>(0)
  const [pageData, setPageData] = useState({hasRolledScores: false, hasRolledHP: false})
  
  const displayFormStep = (formStep: number) => {
    switch (formStep) {
      case 0:
        return <CharGenOptions  />;
      case 1:
        return <AbilityScoreGen pageData={pageData} setPageData={setPageData}   />;
      case 2:
        return <ChooseClass  />;
      case 3:
        return <HitPointGen pageData={pageData} setPageData={setPageData}  />;
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
        initialValues={defaultCharSheet}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        enableReinitialize={true}

      >
        <Form>
          
          {displayFormStep(formStep)}
        </Form>
      </Formik>
      { formStep !== 0 ? <div onClick={() => setFormStep(formStep - 1)}>back</div> : <div></div> }
      { formStep + 1 !== 7 ? <div onClick={() => setFormStep(formStep + 1)}>next</div> : <div></div> }
    </div>
  );

}

export default CharacterCreator;