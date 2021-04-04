import React from 'react';
import Logo from '../image.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import Foto from './Lean.png'
import swal from 'sweetalert'
import { findByLabelText } from '@testing-library/dom';



function Nav({onSearch}) {
  return (
    <nav className={"navbar navbar-dark bg-dark"}>

      <div>
    <img style= {{borderRadius: " 120px", borderRight: "50px"}}src={Logo}/>
    <div style= {{display: 'flex', justifyContent:'center', backgroundColor:'green', color: "white", borderRadius: "5px", fontFamily: "Bungee Inline"}}> WEATHER APP</div>
    </div>
    
      
    <button style ={{borderRadius: "150px", backgroundColor: "black", marginLeft:"130px"}} onClick={() => swal({
              title: "DESIGNED BY LEANDRO ROCCO",
              text: "This is a free web application designed using React, HTML, CSS and doesn't have any commercial purpouse. The weather forecasts are provided by Open Weather Map's API",
              buttons: ["CANCEL", "MORE"]
            }).then(respuesta =>{
              if(respuesta){
                swal({
                  title: "Full Stack Javascript Developer | React | Redux | NodeJs | Express | PostgreSQL | CSS",
                  text: "Hi, I'm Leandro",
                  buttons: ["CANCEL", "ABOUT ME"]
                }).then(respuesta =>{
                  if(respuesta){
                    swal({
                      
                      text:"I am from Argentina and I am 30 years old, I am an enthusiastic, self-taught and responsible person,  always  looking for new challenges, the last of them was to do a very intensive Bootcamp to be a Developer in 4 months. My pasions are programming and learning languages, I speak Spanish, Portuguese and English. My first contact with technologies was studiying SAP and Python."
                    })
                  }
                })
              }
            })
              }><img style= {{borderRadius: "50px"}} src={Foto}></img></button>
    

  

   
    
    <SearchBar onSearch={onSearch}/>
    </nav>
    
    
  );
};

export default Nav; 


// al comienzo no tiene nada
// hacemos el Nac con boostrap, como decia en el readme
// ponemos el tag nav de html para agregar el Logo que ya esta importado(..)  y dentro ponemos el nav tbn