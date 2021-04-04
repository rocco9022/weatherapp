import React, { useState } from 'react'

import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import swal from 'sweetalert'






function App(){
  const [cities, setCities]= useState ([]);

 

  function onSearch(ciudad) {



    
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
)
      .then(r => r.json())
      .then((recurso) => {
        
        
      
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
          swal({ 
            title: "NOTICE", 
            text: ciudad.name  + " was added successfully",
            icon: "success",
            timer: 1850,
            padding: "0.75rem"
            });
        } else {
          swal({ 
            title: "NOTICE", 
            text: ciudad  + ": city not found",
            icon: "error",
            timer: 2000,
            padding: "0.75rem"
            });;
        }
      });
    

    }

    function onClose(id){
      setCities (oldCities => oldCities.filter(c => c.id !== id));
    }

  return(
    
      

   
    <div className="App">
      
    
    <Nav onSearch={onSearch}/>
    
 
    <Cards cities={cities} onClose= {onClose}/>
    
    
      
  </div>
    
  );
};

export default App;

//primero importamos Nav y Cards
//segundo hacemos la clase y renderizamos con las cosas que queremos ver
// para que aparezcan las ciudades debo crear un estado, no solo que esten cómo props
// agregamos import React, { useState } from 'react' al comeinzo para traer el use state.
// agregamos cities a Cards