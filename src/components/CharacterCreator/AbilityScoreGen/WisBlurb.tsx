import wisModifiers from "../wisModifiers";

const WisBlurb = (wisScore: number) => {

    let wisObj:any = wisModifiers(wisScore)




    return (
        <div>
            <h2 className="text-2xl">Wisdom (WIS)</h2>
            <p>Willpower, common sense, perception, and intuition.</p>
            <p><b>Magic Saves:</b> {wisObj.magicSaves < 0 ? wisObj.magicSaves : `+${wisObj.magicSaves}`}</p>
        </div>
    )
}

export default WisBlurb