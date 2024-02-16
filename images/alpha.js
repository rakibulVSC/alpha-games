
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    if(playerPressed === 'Escape'){
      gameOver();  
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    console.log(playerPressed, currentAlphabet);
}
// capture keyboard key press
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // Your code to handle the keyup event goes here
    

    // get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point !');
        
        // Assuming getElementValueById returns a numeric value, if not, adjust accordingly.
        let currentScore = parseInt(getTextElementValueById('current-score'));
        const updatedScore = currentScore + 1;
    
        setTextElementValueById('current-score', updatedScore);
    
        // Update the displayed score if needed
        const currentScoreElement = document.getElementById('current-score');
        currentScoreElement.innerText = updatedScore;
    
        // Start a new round or perform any additional actions
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    
  //   --------------------------------------------  
  else{   

    const currentLifeElement=document.getElementById('current-life');
    const currentLifeText=currentLifeElement.innerText;
    const currentLife=parseInt(currentLifeText);
    const newLife=currentLife-1;
    currentLifeElement.innerText=newLife;

    if(newLife === 0){
        gameOver();
    }
     
}

     
}
    
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    //step-1:generate a random alphabet ----
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet);
    // set randomly alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    const lastScore=getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

  
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}

