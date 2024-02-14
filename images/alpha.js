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

function continueGame(){
    //step-1:generate a random alphabet ----
    const alphabet=getARandomAlphabet();
    console.log('your random alphabet',alphabet);
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