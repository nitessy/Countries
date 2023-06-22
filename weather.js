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
const form = document.querySelector('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const cities = document.querySelector('.city');

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
        }else{
            cityInput = search.ariaValueMax;
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
        fetch(`http://api.weatherapi.com/`)
    }








