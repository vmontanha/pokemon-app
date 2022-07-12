import React, { useState, useEffect } from 'react';
import './App.css';
import RingLoader from "react-spinners/ClipLoader";
import Header from './components/Header';
import SideTop from './components/SideTop';
import Sidebar from './components/SideBar';
import SideBottom from './components/SideBottom';
import Main from './components/Main';

function App() {

          const [loading, setLoading] = useState(false);

          useEffect(() => {
                    setLoading(true)
                    setTimeout(() => {
                              setLoading(false)
                    }, 1000)
          }, [])


          return (
                    <div className="App">
                              {
                                        loading ?

                                                  <RingLoader
                                                            size={100}
                                                            color={"#f7ba15"}
                                                            loading={loading}
                                                            speedMultiplier={1}
                                                  />
                                                  :

                                                  <div className='main'>
                                                            <Header />
                                                            <div className='section'>
                                                                      <SideTop />
                                                            </div>
                                                            <div className='container container__fluido'>
                                                                      <Main />
                                                                      <div className='section__main container__fluido'>
                                                                                <Sidebar />
                                                                                <SideBottom />
                                                                      </div>
                                                            </div>

                                                  </div>
                              }
                    </div>
          );
}

export default App;
