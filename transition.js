//elements to dissapear after transition
const lang =document.getElementById('lang');
const nextButton = document.getElementById('next-button');
const h1Before = document.getElementById('before-h1');
const firstH2 = document.getElementById('h2-1');
const secondH2 = document.getElementById('h2-2');
const firstP = document.getElementById('p-1');
const secondP = document.getElementById('p-2');
const thirdP = document.getElementById('p-3');
const firstH3 = document.getElementById('h3-1');
const secondH3 = document.getElementById('h3-2');
const thirdH3 = document.getElementById('h3-3');
const fourthH3 = document.getElementById('h3-4');
const inputName = document.getElementById('name');
const inputKittyName = document.getElementById('kitty-name');
const inputHobby = document.getElementById('hobby');
const inputSleep = document.getElementById('sleep')
const furContainer = document.getElementById('fur-container');
const paw1 = document.getElementById('paw-1');
const paw2 = document.getElementById('paw-2');
const paw3 = document.getElementById('paw-3');
const paw4 = document.getElementById('paw-4');
const paw5 = document.getElementById('paw-5');
const paw6 = document.getElementById('paw-6');
const paw7 = document.getElementById('paw-7');
const paw8 = document.getElementById('paw-8');
const paw9 = document.getElementById('paw-9');


//Elements to appear after the transition
const h1After = document.getElementById('transition-h1');
const submit = document.getElementById('submit');
const twinkle = document.getElementById('twinkle')

function changeScreen(){
//Disappear
    lang.style.display = 'none';
    h1Before.style.display= 'none';
    nextButton.style.display = 'none';
    firstH2.style.display = 'none';
    secondH2.style.display= 'none';
    firstP.style.display ='none';
    secondP.style.display ='none';
    thirdP.style.display ='none';
    firstH3.style.display ='none';
    secondH3.style.display ='none';
    thirdH3.style.display ='none';
    fourthH3.style.display ='none';
    inputName.style.display ='none';
    inputKittyName.style.display ='none';
    furContainer.style.display ='none';
    inputHobby.style.display ='none';
    inputSleep.style.display='none';
    paw1.style.display='none';
    paw2.style.display='none';
    paw3.style.display='none';
    paw4.style.display='none';
    paw5.style.display='none';
    paw6.style.display='none';
    paw7.style.display='none';
    paw8.style.display='none';
    paw9.style.display='none';


//Appear
    h1After.style.display = 'block';
    submit.style.display = 'inline-block';
    twinkle.style.display = 'block'

}

nextButton.onclick = changeScreen;