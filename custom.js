(function($) {
    $(document).ready(function() {
        $('#hide_button').click(function() {
            $('p').hide()
        });
        $('#show_button').click(function() {
            $('p').show();
        });
        $('#toggle_button').click(function() {
            $('p').toggle()
        });
        $('#fadein_button').click(function() {
            $('p').fadeIn();
        });
        $('#fadeout_button').click(function() {
            $('p').fadeOut();
        });
        $('#fadetoggle_button').click(function() {
            $('p').fadeToggle(1000);
        });
        $('#fadeto_button').click(function() {
            $('p').fadeTo(1000, 0.4);
        });
        $('#slideup_button').click(function() {
            $('#slide').slideUp(1000);
        });
        $('#slideup_button').click(function(){
        	$('#slide').slideUp(1000, function(){
        		console.log("Done Sliding Up");
        	});
        });
        // }); // I used to parametter of actions here for practise
        $('#slidedown_button').click(function() {
            $('#slide').slideDown(1000);
        });
        $('#slidetoggle_button').click(function() {
            $('#slide').slideToggle(1000);
        });
        // $('#slide').animate({
        // 	fontsize: '20px',
        // 	color: 'red',
        // 	opacity: 0.6,
        // 	height: '150px',
        // 	width: '350px'
        // }, 2000) //animate function on jQuery
        // $('p').click();
        // $('#second').click();
        // $('.odd').click();
        // $('*').click();
        // $('p.odd').click();
        // Que funtion on jQuery
        // $('#slide').animate({opacity: 0.3}, 4000);
        // $('#slide').animate({opacity: 0.9}, 4000);
        // $('#slide').animate({width: '300px'}, 4000);
        // $('#slide').animate({height: '200spx'}, 4000);
        // if i want to stop any animation on my site then i should use this
        // $('#slide').stop(12000);
        // if you wants to changes html tags content from your codes then you should use this code lines
        // $('#slide').html('Alvi changed the html tag here');
        // if you wants to changes text content from your codes then you should use this code lines
        $('#slide').text('Alvi is okay with text changes');
        // if you want to remove any element from the code
        // $('p').remove();
        // $('p').click(function(){
        // 	console.log("You clicked on P", this)
        // });
        // adding class by using jQuery
        // $('#classchangebtn').on('click', function(){
        // 	$('#classchange').addClass('newclass')
        // });
        //adding toggleClass by using jQuery
        $('#classchangebtn').on('click', function(){
        	$('#classchange').toggleClass('newclass');
        });
        // css change using jQuery
        $('#bgcsschngbtn').on('click', function(){
        	$('#bgcsschng').css('background-color', 'red');
        	$('#bgcsschng').css('color', '#FFFFFF');
        })
    });
})(jQuery)