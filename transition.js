//elements to dissapear after transition

const h1After = document.getElementById('transition-h1');
const twinkle = document.getElementById('twinkle');
const eventButton = document.getElementById('event-bttn')


//Elements to appear after the transition
const titleKitty = document.getElementById('title');
const kittyGif = document.getElementById('kitty-gif');
const catIntro = document.getElementById('intro');
const startOverButton = document.getElementById('start-over');

//event handler function

function changeScreen(){

//Disappear

   h1After.style.display = 'none';
   twinkle.style.display = 'none';
   eventButton.style.display = 'none';

//Appear

    titleKitty.style.display ='block';
    kittyGif.style.display = 'inline-block';
    catIntro.style.display = 'block';
    startOverButton.style.display ='inline-block'

}

//event listener
eventButton.onclick = changeScreen;