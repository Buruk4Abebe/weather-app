document.addEventListener("DOMContentLoaded", function () {
        const searchButton = document.querySelector(".search_button");
        const inputValue = document.querySelector(".input_section");
        const apiKey = "28de8db3199197e12c9fe285a34c4bff";
        var weatherIcon = document.querySelector(".weather_icon")
    
        async function weather(city) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}&unit=metric`;
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                console.log(data.name);

                document.querySelector(".city_name").innerHTML = data.name;
                document.querySelector(".tempeature").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity_value").innerHTML = data.main.humidity + "%";
                document.querySelector('.wind_speed').innerHTML = data.wind.speed + " Km/h";

                if(data.weather[0].main == "Clouds"){
                        weatherIcon.src="image/clouds.png"
                }
                else if(data.weather[0].main == "Rain"){
                        weatherIcon.src = "image/rain.png"
                }
                else if(data.weather[0].main == "Mist"){
                        weatherIcon.src = "image/mist.png"
                }
                else if(data.weather[0].main == "Drizzel"){
                        weatherIcon.src = "image/drizzle.png"
                }
                else if(data.weather[0].main == "sun"){
                        weatherIcon.src = "image/clear.png"
                }
                else if(data.weather[0].main == "Clear"){
                        weatherIcon.src = "image/clear.png"
                }



                
                
        } catch (error) {
                console.error("Error:", error);
        }
}

searchButton.addEventListener("click", () => {
        const city = inputValue.value;
        weather(city);

        document.querySelector(".todisplaynone").style.display="block"
        if(city.length <= 1){
                alert("Pleace Input correct  City name!!")
        }
        });
    
    });
    