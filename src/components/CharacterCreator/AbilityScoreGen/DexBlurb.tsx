import dexModifiers from "../dexModifiers"

const DexBlurb = (dexScore: number) => {

    let dexMods:any = dexModifiers(dexScore);


    return (
        <div>
            <h2 className="text-2xl">Dexterity (DEX)</h2>
            <p>Agility, reflexes, speed, and balance.</p>
            <p><b>AC:</b> {dexMods.acBonus < 0 ? dexMods.acBonus : `+${dexMods.acBonus}`}</p>
            <p><b>Missile Attack And Damage:</b> {dexMods.missileBonus < 0 ? dexMods.missileBonus : `+${dexMods.missileBonus}`}</p>
            <p><b>Initiative (Optional):</b> {dexMods.initiativeBonus < 0 ? dexMods.initiativeBonus : `+${dexMods.initiativeBonus}`}</p>
        </div>
    )
}

export default DexBlurb