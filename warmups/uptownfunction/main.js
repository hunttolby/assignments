var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function singSong () {
    for(var i = 0; i<= lyrics.length; i++) {
        console.log(lyrics[i]);
    }
}

function singSongBackwards () {
    for(var i = lyrics.length; i >= 0; i--) {
        console.log(lyrics[i]);
    }
}

function singSongOther () {
    for (var i = 0; i<=lyrics.length; i++) {
        if (i % 2 === 0) {
            console.log(lyrics[i])
        }
    }
}




singSong()
singSongBackwards()
singSongOther()
