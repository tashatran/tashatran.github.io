console.log("test");

var searchbutton = $("#searchbar").val()
var key = "0d8116c0f30e53d8c4fe80c830b71edf"



function weatherResults(cityname){
    var searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=0d8116c0f30e53d8c4fe80c830b71edf"
    console.log(searchURL)

    $.ajax({
        url: searchURL,
        method: "GET"
      }).then(function(response) {
  
       
        console.log(response);
        // Create CODE HERE to transfer content to HTML
  
        $(".city").text(response.name);
        $(".temp").text(((response.main.temp - 273.15) * 1.80 + 32).toFixed(0) + "Fahrenheit");
        $(".humidity").text(response.main.humidity);
        $(".wind").text(response.wind.speed);
  
        
  
      });



    }

    $("#searchbutton").on("click", function (event) {
        event.preventDefault()
        var value = $("#cityname").val().trim();
        console.log(value)
        weatherResults(value)
      })