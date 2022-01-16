const StrBlurb = (strScore: number) => {

    let strModifiers:any = {
        meleeBonus: 0,
        openDoors: 0,
    }

    if (strScore <= 3) {
        strModifiers.meleeBonus = -3;
        strModifiers.openDoors = 1;
    }
    else if (strScore <= 5) {
        strModifiers.meleeBonus = -2;
        strModifiers.openDoors = 1;
    }
    else if (strScore <= 8) {
        strModifiers.meleeBonus = -1;
        strModifiers.openDoors = 1;
    }
    else if (strScore <= 12) {
        strModifiers.meleeBonus = 0;
        strModifiers.openDoors = 2;
    }
    else if (strScore <= 15) {
        strModifiers.meleeBonus = 1;
        strModifiers.openDoors = 3;
    }
    else if (strScore <= 17) {
        strModifiers.meleeBonus = 1;
        strModifiers.openDoors = 4;
    }
    else {
        strModifiers.meleeBonus = 2;
        strModifiers.openDoors = 5;
    }


    return (
        <div>
            <h2 className="text-2xl">Strength (STR)</h2>
            <p>Brawn, muscle, and physical power.</p>
            <p><b>Melee Attack and Damage:</b> {strModifiers.meleeBonus < 0 ? strModifiers.npcReactions : `+${strModifiers.meleeBonus}`}</p>
            <p><b>Open Doors:</b> {strModifiers.openDoors}-in-6</p>
        </div>
    )
}

export default StrBlurb