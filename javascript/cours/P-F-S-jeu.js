//utilisateur
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput == 'bomb'){
      return userInput;
    } else {
      console.log('mal ecrit');
    }
  }
  console.log(getUserChoice('paper'));
  
  //robot
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
      }
  };
  console.log(getComputerChoice()); //robot choisi aleatoirement
  
  //determiner un gagnant
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'egalité';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'computer win';
      } else {
        return 'user win';
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return 'user win';
      } else {
        return 'computer win';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return 'user win';
      } else {
        return 'computer win';
      }
    }
    //seulement l'utilisateur peu gagner avec ce mot 
    if (userChoice === 'bomb'){
      return 'user win';
    }
  };
  // console.log(determineWinner('paper', 'scissors'));
  
  //combiner le jeu
  const playGame = () => {
    const userChoice = getUserChoice('bomb'); //definir nous meme l'utilisateur
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  //lancer le jeu
  playGame()