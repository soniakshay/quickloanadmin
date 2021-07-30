import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer>

<div className="footer-area">
<div className="container">
<div className="footer-top footer-padding">
<div className="row justify-content-between">
<div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
<div className="single-footer-caption mb-50">
<div className="single-footer-caption mb-30">

<div className="footer-logo">
<a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
</div>
<div className="footer-pera">
<p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing</p>
<p>Download App</p>
<a href="https://play.google.com/store/apps/details?id=vdoxon.expo.quickloan" target="_blank" ><img src="https://cdn2.iconfinder.com/data/icons/social-media-8/512/playstore.png" height="90" style={{cursor:'pointer'}} /></a>
</div>
 </div>
</div>
</div>
<div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
<div className="single-footer-caption mb-50">
<div className="footer-tittle">
<h4>Quick Link</h4>
<ul>
<li><NavLink exact to="/About">About</NavLink></li>
{/* <li><a href="#">Offers & Discounts</a></li> */}
{/* <li><a href="#">Get Coupon</a></li> */}
<li><NavLink exact to="/Contact"> Contact Us</NavLink></li>
</ul>
</div>
</div>
</div>
<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
<div className="single-footer-caption mb-50">
<div className="footer-tittle">
<h4>Support</h4>
<ul>
{/* <li><a href="#">Frequently Asked Questions</a></li> */}
<li><NavLink exact to="/termsAndCondition">Terms & Conditions</NavLink></li>
<li><NavLink exact to="/privacyPolicy"> Privacy Policy</NavLink></li>
{/* <li><a href="#">Report a Payment Issue</a></li> */}
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="footer-bottom">
<div className="row d-flex justify-content-between align-items-center">
<div className="col-xl-9 col-lg-8">
<div className="footer-copy-right">
<p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
</p>
</div>
</div>
<div className="col-xl-3 col-lg-4">

<div className="footer-social f-right">
<a href="http://quickloans.rowalabhai.in/contact-us/#"><i className="fab fa-twitter"></i></a>
<a href="http://quickloans.rowalabhai.in/contact-us/#"><i className="fab fa-facebook-f"></i></a>
<a href="http://quickloans.rowalabhai.in/contact-us/#"><i className="fas fa-globe"></i></a>
<a href="http://quickloans.rowalabhai.in/contact-us/#"><i className="fab fa-instagram"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>

</footer>
    )
}

export default Footer
