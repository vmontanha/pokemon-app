import '../../App.css';
import React from 'react';
import logo from '../../assets/logo.jpg'
import user from '../../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

function Header() {

          return (
                    <header className='header'>
                              <div className='navbar container__fluido'>
                                        <div className='logo'>
                                                  <img src={logo} alt='' />
                                                  <h1>Pokédex</h1>
                                        </div>
                                        <div className='user'>
                                                  <img src={user} alt='' />
                                                  <FontAwesomeIcon className='offline' icon={faRightFromBracket} />
                                        </div>
                              </div>
                    </header>
          );
}

export default Header;
