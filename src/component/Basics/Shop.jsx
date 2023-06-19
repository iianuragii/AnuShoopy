import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './ShopCard';
import Footer from './Footer';

const Shop = () => {
    const [menuData, setMenuData] = React.useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
    <>
        <div className='start'>Welcome to a brand new type of storefront, Anushoopy</div>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' onClick={() => filterItem("Summer Outfits")}>AnuSummer Outfits</button>
                <button className='btn-group__item' onClick={() => filterItem("Winter Outfits")}>AnuWinter Outfits</button>
                <button className='btn-group__item' onClick={() => filterItem("Traditional Outfits")}>AnuTraditional Outfits</button>
                <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard menuData={menuData}/>
        <Footer/>
    </>
  );
};

export default Shop