import React, {useState} from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 4
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 4
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 3
	}
  };

function Home() {
    const [ banks, setBanks ] = useState(['https://logos-download.com/wp-content/uploads/2016/06/Bank_of_Baroda_logo.png','https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Bank_of_India_logo.svg/1200px-Bank_of_India_logo.svg.png','https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1280px-State_Bank_of_India_logo.svg.png','https://cdn.freelogovectors.net/wp-content/uploads/2019/02/indian-bank-logo.png','https://logonoid.com/images/central-bank-of-india-logo.png']);

    return (
        <main>

<div className="slider-area slider-height" data-background="assets/img/hero/h1_hero.jpg">
<div className="slider-active">

<div className="single-slider">
<div className="slider-cap-wrapper">
<div className="hero__caption">
<p data-animation="fadeInLeft" data-delay=".2s">Achieve your financial goal</p>
<h1 data-animation="fadeInLeft" data-delay=".5s">Small Business Loans For Daily Expenses.</h1>

{/* <a href="apply.html" className="btn hero-btn" data-animation="fadeInLeft" data-delay=".8s">Apply for Loan</a> */}
</div>
<div className="hero__img">
<img src="assets/img/hero/hero_img.jpg" alt="" />
</div>
</div>
</div>

</div>

<div className="slider-footer section-bg d-none d-sm-block">
<div className="footer-wrapper">

<div className="single-caption">
<div className="single-img">
<img src="assets/img/hero/hero_footer.png" alt="" />
</div>
</div>

<div className="single-caption">
<div className="caption-icon">
<span className="flaticon-clock"></span>
</div>
<div className="caption">
<p>Quick & Easy Loan</p>
<p>Approvals</p>
</div>
</div>

<div className="single-caption">
<div className="caption-icon">
<span className="flaticon-like"></span>
</div>
<div className="caption">
<p>Quick & Easy Loan</p>
<p>Approvals</p>
</div>
</div>

<div className="single-caption">
<div className="caption-icon">
<span className="flaticon-money"></span>
</div>
<div className="caption">
<p>Quick & Easy Loan</p>
<p>Approvals</p>
</div>
</div>
</div>
</div>

</div>


<div className="about-low-area section-padding2">
<div className="container">
<div className="row">
<div className="col-lg-6 col-md-12">
<div className="about-caption mb-50">

<div className="section-tittle mb-35">
<span>About Our Company</span>
<h2>Building a Brighter financial Future & Good Support.</h2>
</div>
<p>QuickLoans personal loan provided by the NBFC, incorporated under the Companies Act, 1956, which provides advanced salary for Indian citizens with monthly income, you can be a person who gets a salary, or a self-business man who has a steady income resource.</p>
<p>Get an instant personal loan on the QuickLoans app with an amount ranging from Rs. 50,000 to 5 Lakh, and we will transfer the cash to your bank account within 10 minutes.</p>
{/* <a href="apply.html" className="btn">Apply for Loan</a> */}
</div>
</div>
<div className="col-lg-6 col-md-12">

<div className="about-img ">
 <div className="about-font-img d-none d-lg-block">
<img src="assets/img/gallery/about2.png" alt=""/>
</div>
<div className="about-back-img ">
<img src="assets/img/gallery/about1.png" alt="" />
</div>
</div>
</div>
</div>
</div>
</div>


<div className="services-area pt-150 pb-150" data-background="assets/img/gallery/section_bg02.jpg">
<div className="container">
<div className="row justify-content-center">
<div className="col-lg-6 col-md-10">

<div className="section-tittle text-center mb-80">
<span>Services that we are providing</span>
<h2>High Performance Services For All Industries.</h2>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-work"></span>
</div>
<div className="cat-cap">
<h5><a href="services.html">Business Loan</a></h5>
<p>Get Small Business Loans credited to your Bank in just 48 hours. Apply Online. Draw Cash Instantly. Minimal Documentation. No Collateral.</p>
</div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-loan"></span>
</div>
<div className="cat-cap">
<h5><a href="services.html">Car Loans</a></h5>
<p>Car Loan – Compare & Apply Car Loan Online. Car Loan – With interest rates as low as 8.80% p.a. and repayment tenure of up to 8 years</p>
</div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-loan-1"></span>
</div>
<div className="cat-cap">
<h5><a href="services.html">Educations Loans</a></h5>
<p>Apply for an Education Loan Online for further studies in India or abroad. Birla offers Student Loans up-to 25 Lacs with interest rates starting @11.25%, …</p>
</div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-like"></span>
</div>
<div className="cat-cap">
<h5><a href="services.html">Personals Loan</a></h5>
<p>A standard term loan is a fixed loan amount that you borrow as a lumpsum. It is availed at a fixed rate of interest and must be repaid over a specific tenor.</p>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="support-company-area section-padding3 fix">
<div className="container">
<div className="row align-items-center">
<div className="col-xl-6 col-lg-6">
<div className="support-location-img mb-50">
<img src="assets/img/gallery/single2.jpg" alt="" />
<div className="support-img-cap">
<span>Since 1992</span>
</div>
</div>
</div>
<div className="col-xl-6 col-lg-6">
<div className="right-caption">

<div className="section-tittle">
<span>Why Choose Our Company</span>
<h2>We Promise Sustainable Future For You.</h2>
</div>
<div className="support-caption">
{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p> */}
<div className="select-suport-items">
<label className="single-items">Easy Application
<input type="checkbox" checked="checked active" />
<span className="checkmark"></span>
</label>
<label className="single-items">Instant Approval
<input type="checkbox" checked="checked active" />
<span className="checkmark"></span>
</label>
<label className="single-items">Instant Custom Offer
<input type="checkbox" checked="checked active" />
<span className="checkmark"></span>
</label>
<label className="single-items">Safe & Secure
<input type="checkbox" checked="checked active" />
<span className="checkmark"></span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<Carousel
	  ssr
	  partialVisbile
	  deviceType={'mobile'}
      itemClass="image-item"
      responsive={responsive}
    >
      {banks.map(image => {
        return (
          <div className="">
			  <img
            draggable={false}
			className="img-fluid"
			style={{width:'100%'}}
            src={image}
          />
		  </div>
        );
      })}
    </Carousel>

<div className="testimonial-area t-bg testimonial-padding">
<div className="container ">
<div className="row d-flex justify-content-center">
<div className="col-xl-11 col-lg-11 col-md-9">
<div className="h1-testimonial-active">

<div className="single-testimonial text-center">

<div className="testimonial-caption ">
<div className="testimonial-top-cap">
<img src="assets/img/gallery/testimonial.png" alt="" />
<p>I had a good experience with Insight Loan Services. I am thankful to insight for the help you guys gave me. My loan was easy and fast. thank you Insigtht</p>
</div>

<div className="testimonial-founder d-flex align-items-center justify-content-center">
<div className="founder-img">
<img src="assets/img/testmonial/Homepage_testi.png" alt="" />
</div>
<div className="founder-text">
<span>Jiya Arora</span>
<p>Education Loan</p>
</div>
</div>
</div>
</div>

<div className="single-testimonial text-center">

<div className="testimonial-caption ">
<div className="testimonial-top-cap">
<img src="assets/img/gallery/testimonial.png" alt="" />
<p>I had a good experience with Insight Loan Services. I am thankful to insight for the help you guys gave me. My loan was easy and fast. thank you Insigtht</p>
</div>

<div className="testimonial-founder d-flex align-items-center justify-content-center">
<div className="founder-img">
<img src="assets/img/testmonial/Homepage_testi.png" alt="" />
</div>
<div className="founder-text">
<span>Neha Patel</span>
<p>Education Loan</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


</main>
    )
}

export default Home
