$("#submitButton").click(function () {
    $("#output").append("<input id='checkMe'type='checkbox'>" + "<span>" + $("#todoItem").val() + "</span> <br>"),
        $("#todoItem").val("");
    $("#todoItem").focus();
    $(function () {
        $('#checkMe').on('change', function () {
            if ($(this).is(":checked")) {
                $(this).closest("span").addClass("cross");
            } else {
                $(this).closest("span").removeClass("cross")
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
