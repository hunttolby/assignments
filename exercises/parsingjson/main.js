var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function parsePokemon() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var pokeData = JSON.parse(xhr.responseText)
        console.log(pokeData);
        document.getElementById("results").innerHTML = "<h1> " + pokedata.objects.pokemon[1] +" </h1>";
    }
};
