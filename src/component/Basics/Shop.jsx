import React from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './ShopCard';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";

const Shop = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
    <>
        <section className='head'>
        { isAuthenticated ? (            
            <div className='auth'>
                <div className='name'>Hey {user.name}, isn't it a Great Day to start off with your Shopping???</div>
                <button className='log' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
            </div>
        ) : (
            <div className='auth'>
                <button className='log' onClick={() => loginWithRedirect()}>Log In</button>
            </div>
        )}      
       
        <div className='start'>
            Welcome to a brand new type of storefront, Anushoopy        
        </div>
        <nav className='navbar'>        
            <div className='btn-group'>  
                                            
                <button className='btn-group__item' onClick={() => filterItem("Summer Outfits")}>AnuSummer Outfits</button>
                <button className='btn-group__item' onClick={() => filterItem("Winter Outfits")}>AnuWinter Outfits</button>
                <button className='btn-group__item' onClick={() => filterItem("Traditional Outfits")}>AnuTraditional Outfits</button>
                <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                
            </div>
        </nav>
        </section>
        <MenuCard menuData={menuData}/>
        <Footer/>
    </>
  );
};

export default Shop