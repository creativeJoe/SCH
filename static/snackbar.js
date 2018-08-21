function $snack(text) {
    // Get the snackbar DIV
    var x = $("#snackbar_msg");

    // Add the "show" class to DIV
    x.className = "show";

    $("#snackbar_msg").html(text);
    alert($("#snackbar_msg").html());
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    
};