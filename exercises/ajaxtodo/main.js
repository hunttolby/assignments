$("#submitButton").click(function () {
    $("#output").append("<span><input id='checkMe'type='checkbox'>" + $("#todoItem").val() + "</span> <br>"),
        $("#todoItem").val("");
    $("#todoItem").focus();
    $(function () {
        $('#checkMe').on('change', function () {
            if ($(this).is(":checked")) {
                $(this).closest("span").css("text-decoration", "line-through");
            } else {
                $(this).closest("span").css("text-decoration", "none");
            };
        });
    });
});







//$.ajax({
//    url: https://api.vschool.io/tolby/todo,
//    
//    
//    
//})
