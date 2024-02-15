
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    console.log('player pressed',playerPressed);

    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    console.log(playerPressed,currentAlphabet);
}
// capture keyboard key press
function handleKeyboardKeyUpEvent(event) {
    const playerPressed=event.key;
    
    // Your code to handle the keyup event goes here
    // console.log('player pressed',playerPressed);

    // get expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const  currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);

    // checked matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you got a point');
        const currentScore=getElementValueById('current-score');
        console.log(currentScore);



        // update score:
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // console.log(currentScore);

       
        // const newScore=currentScore+1;
        currentScoreElement.innerText=newScore;

        // start a new round

        console.log('you have pressed correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed,you lost a life');
    //     const currentLifeElement=document.getElementById('current-life');
    //     const currentLifeText=currentLifeElement.innerText;
    //     const currentLife=parseInt(currentLifeText);
    //     const newLife=currentLife-1;
    //     currentLifeElement.innerText=newLife;
    }
}


document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
    //step-1:generate a random alphabet ----
    const alphabet=getARandomAlphabet();
    // console.log('your random alphabet',alphabet);
    // set randomly alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // set background color
    setBackgroundColorById(alphabet);
 
}

function play(){
    hideElementById('home-screen');
    showElement('play-ground');
    continueGame()
}

/* function play(){
    // step-1 hide the home screen.to hide the screen add the class hidden to the home screen
    const homeSection=document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);
    //  show the playground
    const playGround=document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    // console.log(playGround);
} */