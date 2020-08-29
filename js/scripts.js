$(document).ready(function() {
    $('#please').click(function() {
        $('#jil').toggle();
    });
    $('#pale').click(function() {
        $('#lik').toggle();
    });
});

$(document).ready(function() {
    $("#promen").click(function() {
        $("#pile").toggle();
    });
});
  
$("button").click(function(event) {
    var client = document.getElementById("name").value();
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    event.preventDefault();
});

