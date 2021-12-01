function callApi(id) {
        let search=$('#seachText'+id).val();
        //TODO: Replace this code with calling search api with seach variable
        $('#status'+id).html("Getting search result");
         console.log('API call ..', search);
}

$(document).ready(function(e) {
    var timeout;
    var delay = 500;   // 0.5 seconds

    $('#seachText').keyup(function(e) {
        $('#status').html("User started typing!");
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            callApi('');
        }, delay);
    });

    $('#seachText2').keyup(function(e) {
        $('#status2').html("User started typing!");
        callApi('2');
    });

});