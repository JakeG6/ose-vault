import React, { useState } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';




const CharSummary = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext()

    const values:any= formikProps.values;
    

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
                        <div className="grid grid-cols-2">
                            <div>
                                <p>HP {values.hp}</p>
                            </div>
                            <div>
                                <p>CON Modifier</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>AC {values.ac}</p>
                            </div>
                            <div>
                                <p>Unarmored AC</p>
                                <p>DEX Modifier</p>
                            </div>
                        </div>
                        <div>
                            <p>Attack Value Matrix</p>
                            <div className="flex">
                                <div>9</div>
                                <div>8</div>
                                <div>7</div>
                                <div>6</div>
                                <div>5</div>
                                <div>4</div>
                                <div>3</div>
                                <div>2</div>
                                <div>1</div>
                                <div>0</div>
                            </div>
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