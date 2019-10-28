console.log("test");

var searchbutton = $("#cityname").val().trim()
var key = "0d8116c0f30e53d8c4fe80c830b71edf"



function weatherResults(cityname){
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid="+key//0d8116c0f30e53d8c4fe80c830b71edf"
    console.log(searchURL)

    $.ajax({
        url: searchURL,
        method: "GET"
      }).then(function(response) {
  
       
        console.log(response);
        let cityid= response.id
        
  
        $(".city").text(response.name);
        $(".temp").text(((response.main.temp - 273.15) * 1.80 + 32).toFixed(0) + "Fahrenheit");
        $(".humidity").text(response.main.humidity);
        $(".wind").text(response.wind.speed);
  
        $.ajax({url:`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&mode=json&appid=${key}`}).then(function(forecastResult){
          console.log(forecastResult)
          console.log(forecastResult.list[3])
          console.log(forecastResult.list[11])
          console.log(forecastResult.list[19])
          console.log(forecastResult.list[27])
          console.log(forecastResult.list[35])
          postForecast(forecastResult.list[3])
          postForecast(forecastResult.list[11])
          postForecast(forecastResult.list[19])
          postForecast(forecastResult.list[27])
          postForecast(forecastResult.list[35])

        })

        
  
      });



    }

    

    $("#searchbutton").on("click", function (event) {
        event.preventDefault()
        var value = $("#cityname").val().trim();
        console.log(value)
        weatherResults(value)
        //TODO push value into local storage

        localStorage.setItem("cityname");
        document.getElementById("#cityname").innerHTML = localStorage.getItem("");
      })

      function postForecast(forecastObject){
       
        var newDiv = $('<div>').html(`
        
        <div class='card'>

        <h2>${forecastObject.dt_txt}</h2>
        <p>Humidity: ${forecastObject.main.humidity}</p>
        <p>Temperature:${((forecastObject.main.temp - 273.15) * 1.80 + 32).toFixed(0)}</p>
        <p>Condition:${forecastObject.weather[0].description}</p>
        </div>
        
        
        `)

        

        let future= $(".future")
        future.append(newDiv)

      }