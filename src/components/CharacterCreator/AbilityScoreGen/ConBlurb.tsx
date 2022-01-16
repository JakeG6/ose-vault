const ConBlurb = (conScore: number) => {

    let conModifiers:any = {
        hitPointBonus: 0,
    }

    if (conScore <= 3) {
        conModifiers.hitPointBonus = -3;
    }
    else if (conScore <= 5) {
        conModifiers.hitPointBonus = -2;
    }
    else if (conScore <= 8) {
        conModifiers.hitPointBonus = -1;
    }
    else if (conScore <= 12) {
        conModifiers.hitPointBonus = 0;
    }
    else if (conScore <= 15) {
        conModifiers.hitPointBonus = 1;
    }
    else if (conScore <= 17) {
        conModifiers.hitPointBonus = 2;
    }
    else {
        conModifiers.hitPointBonus = 3;
    }


    return (
        <div>
            <h2 className="text-2xl">Constitution (CON)</h2>
            <p>Health, stamina, and endurance.</p>
            <p><b>Hit Points Per Level:</b> {conModifiers.hitPointBonus < 0 ? conModifiers.hitPointBonus : `+${conModifiers.hitPointBonus}`}</p>
        </div>
    )
}

export default ConBlurb