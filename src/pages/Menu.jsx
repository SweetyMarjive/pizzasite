import React from 'react';
import { MenuList } from '../Helpers/MenuList.jsx';
import MenuItem from '../component/MenuItem.jsx';
import '../styles/Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Menu List</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return (
                    <MenuItem
                    key={key}
                    image={menuItem.image}
                    name={menuItem.name}
                    price={menuItem.price}
                    />
                
                );
            })}
        </div>   
    </div>
 )
  
}

export default Menu;
