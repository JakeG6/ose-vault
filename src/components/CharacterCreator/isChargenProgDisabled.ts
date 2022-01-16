const isChargenPropDisabled = (step:number, pageData: any, values:any) => {
    switch (step) {
        case 0:
          return false;
        case 1:
          return pageData.hasRolledScores ? false : true;
        case 2:
          return values.class !== '' ? false : true;
        case 3:
          return pageData.hasRolledHP ? false : true;
        case 4: 
          return pageData.hasRolledGP ? false : true;
        case 5:
          return ((values.class === 'elf' || values.class === 'magic-user')  && values.knownSpells.length < 1) ? true : false;
        case 6:
          return values.name !== ''? false : true;
        // case 7:
        //   return <CharSummary  />;
        default:
          return true
      }
}

export default isChargenPropDisabled