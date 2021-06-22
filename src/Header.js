import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcons from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

const Header = () => {
    const [{ basket }] = useStateValue()
    return (
        <div className="header">
            {/* logo on left */}
            <Link to="/">
                <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo" />
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text"
                    className="header__searchInput" />
                <SearchIcons className="header__searchIcon" />
            </div>
            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Vandana</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3st link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* basket icon with number */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shoping basket icons */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default Header
