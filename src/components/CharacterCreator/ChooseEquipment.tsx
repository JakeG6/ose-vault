import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import gear from '../../gear';
import weapons from '../../weapons';
import { Gear, Weapon } from '../../types';
import allEquipment from './allEquipment';


let chance = require('chance').Chance();

const ChooseEquipment = (props: any) => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext();

    const values:any= formikProps.values;

    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false); 



    const randStartingGold = () =>  {

        const rolledGP = chance.rpg('3d6', {sum: true}) * 10;
        console.log(rolledGP)

        formikProps.setFieldValue("charMoney.gp", rolledGP);
        props.setPageData({...props.pageData, hasRolledGP: true});
    }

    const handleChange = (e: any) => {
        setSearchField(e.target.value);
        if(e.target.value===""){
          setSearchShow(false);
        }
        else {
          setSearchShow(true);
        }
      };

    const searchEquipment = (query:string) => {
        
    }

    const buyEquipment = (addedEquipment: Gear | Weapon) => {
        // formikProps.setFieldValue("equipment", [...values.equipment , addedEquipment]);
        formikProps.setValues({ 
            ...values, 
            equipment: [...values.equipment , addedEquipment] , 
            charMoney: {...values.charMoney, gp: values.charMoney.gp - addedEquipment.cost} 
        });

    }

    const returnEquipment = (returnedEquipment: Gear | Weapon) => {

        const equipmentArr: (Gear | Weapon)[] = values.equipment.filter((equipment: Gear | Weapon) => 
            values.equipment.indexOf(equipment) !== values.equipment.indexOf(returnedEquipment)
        )

        console.log(equipmentArr)

        // formikProps.setFieldValue("equipment", equipmentArr);
        formikProps.setValues({ ...values, "equipment": equipmentArr, charMoney: {...values.charMoney, gp: values.charMoney.gp + returnedEquipment.cost} });


    }

    const deleteEquipment = (equipmentToDelete: Gear | Weapon) => {

        console.log(values.equipment)

        const equipmentArr: (Gear | Weapon)[] = values.equipment.filter((equipment: Gear | Weapon) => 
        values.equipment.indexOf(equipment) !== values.equipment.indexOf(equipmentToDelete))

        console.log(equipmentArr)

        formikProps.setFieldValue("equipment", equipmentArr);

    }

    const filteredEquipment = allEquipment.filter((equipment: Gear | Weapon) => {
        return (equipment.name.toLowerCase().includes(searchField.toLowerCase()))
    })

    const searchResults = () => {
        if (searchShow) {
            return filteredEquipment.map((equipment: Gear | Weapon) => 
            <div className="flex">
                <div>
                    <button 
                        type="button" 
                        onClick={() => buyEquipment(equipment)}
                        disabled={values.charMoney.gp < equipment.cost}
                        className={equipment.cost > values.charMoney.gp ?  "text-rose-500" : ""}
                    >
                        +
                    </button>
                </div>
                <div className="ml-2">
                    <p>{equipment.name}</p>
                    <p>{equipment.cost} GP</p>
                </div>
                
            </div>
        )
        }
        
        else {
            <div></div>
        }
        
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
                        {
                            values.equipment.map((equipment: Gear | Weapon) => 
                            <div className="border-2" >
                                <div className="ml-2">
                                    <p>{equipment.name}</p>
                                    <button 
                                        type="button" 
                                        onClick={() => deleteEquipment(equipment)}
                                    >
                                        Delete Equipment
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => returnEquipment(equipment)}
                                    >
                                        Sell Equipment
                                    </button>
                                </div>
                                
                            </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="">Search Equipment</label>
                    <input type="search" onChange = {handleChange} id="equipment-search" />
                    <div>{searchResults()}</div>
                </div>
            </div>
        </div>
    )
}

export default ChooseEquipment;