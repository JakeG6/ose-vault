import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import './App.css';
import { Field, Form, Formik } from 'formik';
import { CharSheet } from '../../types';

const CharacterCreator = () => {

  const [charSheet, setCharSheet ] = useState(defaultCharSheet);


  return (
    <div className="App">
      <Formik
        initialValues={charSheet}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}

      >
        <Form>
          <label htmlFor="firstName">Name</label>
          <Field id="name" name="name" placeholder="First Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );

}

export default CharacterCreator;