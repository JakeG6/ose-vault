const isChargenPropDisabled = (sectionName:string, pageData: any, values:any) => {
    switch (sectionName) {
        case "Generator Options":
          return false;
        case "Ability Scores":
          return pageData.hasRolledScores ? false : true;
        case "Class":
          return values.class !== '' ? false : true;
        case "Hit Points":
          return pageData.hasRolledHP ? false : true;
        case "Equipment": 
          return pageData.hasRolledGP ? false : true;
        case "Spells":
          return ((values.class === 'elf' || values.class === 'magic-user')  && values.knownSpells.length < 1) ? true : false;
        case "Details":
          return values.name !== '' ? false : true;
        default:
          return true
    }
}

export default isChargenPropDisabled