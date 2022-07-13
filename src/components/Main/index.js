import '../../App.css';
import React, { useEffect, useState } from 'react';
// import api from '../../service';
import axios from 'axios';

function Main() {

          const api = axios.create({
                    baseURL: "https://unpkg.com/pokemons@1.1.0",
          });

          const [poke, setPoke] = useState([{}]);

          useEffect(() => {
                    api
                              .get("/pokemons.json")
                              .then((response) => setPoke((response.data)))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });


          }, []);

          console.log(poke.results)


          return (
                    <div className='container__main'>
                              {
                                        poke.map(element => {
                                                  <div className='box__pokemon' >
                                                            <div className='pokemon'>
                                                                      <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' alt='' />
                                                            </div>
                                                            <div className='pokemon__skils'>
                                                                      <p className='number'>

                                                                      </p>
                                                                      <h1>Bulbasaru</h1>
                                                            </div>
                                                            <div className='pokemon__hits'>
                                                                      <span className='grass'>Grass</span>
                                                                      <span className='poison'>Poison</span>
                                                            </div>
                                                  </div>
                                        })

                              }

                    </div >
          );
}

export default Main;