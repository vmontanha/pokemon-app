import '../../App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function SideTop() {

          return (
                    <div className='box container__fluido'>
                              <div className='search'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                                        <input className='search__bar' type='text' placeholder='Pesquise por nome ou número' />
                              </div>
                              <div className='order__search'>
                                        <h1>Ordenar por</h1>
                                        <button className='btn__order'>Menor Número Primeiro <FontAwesomeIcon icon={faCaretDown} /></button>
                              </div>
                    </div>
          );
}

export default SideTop;
