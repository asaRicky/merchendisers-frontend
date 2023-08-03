import React from "react";

const LandingPage = () => {
    return (
      <div>
        <header>
          <div className="container">
            <div className="row">
              <a className="logo" href="/" title="GPS Tracking Software" alt="GPS Tracking Software">
                <picture>
                  <source loading="lazy" srcSet="/assets/images/logo.webp" type="image/webp" width="172" height="50" />
                  <source loading="lazy" srcSet="/assets/images/logo.png" type="image/png" width="172" height="50" />
                  <img loading="lazy" src="/assets/images/logo.png" alt="MerchTracker" width="172" height="50" />
                </picture>
              </a>
              <nav>
              <div id="navtab" className="mobnav"></div>
              <ul id="mobsnow">
                <li>
                  <a href="/" title="Home">Home</a>
                </li>
                <li>
                  <a href="/about" title="About">About</a>
                </li>
                <li>
                  <a href="/contact" title="Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div> </header>
      <section className="banner-area">
      <div className="banner-content">
        <h1>White Label Merch Management Software</h1>
        <p>
          One software that covers your merch operations entirely. Expect a lot more
          beyond tracking with our advanced Merch Monitoring Solutions.
        </p>
        <a href="#" className="primaryBtn">Schedule a Demo</a>
      </div>
    </section>
      <section className="videoRow">
        {/* Rest of the videoRow content */}
      </section>
      <section className="tracking-solution">
      <div className="container">
        <div className="headingRow">
          <h4 className="text-gradient">What MerchTracker Offers</h4>
          <h2>Beyond Merch Management Solutions</h2>
        </div>
        <div className="row">
          <div className="tracking-left">
            <div className="shadow-box">
              <h3>Video Telematics Solutions</h3>
              {/* Rest of the content */}
            </div>
          </div>
          <div className="tracking-right">
            {/* Content for the right side */}
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

              export default LandingPage;