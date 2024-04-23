import React, { useEffect } from "react";
import CountUp from 'react-countup';
import Slide1 from "../../components/SlideBanner/Slide1/Slide1";
import "./About.css";
function About() {
  useEffect(() => {});
  return (
    <>
      <Slide1 />
      <section className="container about-section">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="content-column lg:w-6/12 md:w-full sm:w-full order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">About Css3transition</span>
                  <h2>We are Creative Tech Enthusiast working since 2015</h2>
                </div>
                <div className="text">
                  I am Rahul Yaduvanshi works at Css3 Transition since last 3
                  years. We are here to provide touch notch solution for your
                  website or web application that helps you to make your website
                  look attractive &amp; efficient in handling by creating useful
                  plugins that's you need.
                </div>
                <div className="text">
                  We are here to serve you next level tutorial that currently in
                  trend to match you with your expertise. Css3 transition is a
                  learning website. where you can find many good quality content
                  related to web development and tutorials about plugins. here
                  we are using html, html5, css, css3, jquery &amp; javascript
                  along with inspirational UI design layout by professionals by
                  using Photoshop and adobe allustrator.
                </div>
                <div className="btn-box">
                  <a href="#" className="btn-style-one bg-cyan-600 rounded-2xl">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column lg:w-6/12 md:w-full sm:w-full">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Spack Digi</h2>
                  <span>Redefining Markets,Digitaly</span>
                </div>
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      title="Rahul Kumar Yadav"
                      src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                      alt=""
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counting */}
      <section>
        <div
          className="container-fluid py-10"
          style={{ backgroundImage: "url('src/assets/bg/Map.png')" }}
        >
          <h1 className="text-center text-4xl font-bold pb-10">
            Our Customers are happy with Spack
          </h1>
          <div className="container block md:flex md:items-center">
            <div className="w-6/12 max-w-full px-3 text-center flex-0 lg:w-3/12">
              <div className="py-4 border border-dashed rounded-lg border-slate-400">
                <CountUp start={98765} end={2061544832} duration={5.5} className="text-4xl" prefix="$" />
                <h6 className="relative mb-0  font-bold text-2xl z-1 ">
                  Earnings
                </h6>
                <h4 className="font-bold dark:text-white">
                  <span className="text-3.5"> </span>
                  <span id="state1" countto="23980"></span>
                  <span className="">Receive Daily Ordered</span>
                </h4>
              </div>
            </div>

            <div className="w-6/12 max-w-full px-3 text-center flex-0 lg:w-3/12">
              <div className="py-4 border border-dashed rounded-lg border-slate-400">
                <CountUp end={9328} className="text-4xl"/>
                <h6 className="relative mb-0 font-bold text-2xl z-1 ">
                  Customers
                </h6>
                <h4 className="font-bold dark:text-white">
                  <span className="text-4xl"></span>
                  <span id="state2" countto="2400"></span>
                  <span className="">Worldwide Customers</span>
                </h4>
              </div>
            </div>

            <div className="w-6/12 max-w-full px-3 mt-6 text-center flex-0 lg:w-3/12 lg:mt-0">
              <div className="py-4 border border-dashed rounded-lg border-slate-400">
                <CountUp end={80} className="text-4xl" />
                <h6 className="relative mb-0 font-bold text-2xl z-1 ">
                  Avg. Value
                </h6>
                <h4 className="font-bold dark:text-white">
                  <span className="text-3.5"> </span>
                  <span id="state3" countto="48"></span>
                  <span className="">Worldwide Distributors</span>
                </h4>
              </div>
            </div>

            <div className="w-6/12 max-w-full px-3 mt-6 text-center flex-0 lg:w-3/12 lg:mt-0">
              <div className="py-4 border border-dashed rounded-lg border-slate-400">
                <CountUp end={98} suffix="%" className="text-4xl" />
                <h6 className="relative mb-0 font-bold text-2xl z-1 ">
                  Refund Rate
                </h6>
                <h4 className="font-bold dark:text-white">
                  <span id="state4" countto="4"></span>
                  <span className="text-3.5"> </span>
                  <span className="">Overall Top Brands</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
