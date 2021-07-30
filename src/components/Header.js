import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom';

function Header() {
    const [isLoggedIn, setUser] = useState(false);

    useEffect(()=>{
        setInterval(()=>{
            if(localStorage.getItem('token')){
                setUser(true);
            }
        },1000);
    },[])

    const logout = () => {
        setUser(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return (
        <header>

<div className="header-area header-transparent">
<div className="main-header  header-sticky">
<div className="container-fluid">
<div className="row align-items-center">

<div className="col-xl-2 col-lg-2 col-md-1">
<div className="logo">
<NavLink exact to="/"><img src="assets/img/logo/quickLogo.png" className="web_logo" alt="" /></NavLink>
</div>
</div>
<div className="col-xl-10 col-lg-10 col-md-10">
<div className="menu-main d-flex align-items-center justify-content-end">

<div className="main-menu f-right d-none d-lg-block">
<nav>
<ul id="navigation">
<li className="active"><NavLink exact to="/">Home</NavLink></li>
<li><NavLink exact to="/About">About</NavLink></li>
<li><NavLink exact to="/Services">Services</NavLink></li>

<li><NavLink exact to="/Contact">Contact</NavLink></li>
{isLoggedIn && <li><NavLink exact to="/Users">Users</NavLink></li>}
{isLoggedIn && <li><NavLink exact to="/Orders">Orders</NavLink></li>}
{isLoggedIn && <li><NavLink exact to="/" onClick={()=>logout()}>Logout</NavLink></li>}
{!isLoggedIn && <li><NavLink exact to="/Login">Login</NavLink></li>}
</ul>
</nav>
</div>
{/* {!isLoggedIn && <div className="header-right-btn f-right d-none d-lg-block">
<a href="#" className="btn header-btn">+880.762.009.00 </a>
</div>} */}
</div>
</div>

<div className="col-12">
<div className="mobile_menu d-block d-lg-none">
<nav>
<ul id="navigation">
<li className="active"><NavLink exact to="/">Home</NavLink></li>
<li><NavLink exact to="/About">About</NavLink></li>
<li><NavLink exact to="/Services">Services</NavLink></li>

<li><NavLink exact to="/Contact">Contact</NavLink></li>
{isLoggedIn && <li><NavLink exact to="/Users">Users</NavLink></li>}
{isLoggedIn && <li><NavLink exact to="/Orders">Orders</NavLink></li>}
{isLoggedIn && <li><NavLink exact to="/" onClick={()=>logout()}>Logout</NavLink></li>}
{!isLoggedIn && <li><NavLink exact to="/Login">Login</NavLink></li>}
</ul>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>

</header>
    )
}

export default Header
