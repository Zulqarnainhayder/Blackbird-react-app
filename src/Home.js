import {
  Link
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Typed from 'react-typed';

function Home() {

  const [showNav, setShowNav] = useState(false)

  // FUNCTIONS

  const handleHam = () => {
    const navbarShow = showNav === true ? false : true
    setShowNav(navbarShow)
  }

  // Typing Carousel Example
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);

    window.onload = function () {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid transparent }";
      document.body.appendChild(css);
    };
  };

  return (
    <div className="App">
      <header>
        <nav className="container nav animate__animated animate__fadeInLeft">
          <a href="./index.html">
            <img
              src="./assets/techgoat-high-resolution-logo-color-on-transparent-background.png"
              alt="myteam logo"
              className="logo"
              style={{ height: "96px" }}
              aria-label="my team"
            />
          </a>
          <ul>
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <a href="#services">Services</a>
            </li>
            <li className="link">
              <a href="#about">About</a>
            </li>
            <li>
              <a className="btn btn--primary--lt">
                <Link to="/contact">Contact Us</Link>
              </a>
            </li>
          </ul>

          <img
            src="./assets/icon-hamburger.svg"
            alt="hamburger menu icon"
            className="hamburger"
            onClick={handleHam}
          />
        </nav>
        {showNav && <div className="mobile-nav">
          <ul>
            <li>
              <a><Link to="/">Home</Link></a>
            </li>
            <li className="link">
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a className="btn btn--primary--lt">
                <Link to="/contact">Contact Us</Link>
              </a>
            </li>
          </ul>
        </div>}

        <section className="hero hero--home animate__animated animate__fadeInLeft">
          <div className="container hero--home__text hero__text">
            <h1>
              We Engineer
              <br/>
              {/* <span
                style={{ display: "block" }}
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "AI/ML", "Blockchain", "AR/VR"]'
              ></span> */}
              <Typed
                    strings={["AI/ML", "Blockchain", "AR/VR"]}
                    typeSpeed={80}
                    backSpeed={80}
                    showCursor={false}
                    loop
                />
                <br />
              Solutions
            </h1>

            <div>
              <span></span>
              <p className="sm--tall" style={{ paddingTop: "2rem" }}>
                We design and develop your vision. Get a comprehensive product
                development experience from design to delivery with reduced
                development costs.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main id="services" className="home animate__animated animate__fadeInRight">
        <section className="home__mainContent">
          <div className="container container--narrow">
            <div className="home__mainContent__heading" style={{ textAlign: "initial" }}>
              <span></span>
              <h2>We build & manage services like no one else.</h2>
            </div>

            <div className="home__mainContent__features">
              <div className="home__mainContent__features__feature">
                <img
                  src="./assets/machine-learning-01-svgrepo-com.svg"
                  style={{ height: "72px", fill: "rgb(217, 224, 230)" }}
                  alt="person icon"
                />
                <div className="home__mainContent__features__feature__text">
                  <h3>Artifical Intelligence Solutions</h3>
                  <p className="sm">
                    We use Machine Learning to achieve robotic process automation
                    and data analytics to make smart and timely decisions.
                  </p>
                </div>
              </div>
              <div className="home__mainContent__features__feature">
                <img
                  src="./assets/virtual-reality-svgrepo-com.svg"
                  style={{
                    height: "72px",
                    backgroundColor: "#79c8c7 stroke=none",
                    fill: "aliceblue",
                  }}
                  alt="cog icon"
                />
                <div className="home__mainContent__features__feature__text">
                  <h3>Augmented and Virtual Reality</h3>
                  <p className="sm">
                    We offer companies with innovative AR solutions with advanced
                    marketing techniques and campaigns
                  </p>
                </div>
              </div>
              <div className="home__mainContent__features__feature">
                <img
                  src="./assets/blockchain-svgrepo-com.svg"
                  style={{ height: "72px", backgroundColor: "#79c8c7 stroke=none" }}
                  alt="chart icon"
                />
                <div className="home__mainContent__features__feature__text">
                  <h3>Blockchain Technologies</h3>
                  <p className="sm">
                    Our Blockchain solutions is digitalizing and integrating
                    supply chains by connecting business operations and finance at
                    the ecosystem level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <header id="about">
        <section className="hero hero--about">
          <div className="container container--narrow hero--about__text hero__text">
            <h1 className="lg">About</h1>

            <div>
              <span></span>
              <p className="sm--tall">
                TechGoat is driven to create lasting, valuable solutions for our
                clients, utilizing the latest in Artificial Intelligence, AR/VR,
                and Blockchain technologies. We are committed to develop
                innovative software solutions for leading enterprises in the
                world, helping them grow their businesses using latest technology
                solutions.
              </p>
            </div>
          </div>
        </section>
      </header>

      <footer className="footer">
        <section className="cta">
          <div className="container container--narrow">
            <h2>Ready to get started?</h2>
            <a href="./contact.html" className="btn btn--primary--dk">
              <span> contact us </span>
            </a>
          </div>
        </section>
        <section className="footer__footer">
          <div className="container">
            <div className="footer__nav">
              <img
                src="./assets/techgoat-high-resolution-logo-color-on-transparent-background.png"
                alt="myteam logo"
                className="logo"
                style={{ height: "96px", marginBottom: "16px" }}
                aria-label="my team"
              />
              <p className="sm">
                987 Hillcrest Lane
                <br />
                Irvine, CA
                <br />
                California 92714
                <br />
                Call Us : 949-833-7432
              </p>
            </div>

            <div className="footer__info">
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com"
                  ><img
                      src="./assets/icon-facebook.svg"
                      alt="facebook icon"
                      aria-label="facebook link"
                    /></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com"
                  ><img
                      src="./assets/icon-pinterest.svg"
                      alt="pinterest icon"
                      aria-label="pinterest link"
                    /></a>
                </li>
                <li>
                  <a href="https://www.twitter.com"
                  ><img
                      src="./assets/icon-twitter.svg"
                      alt="twitter icon"
                      aria-label="twitter link"
                    /></a>
                </li>
              </ul>
              <p className="sm copyright">Copyright 2023. All Rights Reserved</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Home;
