const intModifiers = (intScore: number) => {

    let intModifiers:any = {
        spokenLanguages: '',
        literacy: '',
    }

    if (intScore <= 3) {
        intModifiers.spokenLanguages = 'Native (broken speech)';
        intModifiers.literacy = 'Illiterate';
    }
    else if (intScore <= 5) {
        intModifiers.spokenLanguages = 'Native';
        intModifiers.literacy = 'Illiterate';
    }
    else if (intScore <= 8) {
        intModifiers.spokenLanguages = 'Native';
        intModifiers.literacy = 'Illiterate';
    }
    else if (intScore <= 12) {
        intModifiers.spokenLanguages = 'Native';
        intModifiers.literacy = 'Basic';
    }
    else if (intScore <= 15) {
        intModifiers.spokenLanguages = 'Native + 1 additional';
        intModifiers.literacy = 'Literate';
    }
    else if (intScore <= 17) {
        intModifiers.spokenLanguages = 'Native + 2 additional';
        intModifiers.literacy = 'Literate';
    }
    else {
        intModifiers.spokenLanguages = 'Native + 3 additional';
        intModifiers.literacy = 'Literate';
    }


    return intModifiers
}

export default intModifiers