import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import AbilityScoreGen from './AbilityScoreGen/AbilityScoreGen';
import ChooseClass from './ChooseClass/ChooseClass';
import HitPointGen from './HitPointGen';
import AlignmentAndLanguages from './AlignmentAndLanguages';
import CharGenOptions from './CharGenOptions';
import CharSummary from '../CharSummary/CharSummary';
import ChooseSpell from './ChooseSpell';
import ChooseEquipment from './ChooseEquipment';
import isChargenPropDisabled from './isChargenProgDisabled';

const CharacterCreator = () => {

  const [formStep, setFormStep] = useState<number>(0)
  const [pageData, setPageData] = useState({
    hasRolledScores: false,
    hasRolledHP: false, 
    hasRolledGP: false
  })

  const creatorSections:any = [
    {
      name: "Generator Options",
      component: <CharGenOptions  />
    },
    {
      name: "Ability Scores",
      component: <AbilityScoreGen pageData={pageData} setPageData={setPageData}   />
    },
    {
      name: "Class",
      component: <ChooseClass  />
    },
    {
      name: "Hit Points",
      component: <HitPointGen pageData={pageData} setPageData={setPageData}  />
    },
    {
      name: "Spells",
      component: <ChooseSpell  />
    },
    {
      name: "Details",
      component: <AlignmentAndLanguages  />
    },
    {
      name: "Equipment",
      component: <ChooseEquipment pageData={pageData} setPageData={setPageData}  />

    },
    {
      name: "Summary",
      component: <CharSummary  />
    }
  ]


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
              {creatorSections[formStep].component}
            </div>
            <div className="flex justify-between ">
              { 
                formStep > 0 ? 
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    type="button"
                    onClick={() => setFormStep(formStep - 1)}
                  >
                    { creatorSections[formStep - 1].name }
                  </button> 
                  : 
                  <div></div> 
              }
              <button 
                className="bg-green-50 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-none" 
                type="submit">
                Submit
              </button> 
              { 
                formStep < creatorSections.length ? 
                  <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                    type="button"
                    disabled={isChargenPropDisabled(creatorSections[formStep].name, pageData, props.values)}
                    onClick={() => setFormStep(formStep + 1)}
                  >
                    { creatorSections[formStep + 1].name }
                  </button> 
                  : 
                  <div></div> 
              }
            </div>
          </Form>
        )}
      </Formik>
      
    </div>
  );

}

export default CharacterCreator;
