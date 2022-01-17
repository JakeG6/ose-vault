const chaModifiers = (chaScore: number) => {

    let chaModifiers:any = {
        npcReactions: 0,
        maxRetainers: 0,
        loyalty: 0
    }

    if (chaScore <= 3) {
        chaModifiers.npcReactions = -2;
        chaModifiers.maxRetainers = 1;
        chaModifiers.loyalty = 4;
    }
    else if (chaScore <= 5) {
        chaModifiers.npcReactions = -1;
        chaModifiers.maxRetainers = 2;
        chaModifiers.loyalty = 5;
    }
    else if (chaScore <= 8) {
        chaModifiers.npcReactions = -1;
        chaModifiers.maxRetainers = 3;
        chaModifiers.loyalty = 6;
    }
    else if (chaScore <= 12) {
        chaModifiers.npcReactions = 0;
        chaModifiers.maxRetainers = 4;
        chaModifiers.loyalty = 7;
    }
    else if (chaScore <= 15) {
        chaModifiers.npcReactions = 1;
        chaModifiers.maxRetainers = 5;
        chaModifiers.loyalty = 8;
    }
    else if (chaScore <= 17) {
        chaModifiers.npcReactions = 1;
        chaModifiers.maxRetainers = 6;
        chaModifiers.loyalty = 9;
    }
    else {
        chaModifiers.npcReactions = 2;
        chaModifiers.maxRetainers = 7;
        chaModifiers.loyalty = 10;
    }


    return chaModifiers;
}

export default chaModifiers