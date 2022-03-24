import React from 'react'
import { Link } from 'react-router-dom'
const PrimaryMenu = ({ menus }) => {
    return (
        <>
            <nav className="mainmenu__nav hidden-xs hidden-sm">
                <ul className="main__menu">
                    {menus.length > 0 && menus.map((menu) => (
                        <li key={menu.id} className="drop">
                            <a href={menu.link}>{menu.text}</a>

                            {menu?.dropdown?.length > 0 && (
                                <ul className="dropdown">

                                    {menu.dropdown.map((dropdownMenu) => (
                                        <li key={dropdownMenu.id} >
                                            <Link to={dropdownMenu.link}>{dropdownMenu.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {menu?.megaMenus?.length > 0 && (
                                <ul className="dropdown mega_dropdown">

                                    {menu.megaMenus.map((megaMenuTitle) => (
                                        <li key={megaMenuTitle.id} >
                                            <a href={megaMenuTitle.link}>{megaMenuTitle.text}</a>



                                            {megaMenuTitle?.megaMenusItem?.length > 0 && (
                                                <ul className="mega__item">

                                                    {megaMenuTitle.megaMenusItem.map((megaMenuItem) => (
                                                        <li key={megaMenuItem.id} >
                                                            <Link to={megaMenuItem.link}>{megaMenuItem.text}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}



                                        </li>
                                    ))}
                                </ul>
                            )}

                        </li>
                    ))}




                </ul>
            </nav>
        </>
    )
}

export default PrimaryMenu;