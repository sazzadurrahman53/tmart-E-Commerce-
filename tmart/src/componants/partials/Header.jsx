import React, { useState } from 'react';
import logo from '../../images/logo/logo.png';
import PrimaryMenu from './PrimaryMenu';
import MobileMenu from './PrimaryMenu/MobileMenu';
import PrimaryMenusData from '../../temp/menus.json'
import { Link } from 'react-router-dom';
import ExtraMenus from '../ExtraMenus';
import Search from '../OffsetMenu/Search';
import CartOffsetMenu from '../OffsetMenu/CartOffsetMenu';

const Header = () => {
    const { menus } = PrimaryMenusData
    const [isToggleSearch, setToggleSearch] = useState(false);

    const [isToggleCartMenu, setToggleCartMenu] = useState(false);

    console.log(isToggleCartMenu);
    return (
        <>
            <header id="header" className="htc-header header--3 bg__white">
                {/* <!-- Start Mainmenu Area --> */}
                <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logo} alt="Tmart" />
                                    </Link>
                                </div>
                            </div>
                            {/* <!-- Start MAinmenu Ares --> */}
                            <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                                <PrimaryMenu menus={menus} />
                                <MobileMenu />
                            </div>
                            {/* <!-- End MAinmenu Ares --> */}
                            < ExtraMenus setToggleSearch={setToggleSearch} setToggleCartMenu={setToggleCartMenu} />
                        </div>
                        <div className="mobile-menu-area"></div>
                    </div>
                </div>
                {/* <!-- End Mainmenu Area --> */}
            </header>
            <div className="body__overlay" />
            {isToggleSearch && (

                <div className="search__box__show__hide">
                    <Search setToggleSearch={setToggleSearch} />
                </div>
            )}
            {isToggleCartMenu && <CartOffsetMenu isToggleCartMenu={isToggleCartMenu} setToggleCartMenu={setToggleCartMenu} />}



        </>
    )
}
export default Header;