import { Field, Form, Formik, useFormikContext } from 'formik';
import lvl1ClericSpells from './lvl1ClericSpells';
import lvl1MUSpells from './lvl1MUSpells';


const ChooseSpell = () => {

    // returns all values and methods from your Formik tag
    const formikProps = useFormikContext();

    const values:any= formikProps.values;

    const displayClassSpells = (charClass:string) => {
        if (charClass === 'cleric') {
            return (
                <div className="grid grid-cols-1">
                    <p>You do not know any spells at 1st level.</p>
                    
                </div>

            )
        }
        if (charClass === 'elf' || charClass==='magic-user') {
            return (
                <div className="grid grid-cols-1">
                    <p>Choose a 1st level Magic-User spell for your spellbook</p>
                    {
                        lvl1MUSpells.map((spell:string) => (
                            <div>
                                <label htmlFor="spell">
                                    <Field type="radio" name="spellsKnown" value={spell} />
                                    {spell}
                                </label>
                            </div>
                        ))
                    }
                </div>
            )
        }
        else {
            return (<div>No spells were found.</div>)
        }
    }

    return (

        <div> 
            <p className="text-3xl font-bold underline">Magic</p>
            {
                values.class === 'cleric' || values.class === 'elf' || values.class === 'magic-user' ?
                    
                    displayClassSpells(values.class)
                    
                :
                <p>You are unable to use magic.</p>
            }
        </div>
    )

}

export default ChooseSpell;