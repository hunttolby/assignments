$("#ranBtn").click(function () {
    var ranNum = Math.floor((Math.random() * 250) + 1);
    $.get("http://pokeapi.co/api/v2/pokemon/" + ranNum, function (data) {
        // Display the returned data in browser
        $("#result").html("<div> Name : " + data.name + "<br> Weight : " + data.weight + " KGs </div>");
        console.log(data.name);
    });
})
