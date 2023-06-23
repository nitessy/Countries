//get all necessary elements frm the Dom
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon')
const cloudOutput = document.querySelector('.cloud');
const humdityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city');

//defualt city when the page loads
let cityInput="London";

//add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener('click', (e) => {

        //Change from default city to the clicked one
        
        cityInput = e.target.innerHTML;
        
        /*Function that fetches and displays all the data from the weather API (we will write it soon) */
        
        fetchWeatherData();
        
        //Fade out the app (simple animation)
        
        app.style.opacity = "0";
        
        });
    })
    //add submit event to the form
    form.addEventListener('submit', (e) => {

        if(search.Value.length == 0) {
            alert('Please type in a city name');
        } else {
            cityInput = search.value;
            fetchWeatherData();
            search.value = "";
            app.style.opacity ="0";
        }
    e.preventDefault();

    });
    function dayOfTheWeek(day, month, year){
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return weekday[new Date(`${day}/${month}/${year}`).getDay()];
    };

    function fetchWeatherData() {
        fetch(`https://api.weatherapi.com/v1/current.json?key=9e7817ab1b9f4a759b651944232306=${cityInput}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                temp.innerHTML = data.current.temp_c + "&#176;";
                conditionOutput.innerHTML = data.current.condition.text; 

                const date = data.location.localtime;
                const y = parseInt(date.substr(0, 4));
                const m = parseInt(date.substr(5, 2));
                const d = parseInt(date.substr(8, 2));
                const time = date.substr(11);

                dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
                timeOutput.innerHTML = time;
            
                nameOutput.innerHTML = date.location.name;

                const iconId = data.current.condition.icon.substr(
                "//cdn.weatherapi.com/weather/64x64/".length);

                icon.src = "./icons/" + iconId;

                cloudOutput.innerHTML = data.current.cloud + "%";


            

            })
    }








