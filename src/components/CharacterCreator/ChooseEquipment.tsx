import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';


let chance = require('chance').Chance();

const ChooseEquipment = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext();

    const values:any= formikProps.values;


    const randStartingGold = () =>  {

        const rolledGP = chance.rpg('3d6', {sum: true}) * 10;
        console.log(rolledGP)

        formikProps.setFieldValue("charMoney.gp", rolledGP);
        props.setPageData({...props.pageData, hasRolledGP: true});
    }
       
    


    return (
        <div>
            <p>Choose Equipment</p>
            <button type="button" onClick={() => randStartingGold()}>Roll Starting Gold Pieces</button>
            <label htmlFor="hp">Hit Points</label>
            <Field 
                disabled={!props.pageData.hasRolledGP} 
                type="number" 
                min={0} 
                id="hp" 
                name="hp"  
            />
            <div className="grid grid-cols-2">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default ChooseEquipment;