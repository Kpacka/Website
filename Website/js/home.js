$(document).ready(function(){

            // $('#sg-week1').hide();
            $('#sg-week2').hide();
            $('#sg-week3').hide();
            $('#sg-week4').hide();
            $('#sg-week5').hide();

            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            // $('#sg-weekly').hide();
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
            $('#RPSButton').click(function(){
		
		// $('#kyle-intro-image').slideUp('', function(){

           
	$('#RPS').toggle();
		// });
			
	});
            $('#sg-week1-link').click(function(){
                $('#sg-week1').slideDown();
            });
	//$('#portfolio-div').hide();
	//$('#test').hide();
	//$('#home-div').hide();
	//$('#about-div').hide();
	$('#portfolio-link').click(function(){
		
		// $('#kyle-intro-image').slideUp('', function(){
	$('html, body').animate({
    	scrollTop: $("#portfolio-div").position().top - 50
    }, 700);	
		// });
			
	});
	$('#about-link').click(function(){
		$('html, body').animate({
    	scrollTop: $("#about-div").position().top - 50
    	}, 700);
		

				
	});
	$('#home-link').click(function(){
		$('html, body').animate({
    	scrollTop: $("#kyle-intro-image").position().top - 50
    	}, 700);
		// $('#kyle-intro-image').slideUp();

				
	});
	$('#show-sg-weekly').click(function(){
		
		// $('#kyle-intro-image').slideUp('', function(){
	$('#sg-weekly').toggle();
			
	});



    //$('h1').css('text-align', 'center');
    $('#weatherSpecifics').hide();
    $('#longRange').hide();
    $('#getWeather').click(function(){
        // $('#weatherSpecifics').empty();
        // $('#longRange').empty();

        var zip = $('#get-zip').val();
        var unit_display = $('#weather-unit option:selected').text();
        var unit= $('#weather-unit').val();
        function getTempDisplay(){
                    if (unit_display == 'Celsius'){
                        return 'C';
                    }
                    else {
                        return 'F';
                    }
        };
        function getWindDisplay(){
                if (unit_display == 'Celsius'){
                        return 'kilometers';
                    }
                    else {
                        return 'miles';
                    }
        };
        var tempUnit = getTempDisplay();
        var windUnit = getWindDisplay();
        //document.getelementbyId js


        $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&units=' + unit + '&APPID=79f9769001f463903eb33a5ab8ca1708',
        success: function(weatherObjects) {

            var weatherDiv = $('#weatherSpecifics');
            var longRangeDiv = $('#longRange');
            

            // go through each of the returned contacts and append the info to the
            //contactsDiv
            //$.each(weatherObjects, function(index, weather) {
                var temp = weatherObjects.main.temp;
                var humidity = weatherObjects.main.humidity;
                var wind = weatherObjects.wind.speed;
                var iconId = weatherObjects.weather.icon;


                //vat humidity =
                //var wind =
                weatherDiv.empty();
                weatherDiv.append('<h2> Current Conditions for ' + weatherObjects.name + '</h2>');
                weatherDiv.append('<div class = "row"><div class="col-md-2" style="text-align: center"><img src="http://openweathermap.org/img/w/' + weatherObjects.weather[0].icon + '.png" height = "100"></div><div class = "col-md-2"><p> '+ weatherObjects.weather[0].main + ' : ' + weatherObjects.weather[0].description + '</p></div>' +
                                '<div class ="col-md-4"><p> Temprature: '+ temp + ' ' + tempUnit + '</p>'
                                                     + '<p> Humidity: '+ humidity + '%' + '</p>'
                                                     +' <p> Wind: '+ wind + ' ' + windUnit + '/hour</p></div></div>'

                                );

        },
        error: function() {
            alert('FAILURE!');
        }

        });


        $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zip + '&units=' + unit + '&APPID=79f9769001f463903eb33a5ab8ca1708',
        success: function(weatherObjects) {

            var longRangeDiv = $('#5-day-forcast');
            
            var day1Temp = weatherObjects.list[0].temp.max;
            var day2Temp = weatherObjects.list[1].temp.max;
            var day3Temp = weatherObjects.list[2].temp.max;
            var day4Temp = weatherObjects.list[3].temp.max;
            var day5Temp = weatherObjects.list[4].temp.max;

            longRangeDiv.empty();
            longRangeDiv.append('<div class = "col-md-2"><p>'+day1Temp+ '</p><br><img src="http://openweathermap.org/img/w/' + weatherObjects.list[0].weather[0].icon + '.png" height = "100"></div>');
            longRangeDiv.append('<div class = "col-md-2"><p>'+day2Temp+ '</p><br><img src="http://openweathermap.org/img/w/' + weatherObjects.list[1].weather[0].icon + '.png" height = "100"></div>');
            longRangeDiv.append('<div class = "col-md-2"><p>'+day3Temp+ '</p><br><img src="http://openweathermap.org/img/w/' + weatherObjects.list[2].weather[0].icon + '.png" height = "100"></div>');
            longRangeDiv.append('<div class = "col-md-2"><p>'+day4Temp+ '</p><br><img src="http://openweathermap.org/img/w/' + weatherObjects.list[3].weather[0].icon + '.png" height = "100"></div>');
            longRangeDiv.append('<div class = "col-md-2"><p>'+day5Temp+ '</p><br><img src="http://openweathermap.org/img/w/' + weatherObjects.list[4].weather[0].icon + '.png" height = "100"></div>');

            // go through each of the returned contacts and append the info to the
            // contactsDiv
            // $.each(weatherObjects, function(index, weather) {
            //     var temp = weatherObjects.main.temp;
            //     var humidity = weatherObjects.main.humidity;
            //     var wind = weatherObjects.wind.speed;
            //     var iconId = weatherObjects.weather.icon;


            //     //vat humidity =
            //     //var wind =
            //     weatherDiv.append('<h2> Current Conditions for ' + weatherObjects.name + '</h2>');
            //     weatherDiv.append('<div class = "row"><div class="col-md-2" style="text-align: center"><img src="http://openweathermap.org/img/w/' + weatherObjects.weather[0].icon + '.png" height = "100"></div><div class = "col-md-2"><p> '+ weatherObjects.weather[0].main + ' : ' + weatherObjects.weather[0].description + '</p></div>' +
            //                     '<div class ="col-md-4"><p> Temprature: '+ temp + ' ' + tempUnit + '</p>'
            //                                          + '<p> Humidity: '+ humidity + '%' + '</p>'
            //                                          +' <p> Wind: '+ wind + ' ' + windUnit + '/hour</p></div></div>'

            //                     );

        },
        error: function() {
            alert('FAILURE!');
        }

        });

       //api.openweathermap.org/data/2.5/forecast/daily?zip=55441&APPID=79f9769001f463903eb33a5ab8ca1708





        $('#weatherSpecifics').show();
        $('#longRange').show();
    });

 



})
