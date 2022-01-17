const wisModifiers = (wisScore: number) => {

    let wisModifiers:any = {
        magicSaves: 0,
    }

    if (wisScore <= 3) {
        wisModifiers.magicSaves = -3;
    }
    else if (wisScore <= 5) {
        wisModifiers.magicSaves = -2;
    }
    else if (wisScore <= 8) {
        wisModifiers.magicSaves = -1;
    }
    else if (wisScore <= 12) {
        wisModifiers.magicSaves = 0;
    }
    else if (wisScore <= 15) {
        wisModifiers.magicSaves = +1;
    }
    else if (wisScore <= 17) {
        wisModifiers.magicSaves = +2;
    }
    else {
        wisModifiers.magicSaves = +3;
    }


    return wisModifiers
}

export default wisModifiers