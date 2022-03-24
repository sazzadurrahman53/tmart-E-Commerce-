import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../../images/product/sm-img/1.jpg';
import img2 from '../../images/product/sm-img/2.jpg';
const CartOffsetMenu = ({ isToggleCartMenu, setToggleCartMenu }) => {


    return (
        <>
            <div className={`shopping__cart ${isToggleCartMenu ? 'shopping__cart__on' : ""}`}>
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn" onClick={() => setToggleCartMenu(false)}>
                        <Link to="#"><i className="zmdi zmdi-close"></i></Link>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <Link to="#">
                                    <img src={img1} alt="product images" />
                                </Link>
                            </div>
                            <div className="shp__pro__details">
                                <h2><Link to="/product-details">BO&Play Wireless Speaker</Link></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <Link to="#" title="Remove this item"><i className="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <Link to="#">
                                    <img src={img2} alt="product images" />
                                </Link>
                            </div>
                            <div className="shp__pro__details">
                                <h2><Link to="/product-details">Brone Candle</Link></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <Link to="#" title="Remove this item"><i className="zmdi zmdi-close"></i></Link>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><Link to="/cart">View Cart</Link></li>
                        <li className="shp__checkout"><Link to="checkout.html">Checkout</Link></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default CartOffsetMenu;