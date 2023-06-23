const countriescontainer = document.querySelector('.countries-container')
const search = document.querySelector('.search')

let allCountriesData 
fetch('https://restcountries.com/v3.1/all')
 .then((res) => res.json() )
 .then((data) =>  {
    data.forEach((country) => {
       
        const countryCard = document.createElement('a')
        countryCard.classList.add('country')
        countryCard.href = `country.html?name=${country.name.common}`
        
        
        countryCard.innerHTML =  `                <img src="${country.flags.svg}">
        <div class="card">
        <h3 class="naam"> ${country.name.common}</h3>
        <p> <b> Population: </b> ${country.population.toLocaleString('en-IN')}</p>
        <p> <b> Region: </b>${country.region}</p>
        <p> <b> Capital: </b>${country.capital}</p>  </div>`      
        
        
        countriescontainer.append(countryCard)
            })

 })
//  .then(renderCountries)
   
   

  



//    function renderCountries(data){
    // allCountriesData = data
    
    
           
            
            //    }
               
                search.addEventListener('input' , (e) =>{
                 const filter = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))

             // console.log(e.target.value) ;
             // console.log(allCountriesData);
            //  console.log(filter)
            //  renderCountries(filter)
                })