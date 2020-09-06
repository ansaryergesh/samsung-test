(function($){
    function processForm( e ){
        $.ajax({
            url: 'http://localhost:3000/registrations',
            dataType: 'jsonp',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: JSON.stringify( { "fio": $('#fio').val(), "email": $('#email').val(), "city": $('#city').val() } ),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#contact-form').submit( processForm );
})(jQuery);