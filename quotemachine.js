$(document).ready(function() {
    loadQuote(); 
    $("button").on("click", function() {
       loadQuote(); 
    });
});
function loadQuote() {
    $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        dataType: 'jsonp',
        data: {
            method: 'getQuote',
            format: 'jsonp',
            lang: 'en',
            jsonp: 'parseQuote'
        },
        jsonpCallback: 'parseQuote',
        success: function(response) {
            $(".quote").css('visibility', 'visible');
            $("#quote").html(response.quoteText);
            $("#author").html(response.quoteAuthor);
        }
    });
};
