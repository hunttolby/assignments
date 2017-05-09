var newLetter = "abcdefghijklmnopqrstuvwxyz"




function countCode(string) {
    for (var i = 0; i < newLetter.length; i++) {

        string.search("co" + newLetter[i] + "e");
        var count1 = (string.match(/("co" + newLetter[i] + "e")/g) || []).length;
        console.log(count1);
    }
}


countCode("aaacodebbb")
countCode("codexxcode")
countCode("cozexxcope")
