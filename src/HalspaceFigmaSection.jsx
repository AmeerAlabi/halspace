import React from 'react';

const HalspaceFigmaSection = () => {
  return (
    <div className="halspace-design">
      {/* Section 1: Hero / Split Screen */}
      <section className="hero-split">
        <div className="hero-image-side">
          <header className="logo">
            <img src="/assets/hallogo.png" alt="Halspace Logo" className="header-logo" />
          </header>
          <div className="hero-content">
            <h1>Made for work, Built for businesses and individuals</h1>
            <p>From freelancers to Fortune 500s, discover flexible offices that scale with you—anytime and anywhere you work.</p>
            <button className="btn-outline">Learn more</button>
          </div>
        </div>
        <div className="hero-form-side">
          <div className="form-container">
            <h2>Your space is waiting. So are we.</h2>
            <p className="subtitle">Halspace opens in Yaba, Lagos in March, 2025. Join the waitlist to get priority access.</p>

            <form className="waitlist-form">
              <div className="form-group row">
                <label>Full name</label>
                <input type="text" placeholder="Johnathan Doe" />
              </div>
              <div className="form-group row">
                <label>Email address</label>
                <input type="email" placeholder="john.doe@gmail.com" />
              </div>
              <div className="form-group row">
                <label>What do you  do?</label>
                <div className="select-wrapper">
                  <select>
                    <option>Select an option</option>
                    <option>Private Office</option>
                    <option>Coworking Space</option>
                  </select>
                </div>
              </div>
              <div className="form-group row col">
                <label>What would you like to see in the space?</label>
                <textarea rows="3" placeholder="Share with us the things you'd love to see in the space"></textarea>
              </div>
              <button type="button" className="btn-black btn-full">Join the waitlist</button>
            </form>
          </div>
        </div>
      </section>

      {/* Section 2: Workspaces */}
      <section className="workspaces">
        <div className="workspaces-header">
          <span className="eyebrow">Find Your Space</span>
          <h2>The right workspace for every stage of work.</h2>
        </div>
        <div className="cards-grid">
          <div className="card">
            <img src="/assets/hal1.png" alt="Private office" />
            <div className="card-body">
              <h3>Private office</h3>
              <p>Unlock turnkey, move-in-ready space designed to scale and flex to the needs of businesses of all sizes.</p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/hal2.png" alt="Workspace for the day" />
            <div className="card-body">
              <h3>Workspace for the day</h3>
              <p>Book a desk for the day or meeting room by the hour in a convenient location near you.</p>
            </div>
          </div>
          <div className="card">
            <img src="/assets/hal3.png" alt="Event Spaces" />
            <div className="card-body">
              <h3>Event Spaces</h3>
              <p>Book a desk for the day or meeting room by the hour in a convenient location near you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Salaam Cafe */}
      <section className="cafe">
        <div className="cafe-image-container">
          <img src="/assets/salam.png" alt="Salaam Cafe" />
        </div>
        <div className="cafe-content">
          <h3>Salaam Cafe</h3>
          <p>Salaam Cafe is more than a place to eat. It is where conversations begin, ideas take shape, and people come together in a space built on warmth and intentional connection. Whether you are taking a quiet break or sharing moments with others, every seat is designed to feel welcoming and meaningful.</p>
        </div>
      </section>

      {/* Section 4: Stats */}
      <section className="stats-split">
        <div className="stats-text">
          <h2>This isn't just a workspace.<br />It's infrastructure for your<br />best work.</h2>
          <br />
          <p>Halspace built its space with one belief: the environment you work in shapes the results you produce. Every corner, corridor, and common area has been intentionally designed to energize focus, spark collaboration, and signal seriousness.</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stat-icon">
              <rect x="5" y="4" width="14" height="16" stroke="black" strokeWidth="2" rx="1" />
              <rect x="9" y="8" width="2" height="2" fill="black" />
              <rect x="13" y="8" width="2" height="2" fill="black" />
              <rect x="9" y="12" width="2" height="2" fill="black" />
              <rect x="13" y="12" width="2" height="2" fill="black" />
              <path d="M10 20V16H14V20" stroke="black" strokeWidth="2" />
            </svg>
            <h3>5,674 sq ft</h3>
            <p>of curated workspace</p>
          </div>
          <div className="stat-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stat-icon">
              <rect x="5" y="4" width="14" height="16" stroke="black" strokeWidth="2" rx="1" />
              <rect x="9" y="8" width="2" height="2" fill="black" />
              <rect x="13" y="8" width="2" height="2" fill="black" />
              <rect x="9" y="12" width="2" height="2" fill="black" />
              <rect x="13" y="12" width="2" height="2" fill="black" />
              <path d="M10 20V16H14V20" stroke="black" strokeWidth="2" />
            </svg>
            <h3>4</h3>
            <p>floors of premium amenities</p>
          </div>
          <div className="stat-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stat-icon">
              <rect x="5" y="4" width="14" height="16" stroke="black" strokeWidth="2" rx="1" />
              <rect x="9" y="8" width="2" height="2" fill="black" />
              <rect x="13" y="8" width="2" height="2" fill="black" />
              <rect x="9" y="12" width="2" height="2" fill="black" />
              <rect x="13" y="12" width="2" height="2" fill="black" />
              <path d="M10 20V16H14V20" stroke="black" strokeWidth="2" />
            </svg>
            <h3>5,674 sq ft</h3>
            <p>of curated workspace</p>
          </div>
          <div className="stat-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stat-icon">
              <rect x="5" y="4" width="14" height="16" stroke="black" strokeWidth="2" rx="1" />
              <rect x="9" y="8" width="2" height="2" fill="black" />
              <rect x="13" y="8" width="2" height="2" fill="black" />
              <rect x="9" y="12" width="2" height="2" fill="black" />
              <rect x="13" y="12" width="2" height="2" fill="black" />
              <path d="M10 20V16H14V20" stroke="black" strokeWidth="2" />
            </svg>
            <h3>4</h3>
            <p>floors of premium amenities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-columns">
            <div className="footer-col">
              <h4>COMPANY</h4>
              <a href="#">About us</a>
              <a href="#">Inclusion</a>
              <a href="#">Newsroom</a>
              <a href="#">Blog</a>
              <a href="#">Trust Center</a>
            </div>
            <div className="footer-col">
              <h4>PARTNERSHIP</h4>
              <a href="#">Landlords</a>
              <a href="#">Event Planners</a>
              <a href="#">Investors</a>
              <a href="#">Blog</a>
              <a href="#">Press Center</a>
            </div>
            <div className="footer-col">
              <h4>SUPPORT</h4>
              <a href="#">Contact us</a>
              <a href="#">Member Login</a>
              <a href="#">Help Center</a>
              <a href="#">Terms</a>
            </div>
            <div className="footer-col social-col">
              <div className="social-icons">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </div>
            </div>
          </div>
          <div className="footer-huge-logo">
            <img src="/assets/fotlog.png" alt="Halspace Footer Logo" className="footer-logo-img" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HalspaceFigmaSection;
