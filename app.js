let searchBar = document.querySelector('#searchInput')
;
let searchBtn = document.querySelector('#searchBtn')
;
let countryInfoDiv = document.querySelector('#info')
;
searchBtn.addEventListener('click', () =>{

    let countryName = searchBar.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true` 
    if (searchBar.value.length == 0) {
        alert("the input faild cannot be empty")
    }else{
        // console.log(finalURL)
        fetch(finalURL)
            .then((response) => response.json()) 
            .then((data) => {
                // console.log(data[0]);
                // console.log(data[0].flags.png);
                // console.log(data[0].capital[0]);
                // console.log(data[0].name.common);
                // console.log(data[0].continents[0]);
                // console.log(data[0].population);
                // console.log(Object.keys(data[0].currencies)[0])
                // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
                // console.log(Object.values(data[0].languages).toString().split(',').join(', '));   
                
                countryInfoDiv.innerHTML =`
                <span class="info">
                <img src="${data[0].flags.png}" alt="flags-image" class="image">
                <h1 class="country-name">${data[0].name.common}</h1>
                </div>
                <span class="list-info">
                    <ul>
                        <li class="list">capital:</li> 
                        <li class="detals">data${data[0].capital[0]}</li>
                    </ul>

                    <ul>
                        <li class="list">continent:</li> 
                        <li class="detals">${data[0].continents[0]}</li>
                    </ul>

                    <ul>
                        <li class="list">population:</li> 
                        <li class="detals">${data[0].population}</li>
                    </ul>      
                            
                    <ul>
                        <li class="list">currency:</li> 
                        <li class="detals">${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}</li>
                    </ul>

                    <ul>
                        <li class="list">comman languages:</li> 
                        <li class="detals">${Object.values(data[0].languages).toString().split(',').join(', ')}</li>
                    </ul>
                </span>`
        });
    }
})

