import conModifiers from "../conModifiers";

const ConBlurb = (conScore: number) => {

    let conObj:any = conModifiers(conScore);

    return (
        <div>
            <h2 className="text-2xl">Constitution (CON)</h2>
            <p>Health, stamina, and endurance.</p>
            <p><b>Hit Points Per Level:</b> {conObj.hitPointBonus < 0 ? conObj.hitPointBonus : `+${conObj.hitPointBonus}`}</p>
        </div>
    )
}

export default ConBlurb