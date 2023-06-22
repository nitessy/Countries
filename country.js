const countryName = new URLSearchParams(location.search).get('name')
const  flagImage = document.querySelector('.countrydetails img')
const countryNameh1 = document.querySelector('.countrydetails h1')
const nativeName = document.querySelector('.nativename')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subregion = document.querySelector('.subregion')
const capital = document.querySelector('.capital')
const toplevel = document.querySelector('.toplevel')
const currencies = document.querySelector('.currency')
const languages = document.querySelector('.languages')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText = true`)
.then((res)  =>  res.json())
.then(([country]) => {
    flagImage.src = country.flags.svg
    countryNameh1.innerText = country.name.common

    if(country.languages){
        languages.innerText = Object.values(country.languages).join(', ')
    }
    

    if (country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
    }
    else{
        nativeName.innerText = country.name.common

    }
    population.innerText = country.population
    region.innerText = country.region
    subregion.innerText = country.subregion
    capital.innerText = country.capital
    toplevel.innerText = country.tld.join(' , ')

    if(country.currencies){
         currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(' , ')  }


})