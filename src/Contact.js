import {
    Link
} from "react-router-dom";
// import React, { useState } from "react";

function Contact() {
    // const [showNav, setShowNav] = useState(false)

    // // FUNCTIONS

    // const handleHam = () => {
    //     const navbarShow = showNav === true ? false : true
    //     setShowNav(navbarShow)
    // }
    return (
        <div>
            <header>
                <nav className="container nav">
                    <a>
                        <img
                            src="./assets/techgoat-high-resolution-logo-color-on-transparent-background.png"
                            alt="myteam logo"
                            className="logo"
                            style={{ height: "96px" }}
                            aria-label="my team"
                        />
                    </a>
                    <Link to="/" className="hide-on-mobile">Home</Link>
                    <ul>
                        <li className="link">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a className="btn btn--primary--lt">
                                <Link to="/contact">Contact Us</Link>
                            </a>
                        </li>
                    </ul>

                    {/* <img
                        src="./assets/icon-hamburger.svg"
                        alt="hamburger menu icon"
                        className="hamburger"
                        onClick={handleHam}
                    /> */}
                </nav>
                {/* {showNav && <div className="mobile-nav mobile-nav-contact">
                    <ul>
                        <li>
                            <a><Link to="/">Home</Link></a>
                        </li>
                        <li>
                            <a className="btn btn--primary--lt">
                                <Link to="/contact">Contact Us</Link></a>
                        </li>
                    </ul>
                </div>} */}
                <main className="contact">
                    <div className="container">
                        <div className="contact__info">
                            <h1>Contact</h1>
                            <h2>Ask us about</h2>

                            <div className="contact__info__container">
                                <div className="contact__info__info">
                                    <img
                                        src="./assets/machine-learning-01-svgrepo-com.svg"
                                        style={{ height: "60px", fill: "rgb(217, 224, 230)" }}
                                        alt="person icon"
                                    />
                                    <p className="lg">The quality of our talent network</p>
                                </div>
                                <div className="contact__info__info">
                                    <img
                                        src="./assets/virtual-reality-svgrepo-com.svg"
                                        style={{
                                            height: "60px",
                                            backgroundColor: "#79c8c7 stroke=none",
                                            fill: "aliceblue"
                                        }}
                                        alt="cog icon"
                                    />
                                    <p className="lg">Usage & implementation of our software</p>
                                </div>
                                <div className="contact__info__info">
                                    <img
                                        src="./assets/blockchain-svgrepo-com.svg"
                                        style={{ height: "60px", backgroundColor: "#79c8c7 stroke=none" }}
                                        alt="chart icon"
                                    />
                                    <p className="lg">How we help drive innovation</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact__form" autocomplete="off" novalidate>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="name"
                                autocomplete="off"
                            />
                            <small>this field is required</small>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email address"
                                autocomplete="off"
                            />
                            <small>this field is required</small>
                            <input
                                type="text"
                                name="company"
                                placeholder="company name"
                                autocomplete="off"
                            />
                            <input
                                type="text"
                                name="title"
                                placeholder="title"
                                autocomplete="off"
                            />
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                            <small>this field is required</small>
                            <button type="submit" className="btn btn--secondary">
                                <span> Submit</span>
                            </button>
                            <small>thank you for your message!</small>
                        </form>
                    </div>
                </main>
            </header>

            <footer className="footer">
                <section className="footer__footer">
                    <div className="container">
                        <div className="footer__nav">
                            <a href="./index.html">
                                <img
                                    src="./assets/techgoat-high-resolution-logo-color-on-transparent-background.png"
                                    alt="myteam logo"
                                    style={{ height: "96x !important", marginBottom: "16px" }}
                                    aria-label="my team"
                                />
                            </a>
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

export default Contact;
