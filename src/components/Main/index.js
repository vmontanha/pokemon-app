import '../../App.css';
import React, { useEffect, useState } from 'react';
// import api from '../../service';
import api from '../../service';

function Main() {

          const [poke, setPoke] = useState([]);

          useEffect(() => {
                    api
                              .get("/pokemons.json")
                              .then((response) => setPoke((response.data)))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });


          }, []);

          return (
                    <div className='container__main'>
                              {poke.results &&
                                        Object.values(poke.results).map((value) => (
                                                  <div className='box__pokemon' >
                                                            <div className='pokemon'>
                                                                      <img src={value.sprites.normal} alt='' />
                                                            </div>
                                                            <div className='pokemon__skils'>
                                                                      <p className='number'>
                                                                                Nº{value.national_number}
                                                                      </p>

                                                                      <h1>{value.name}</h1>
                                                            </div>
                                                            <div className='pokemon__hits'>
                                                                      <span className='grass'>
                                                                                {value.type[0]}
                                                                      </span>
                                                                      {
                                                                                value.type[1] ? <span className='poison'>
                                                                                          {value.type[1]}
                                                                                </span>
                                                                                          : null
                                                                      }

                                                            </div>
                                                  </div>
                                        ))
                              }
                    </div >
          );
}

export default Main;