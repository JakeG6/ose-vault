import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import strModifiers from './strModifiers';
import chaModifiers from './chaModifiers';
import conModifiers from './conModifiers';
import dexModifiers from './dexModifiers';
import intModifiers from './intModifiers';
import wisModifiers from './wisModifiers';


const CharSummary = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const values:any= formikProps.values;

    const strMods = strModifiers(values.abilityScores.str)
    const dexMods = dexModifiers(values.abilityScores.dex)
    const conMods = conModifiers(values.abilityScores.con)
    const intMods = intModifiers(values.abilityScores.int)
    const wisMods = wisModifiers(values.abilityScores.wis)
    const chaMods = chaModifiers(values.abilityScores.cha)

    return (
        <div>
            <p>Summary</p>
            <div className="grid ">
                <div className="grid grid-cols-2">
                    <div>
                        <div>PC {values.name}</div>
                        <div className="grid grid-cols-2">
                            <div className="">
                                <div>Class {values.class}</div>
                                <div>Title {values.title}</div>
                            </div>
                            <div>
                                <div>AL {values.alignment}</div>
                                <div>Level {values.level}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Ability Scores</p>
                                <p>STR {values.abilityScores.str}</p>
                                <p>DEX {values.abilityScores.dex}</p>
                                <p>CON {values.abilityScores.con}</p>
                                <p>INT {values.abilityScores.int}</p>
                                <p>WIS {values.abilityScores.cha}</p>
                                <p>CHA {values.abilityScores.wis}</p>
                            </div>
                            <div>
                                <p>Saving Throws</p>
                                <p>D</p>
                                <p>W</p>
                                <p>P</p>
                                <p>B</p>
                                <p>S</p>
                                <p>+/-</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div>LOGO</div>
                        <div>Character Portrait</div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <p>Combat</p>
                        <div className="">
                            <div>
                                <p>HP {values.hp}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>AC {values.ac}</p>
                            </div>
                            <div>
                                <p>Unarmored AC {10 + dexMods.acBonus}</p>
                            </div>
                        </div>
                        <div>
                            <p>THAC0</p>
                        </div>
                        <div>
                            <p>Abilities, Skills, Weapons</p>
                        </div>
                    </div>
                    <div>
                        <p>Encounters</p>
                        <p>Init</p>
                        <p>+/-</p>
                        <p>Exploration</p>
                        <p>LD</p>
                        <p>OD</p>
                        <p>SD</p>
                        <p>FT</p>
                        <p>Movement</p>
                        <p>Ov</p>
                        <p>Ex</p>
                        <p>En</p>
                        <p>Languages</p>
                    </div>
                </div>
                
                
                

            </div>
            <button className="bg-green-50 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-none" type="submit">Submit</button>
        </div>
    )
}

export default CharSummary;