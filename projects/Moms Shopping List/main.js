$("#submitButton").click(function () {
    $("#output").append("<span> <button class = 'del' type='button'>X</button>" + $("#todoItem").val() + "<br></span>"),
        $("#todoItem").val("");
    $("#todoItem").focus();
    $(".del").click(function () {
        $(this).closest("span").remove();
        $(this).remove();
        console.log("deleted")

    })
});


$("#del").click(function () {
    $(this).next().remove();
    $(this).remove();
})







//$.ajax({
//    url: https://api.vschool.io/tolby/todo,
//    
//    
//    
//})
