function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId); // Use the parameter instead of the string 'elementId'
    element.classList.add('bg-orange-400'); // Use 'element' instead of 'Element', and fix the classList method
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId); // Use the parameter instead of the string 'elementId'
    element.classList.remove('bg-orange-400'); // Use 'element' instead of 'Element', and fix the classList method
}

function getElementValueById(elementId){
 const element=document.getElementById('elementId');
 const elementValueText=element.innerText;
 const value=parseInt(elementValueText);
 return value;
}


function getARandomAlphabet() {
    // get or create an alphabet array 

    const alphabetString = 'abcdefghihlklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);
    //   get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    //  console.log(index,alphabet);
    return alphabet;
}