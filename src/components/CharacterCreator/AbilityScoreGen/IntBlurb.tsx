import intModifiers from "../intModifiers";

const IntBlurb = (intScore: number) => {

    let intObj:any = intModifiers(intScore)


    return (
        <div>
            <h2 className="text-2xl">Intelligence (INT)</h2>
            <p>Learning, memory, and reasoning.</p>
            <p><b>Spoken Languages:</b> {intObj.spokenLanguages}</p>
            <p><b>Literacy:</b> {intObj.literacy}</p>
        </div>
    )
}

export default IntBlurb