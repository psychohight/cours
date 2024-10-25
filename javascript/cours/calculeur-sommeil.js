const getSleepHours = (day) => {
    if (day === 'lundi'){
      return 8;
    } else if (day === 'mardi'){
      return 12;
    } else if (day === 'mercredi'){
      return 9;
    } else if (day === 'jeudi'){
      return 7;
    } else if (day === 'vendredi'){
      return 11;
    } else if (day === 'samedi'){
      return 5;
    } else if (day === 'dimanche'){
      return 6;
    }
  }
  console.log('--- premiere etapes afficher heure de sommeil chaque jour avec getSleeperHours ---')
  console.log(getSleepHours('lundi'));
  console.log(getSleepHours('mardi'));
  console.log(getSleepHours('mercredi'));
  console.log(getSleepHours('dimanche'));
  
  const getActualSleepHours = () => {
    return getSleepHours('lundi') + 
           getSleepHours('mardi') + 
           getSleepHours('mercredi') + 
           getSleepHours('jeudi') + 
           getSleepHours('vendredi') + 
           getSleepHours('samedi') + 
           getSleepHours('dimanche');
  };
  console.log('--- afficher le resultat total de getSleeperHours avec getActualSleepHours ---')
  console.log(getActualSleepHours());
  
  //heure ideal
  const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
  };
  console.log('heure ideal part semaine')
  console.log(getIdealSleepHours());
  
//calculer le manque de sommeil
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours){
      console.log('sommeil parfait');
    } else if (actualSleepHours > idealSleepHours){
      console.log('trop dormis ' + (actualSleepHours - idealSleepHours) + ' heure en plus');
    } else if (actualSleepHours < idealSleepHours){
      console.log('pas assez dormis ' + (idealSleepHours - actualSleepHours) + ' heure manquante');
    }
  };
  calculateSleepDebt()
  