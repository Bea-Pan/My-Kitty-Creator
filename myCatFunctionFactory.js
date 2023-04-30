const sound = function (){
    console.log("Meow, meow! (I'm hungry)")
}

const cat = (name, color, hobby, favSleepSpot) => {
    return {
        name: name,
        color: color,
        hobby: hobby,
        favSleepSpot: favSleepSpot,
        sound: sound,
        introduction(){
            console.log(`Meow, my name is ${this.name} and I am beautiful - my fur is ${this.color} and it's shiny. In my free time I like ${this.hobby}, which can be really tiring so after I usually go to sleep ${favSleepSpot}`)
        }
    }
}

const cat1 = cat('Fluffy', 'white', 'chasing lasers', 'in the laundry basket');

const cat2 = cat('Whiskers', 'grey', 'manicure against the carpet', 'on the heater')

//console.log(cat2)

const cat3 = cat('Puszek-Okruszek', 'black and white', 'sleeping', 'anywhere! (just not on the bare floor)')

cat1.introduction()
//cat2.introduction()
//cat3.introduction()

console.log(cat1.sound)
