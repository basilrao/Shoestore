import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider";

function Header() {
    const [{basket}]=useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="https://wallpapercave.com/wp/hZRXL8T.jpg" alt="amazonloggo" />
                
            </Link>
            <div className="header__search">
                <input type="text" className="header__serachInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__nav">
                <Link to="/men" className="header__link">
                    <div className="header__option">
                       
                       <h1> <span className="header__optionLineTwo">MEN</span></h1>
                    </div>
                </Link>
                <Link to="/women" className="header__link">
                    <div className="header__option">
                        
                    <h1><span className="header__optionLineTwo">WOMEN</span></h1>
                    </div>
                </Link>
                <Link to="/kid" className="header__link">
                    <div className="header__option">
                        
                    <h1><span className="header__optionLineTwo">KIDS</span></h1>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon style={{ color: 'white' }} />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>

    )
}

export default Header
