// What we do function
$(document).ready(function() {
    $('#please').click(function() {
        $('#jil').toggle();
    });
    $('#pale').click(function() {
        $('#lik').toggle();
    });
    $("#promen").click(function() {
        $("#pile").toggle();
    });
    $("#submit").click(function(event) {
        var client = $("#nameDetail").val();
        alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
        event.preventDefault();
    });
    $(".card").hover(function() {
        $()
    })
});



