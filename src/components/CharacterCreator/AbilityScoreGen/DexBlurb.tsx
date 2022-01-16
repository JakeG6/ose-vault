const DexBlurb = (dexScore: number) => {

    let dexModifiers:any = {
        acBonus: 0,
        missileBonus: 0,
        initiativeBonus: 0
    }

    if (dexScore <= 3) {
        dexModifiers.acBonus = -3;
        dexModifiers.missileBonus = -3;
        dexModifiers.initiativeBonus = -3;
    }
    else if (dexScore <= 5) {
        dexModifiers.acBonus = -2;
        dexModifiers.missileBonus = -2;
        dexModifiers.initiativeBonus = -2;
    }
    else if (dexScore <= 8) {
        dexModifiers.acBonus = -1;
        dexModifiers.missileBonus = -1;
        dexModifiers.initiativeBonus = -1;
    }
    else if (dexScore <= 12) {
        dexModifiers.acBonus = 0;
        dexModifiers.missileBonus = 0;
        dexModifiers.initiativeBonus = 0;
    }
    else if (dexScore <= 15) {
        dexModifiers.acBonus = 1;
        dexModifiers.missileBonus = 1;
        dexModifiers.initiativeBonus = 1;
    }
    else if (dexScore <= 17) {
        dexModifiers.acBonus = 2;
        dexModifiers.missileBonus = 2;
        dexModifiers.initiativeBonus = 2;
    }
    else {
        dexModifiers.acBonus = 3;
        dexModifiers.missileBonus = 3;
        dexModifiers.initiativeBonus = 3;
    }


    return (
        <div>
            <h2 className="text-2xl">Dexterity (DEX)</h2>
            <p>Agility, reflexes, speed, and balance.</p>
            <p><b>AC:</b> {dexModifiers.acBonus < 0 ? dexModifiers.acBonus : `+${dexModifiers.acBonus}`}</p>
            <p><b>Missile Attack And Damage:</b> {dexModifiers.missileBonus < 0 ? dexModifiers.missileBonus : `+${dexModifiers.missileBonus}`}</p>
            <p><b>Initiative (Optional):</b> {dexModifiers.initiativeBonus < 0 ? dexModifiers.initiativeBonus : `+${dexModifiers.initiativeBonus}`}</p>
        </div>
    )
}

export default DexBlurb