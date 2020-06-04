jQuery(document).ready(function($){

  if( $.cookie('SurveyLightbox') === undefined ) {
   //alert('No cookie!');

    //code to create popup here
    $('body').append('<div id="lb-wrapper"></div>');
    $('#lb-wrapper').fadeIn(function(){

        $('body').append('<div id="lightbox"><p>Sample Text Here!</p><div id="close-lb">Accept</div></div>');
        $('#lightbox').fadeIn();

        $('#close-lb').click(function(){

            $('#lightbox').fadeOut(function(){
                $('#lb-wrapper').fadeOut();

                $('#lightbox').remove();
            });

        });

    });

    //set cookie
    $.cookie("SurveyLightbox", "true", { expires: 7 }); //name, value, days to expire

} else {

    //alert('You\'ve got a cookie!');

}

});
