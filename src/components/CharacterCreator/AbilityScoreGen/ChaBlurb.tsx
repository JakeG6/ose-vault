import chaModifiers from "../chaModifiers";

const ChaBlurb = (chaScore: number) => {

    let chaObj:any = chaModifiers(chaScore)


    return (
        <div>
            <h2 className="text-2xl">Charisma (CHA)</h2>
            <p>Force of personality, persuasiveness, personal magnetism, physical attractiveness, and ability to lead.</p>
            <p><b>NPC Reactions:</b> {chaObj.npcReactions < 0 ? chaObj.npcReactions : `+${chaObj.npcReactions}`}</p>
            <p><b>Max # of Retainers:</b> {chaObj.maxRetainers}</p>
            <p><b>Retainer Loyalty:</b> {chaObj.loyalty}</p>
        </div>
    )
}

export default ChaBlurb