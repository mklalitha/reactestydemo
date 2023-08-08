import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({cartItems}) => {
    return (
        <>
            <header className="header1">
                <div>
                    <Link to="/" className="logo">
                       <img src="./logo/Etsy_logo.svg.png" alt="logo" style={{ height: "40px", width: "80px" }} /></Link>
                </div>
                <div className="search-box">
                    <input type="text" className="search-query"
                        placeholder="Search for anything"
                        value=""
                        autocomplete="off" />
                    <button type="button" className="search-icon"> <i class="fa-solid fa-magnifying-glass" id="tool"></i></button>
                </div>
                <div className="nav-container">
                    <ul>
                        <li className="sign"><button className="header-signin"> <Link to="/Signin">Sign in</Link></button></li>
                        <li className="nav-logo-container"><Link to="/"><span className="tooltip"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><title>INDIA</title><defs><path d="M.003 10c0 5.516 4.485 10.002 10 10.002s10-4.486 10-10c0-5.516-4.485-10-10-10s-10 4.484-10 10z" id="a"></path><path d="M10.003 20.002c5.515 0 10-4.486 10-10 0-5.516-4.485-10-10-10s-10 4.484-10 10c0 5.514 4.485 10 10 10z" id="d"></path><filter x="-2.5%" y="-2.5%" width="105%" height="105%" filterUnits="objectBoundingBox" id="c"><feGaussianBlur stdDeviation=".5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowInnerInner1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"></use></mask><path fill="green" mask="url(#b)" d="M0 20h20v-6H0"></path><path fill="#FFF" mask="url(#b)" d="M0 14V6h20v8"></path><path fill="orange" mask="url(#b)" d="M0 6h20V0H0"></path><use filter="url(#c)" xlinkHref="#d" fill="#000"></use></g><g transform="translate(10,10)"><circle r="0.8" fill="#008"></circle><circle r="0.5" fill="#fff"></circle><circle r="0.8" fill="#008"></circle><g id="j"><g id="i"><g id="h"><g id="g"><circle r="0.3" fill="#008" transform="rotate(2.5) translate(2.5)"></circle><path fill="#008" d="M 0, 0.9, C 0.6,4 0,2 0,2 0,2 -0.6,0 -0.6, L 0,12 z"></path></g><use xlinkHref="#g" transform="rotate(15)"></use></g><use xlinkHref="#h" transform="rotate(30)"></use></g><use xlinkHref="#i" transform="rotate(60)"></use></g><use xlinkHref="#j" transform="rotate(120)"></use><use xlinkHref="#j" transform="rotate(-120)"></use></g></svg></span></Link><span className="tooltiptext"><title>INDIA</title></span></li>
                        <li className="nav-fav-container"><Link to="/"><span className="tooltip"><i id="heart-icon" class="fa-regular fa-heart" ></i><span className="tooltiptext">Favourites</span></span></Link></li>
                        <li className="nav-cart-container"><Link to="/Cart"><span className="tooltip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24"  width="24"aria-hidden="true" focusable="false">
                            <path d="M21 10a1 1 0 00-1-1h-3c.059-.682.287-4.44-1.611-6.555A4.363 4.363 0 0012 1a4.363 4.363 0 00-3.394 1.445C6.709 4.56 6.937 8.318 7 9H4a1 1 0 00-1 1c0 .752.008 7.413 1.12 9.478 1.416 2.622 5.92 3.474 7.88 3.474 2.12 0 6.61-1.024 7.888-3.492C20.992 17.326 21 10.74 21 10zm-5.307 7l.283-1.283.159-.717h2.651a25.487 25.487 0 01-.251 2h-2.842zM5.457 17c-.1-.586-.183-1.27-.248-2h2.656l.159.717L8.307 17h-2.85zm4.519-1.717L9.914 15h4.173l-.063.283c-.13.585-.258 1.162-.378 1.717h-3.292c-.119-.554-.247-1.13-.377-1.717h-.001zM9.479 13a39.761 39.761 0 01-.376-2H14.9c-.087.564-.22 1.256-.376 2H9.479zm9.446 0h-2.362c.152-.748.278-1.43.354-2h2.075a61.73 61.73 0 01-.067 2zM10.1 3.78A2.412 2.412 0 0112 3a2.412 2.412 0 011.9.78c1.205 1.338 1.2 4.145 1.1 5.113a.928.928 0 00.01.106H8.984a.923.923 0 00.01-.106c-.101-.968-.102-3.775 1.106-5.114zM7.083 11c.076.57.2 1.252.354 2H5.073a61.441 61.441 0 01-.066-2h2.076zm-.844 8h2.483c.108.562.191 1.061.237 1.457A6.514 6.514 0 016.239 19zm4.756 1.885A13.506 13.506 0 0010.756 19h2.489c-.123.62-.203 1.25-.239 1.881-.334.044-.67.068-1.006.071a8.66 8.66 0 01-1.005-.067zm4.049-.445c.046-.394.129-.886.235-1.44h2.489a6.655 6.655 0 01-2.724 1.44z" height="24" width="24"></path>
                        </svg > <span className="cart-length" >{cartItems.length ===0? "":cartItems.length}</span> 
                        <span className="tooltiptext">Cart</span></span>

                        </Link></li>
                    </ul>
                </div>
            </header>
            <header className="header2">
                 <ul className="Categories-list">
                        <li className="nav-Categories-list1"><Link to="/Home"><span className="catagories1">Sellers' Sales Hub</span></Link></li>
                        <li className="nav-Categories-list2"><Link to="/Jewellery"><span className="catagories2"> Jewellery & Accessories</span></Link></li>
                        <li className="nav-Categories-list3"><Link to="/Clothing"><span className="catagories3"> Clothing & Shoes</span></Link></li>
                        <li className="nav-Categories-list4"><Link to="/Living"><span className="catagories4"> Home & Living</span></Link></li>
                        <li className="nav-Categories-list5"><Link to="/Party"><span className="catagories5">Wedding & Party</span></Link></li>
                        <li className="nav-Categories-list6"><Link to="/Toys"><span className="catagories6">Toys & Entertainment</span></Link></li>
                        <li className="nav-Categories-list7"><Link to="/Art"><span className="catagories7">Art & Collectibles</span></Link></li>
                        <li className="nav-Categories-list8"><Link to="/Craft"><span className="catagories8">Craft Supplies</span></Link></li>
                        <li className="nav-Categories-list8"><Link to="/Gifts"><span className="catagories8"><i class="fa-solid fa-gift"></i>    Gifts</span></Link></li>
                    </ul>
                

            </header>



        </>
    )
}
export default Header;