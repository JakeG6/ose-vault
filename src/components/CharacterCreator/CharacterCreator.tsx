import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import AbilityScoreGen from './AbilityScoreGen/AbilityScoreGen';
import ChooseClass from './ChooseClass/ChooseClass';
import HitPointGen from './HitPointGen';
import AlignmentAndLanguages from './AlignmentAndLanguages';
import CharGenOptions from './CharGenOptions';
import CharSummary from './CharSummary';
import ChooseSpell from './ChooseSpell';
import ChooseEquipment from './ChooseEquipment';
import isChargenPropDisabled from './isChargenProgDisabled';

const CharacterCreator = () => {

  const [formStep, setFormStep] = useState<number>(0)
  const [pageData, setPageData] = useState({
    hasRolledScores: false, hasRolledHP: false, hasRolledGP: false})
  
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
        return <ChooseEquipment pageData={pageData} setPageData={setPageData}  />;
      case 5:
        return <ChooseSpell  />;
      case 6:
        return <AlignmentAndLanguages  />;
      case 7:
        return <CharSummary  />;
      default:
        return <div>Not Found</div>;
    }
  }

  return (
    <div className="">
                
      <Formik
        initialValues={defaultCharSheet}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        enableReinitialize={true}
      >
        {props => (
          <Form >
            <div className="bg-gray-50 h-96   px-8">
              {displayFormStep(formStep)}
            </div>
            <div className="flex justify-between ">
          { 
            formStep !== 0 ? 
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                type="button"
                onClick={() => setFormStep(formStep - 1)}

              >
                back
              </button> 
              : 
              <div></div> 
          }
          { 
          formStep + 1 !== 8 ? 
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
              type="button"
              disabled={isChargenPropDisabled(formStep, pageData, props.values)}
              onClick={() => setFormStep(formStep + 1)}
              
            >
              next
            </button> 
            : 
            <div></div> }
        </div>
          </Form>
        )}
      </Formik>
      
    </div>
  );

}

export default CharacterCreator;
