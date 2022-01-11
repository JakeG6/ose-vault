import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import gear from '../../gear';


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

    const searchEquipment = (query:string) => {
        const equipmentArr = [...gear];
    }
       
    


    return (
        <div>
            <p>Choose Equipment</p>
            <button type="button" onClick={() => randStartingGold()}>Roll Starting Gold Pieces</button>
            <label htmlFor="gp">GP</label>
            <Field 
                disabled={!props.pageData.hasRolledGP} 
                type="number" 
                min={0} 
                id="charMoney.gp" 
                name="charMoney.gp"  
            />
            <div className="grid grid-cols-2">
                <div>
                    <p>Equipment</p>
                    <div className='rounded-md border-black h-20'>

                    </div>
                </div>
                <div>
                    <label htmlFor="">Search Equipment</label>
                    <input type="search" id="site-search" name="q" aria-label="Search through site content" />

                </div>
            </div>
        </div>
    )
}

export default ChooseEquipment;