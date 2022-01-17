import strModifiers from "../strModifiers";

const StrBlurb = (strScore: number) => {

    let strObj:any = strModifiers(strScore)

    return (
        <div>
            <h2 className="text-2xl">Strength (STR)</h2>
            <p>Brawn, muscle, and physical power.</p>
            <p><b>Melee Attack and Damage:</b> {strObj.meleeBonus < 0 ? strObj.npcReactions : `+${strObj.meleeBonus}`}</p>
            <p><b>Open Doors:</b> {strObj.openDoors}-in-6</p>
        </div>
    )
}

export default StrBlurb