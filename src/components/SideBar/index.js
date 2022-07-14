import '../../App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function SideBar() {

          const api = axios.create({
                    baseURL: "https://unpkg.com/pokemons@1.1.0",
          });


          const [filter, setFilter] = useState([]);

          useEffect(() => {
                    api
                              .get("/pokemons.json")
                              .then((response) => setFilter((response.data)))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });


          }, []);

          return (
                    <div className='sidebar'>
                              <h1>Filtrar por Tipo</h1>
                              <div className='box__types'>
                                        {filter.results &&
                                                  Object.values(filter.results).map((value) => (
                                                            <button className='btn__types'>{value.type[0]}</button>
                                                  ))
                                        }
                              </div>
                    </div>
          );
}

export default SideBar;