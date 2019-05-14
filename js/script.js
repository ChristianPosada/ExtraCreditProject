jQuery(document).ready(function(){
    $('#submit').on('click',function(e){
        e.preventDefault();
        var zip = $('#input').val();
        var apiKey = 'f7eac9fe1be8d3ac40d2296651df4858';
        var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imperial&APPID=' + apiKey;
        axios.get(url).then(function(response){
            console.log(response);
            var currentTemp = response.data.main.temp;
            var temp_max = response.data.main.temp_max;
            var temp_min = response.data.main.temp_min;
            var windSpeed = response.data.wind.speed;
            let description = response.data.weather.map((weather) => {
                    return weather.description;
            });
            var country = response.data.sys.country;
            var city = response.data.name;
            
             $('#result').append('<p>The current temperature in '+city +', '+country + ' '+ zip + ' is ' + currentTemp.toFixed(0)+' F. </p>');
             $('#result').append('<p>The high for today is ' + temp_max.toFixed(0) + ' F' + ' and the low is '+ temp_min.toFixed(0) + ' F.</p>');
             $('#result').append('<p>Description: '+ description + '</p>');
             $('#result').append('<p>Wind speed is: ' + windSpeed + ' mph </p>');
         

        });
    });
});