// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
  }

// Assigning the variables with values used in the kitty-creator
const userName = cleanAndCap(words.get('name'));
const kittyName = cleanAndCap(words.get('kitty-name'));
const hobby = words.get('hobby');
const sleep = words.get('sleep');
const fur = words.get('fur');
const furComment = words.get('fur');


// The string containing HTML and text which will populate the my-kitty.html title
const title = `<h1>Meet <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${kittyName},</span> the kitty you have created:`;

// the crazy-cat-gif which will come under title
const blackAndWhiteGif = `<img src="./media/gif/black-and-white-cat.gif" id="black-white-cat" alt="black and white gif" style="border: #d38047 solid 5px; width:25rem; margin: 1rem">`;

const gingerGif = `<img src="./media/gif/ginger-cat.gif" alt="ginger cat gif" id="ginger-cat" style="border: #d38047 solid 5px; width:21.875rem">`;

const blackGif = `<img src="./media/gif/black-cat.gif" alt="black cat gif" id="black-cat-crazy" style="border: #d38047 solid 5px; width:15.5rem">`;

const blueishGreyGif = `<img src="./media/gif/blueish-grey-cat.gif" alt="blueish=grey cat gif" style="border: #d38047 solid 5px; width:25rem">`;

const stripedGif = `<img src="./media/gif/striped-cat.gif" alt="striped cat gif" id="striped-cat" style="border: #d38047 solid 5px; width:28rem">`;

const gingerAndWhiteGif = `<img src="./media/gif/ginger-white-cat.gif" alt="ginger-white cat gif" id="ginger-white-cat" style="border: #d38047 solid 5px; width:21rem">`;

const whiteGif = `<img src="./media/gif/white-cat.gif" alt="white cat gif" id="white-cat" style="border: #d38047 solid 5px; width:42rem">`;


// const select gif which is linked to the fur colour

const selectFurGif = () =>{
    if(fur === 'black-and-white'){
        return blackAndWhiteGif;
    } else if (fur === 'ginger'){
        return gingerGif;
    } else if( fur === 'black'){
        return blackGif
    } else if (fur === 'blueish-grey'){
        return blueishGreyGif
    }   else if (fur === 'striped'){
        return stripedGif
    } else if (fur === 'ginger-and-white'){
        return gingerAndWhiteGif;
    } else if (fur === 'white'){
        return whiteGif
    }
}

//comment on the fur



// The string containing HTML and text which will populate the my-kitty.html intro

const intro = `<p>Meow,<br> Hello <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${userName}</span>! My name is <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${kittyName},</span> and I am purrfect - just look at me! My fur is beautifully <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${furComment}</span> (good choice, by the way - it suits me so well!) and it's just so shiny! (It takes me a good part of the day to maintain it that way).  <br>In my free time I like <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${hobby}</span>, which can be really tiring so after I've done it plenty, I usually go for a nap <span class="word" title="id: kitty-name" style="color:#b9652d; font-weight:bold">${sleep}</span>, which is ever so cozy!</p>`;




//Grabbing the title
const kittyTitle = document.getElementById('title')
// Populating the intro element with the value of the intro variable
kittyTitle.innerHTML = title;

// Grabbing the intro element
const kittyIntro = document.getElementById('intro');
// Populating the intro element with the value of the intro variable
kittyIntro.innerHTML = intro;

//grabbing the gif
const blackAndWhite = document.getElementById('black-and-white-gif')
blackAndWhite.innerHTML= selectFurGif() ;

// const ginger = document.getElementById('ginger-gif');
// ginger.innerHTML = selectFurGif();

// const black = document.getElementById('black-gif')

// const blueishGrey = document.getElementById('blueish-grey-gif')
