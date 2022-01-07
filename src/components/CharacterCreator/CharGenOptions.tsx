import React, { useState } from 'react';
import defaultCharSheet from './defaultCharSheet';
import { Field, Form, Formik } from 'formik';
import { AbilityScores } from '../../types';

let chance = require('chance').Chance();



const CharGenOptions = () => {


    return (
        <div>

            <p>Character Creator Options</p>
            <p>There are currently no options</p>

        </div>
    )
}

export default CharGenOptions;