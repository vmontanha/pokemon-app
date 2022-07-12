import '../../App.css';
import * as React from 'react';
import Switch from '@mui/material/Switch';


function SideBottom() {

          const label = { 'aria-label': '' };

          return (
                    <div className='sidebar__fav'>
                              <h1>Filtrar Favoritos</h1>
                              <div className='box__types'>
                                        <Switch {...label} />
                              </div>
                    </div>
          );
}

export default SideBottom;