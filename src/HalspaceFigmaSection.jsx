import React, { useState } from 'react';

const HalspaceFigmaSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatDoYouDo: '',
    whatToSee: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx6AuxPEi2ZYKM_nnUF5ibubpdnaArb1SFwMkgXMu8tSwWFRQNdBB0gqdzL9os92wQk/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Quick frontend check: Has this specific browser already submitted?
    if (localStorage.getItem(`joined_${formData.email}`)) {
      setSubmitStatus('duplicate');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const dataToSubmit = {
      fullName: formData.fullName,
      email: formData.email,
      whatDoYouDo: formData.whatDoYouDo,
      whatToSee: formData.whatToSee
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(dataToSubmit)
      });

      // Store success in localStorage to prevent repeat submissions on this device
      localStorage.setItem(`joined_${formData.email}`, 'true');

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        whatDoYouDo: '',
        whatToSee: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {submitStatus === 'success' ? (
              <div className="success-state">
                <h2 className="success-title">You're on the list. Welcome to Halspace.</h2>
                <p className="success-subtitle">
                  We've saved your spot. You'll hear from us first when bookings open — check your inbox for a confirmation.
                  In the meantime, follow us on our socials to stay in the loop
                </p>
                <div className="share-icons">
                  <a href="#" className="share-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="share-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="#" className="share-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                  </a>
                </div>
              </div>
            ) : (
              <>
                <h2>Your space is waiting. So are we.</h2>
                <p className="subtitle">Halspace opens in Yaba, Lagos in June, 2026. Join the waitlist to get priority access.</p>

                <form className="waitlist-form" onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label>Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Johnathan Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group row">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john.doe@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group row">
                    <label>What do you do?</label>
                    <div className="select-wrapper">
                      <select
                        name="whatDoYouDo"
                        value={formData.whatDoYouDo}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="Private Office">Private Office</option>
                        <option value="Coworking Space">Coworking Space</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row col">
                    <label>What would you like to see in the space?</label>
                    <textarea
                      name="whatToSee"
                      rows="3"
                      placeholder="Share with us the things you'd love to see in the space"
                      value={formData.whatToSee}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-black btn-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Joining...' : 'Join the waitlist'}
                  </button>

                  {submitStatus === 'duplicate' && (
                    <p className="text-sm text-blue-600 mt-4 text-center font-medium">
                      You've already joined the waitlist! We have your info.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-sm text-red-600 mt-4 text-center font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </>
            )}
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

      {/* Countdown Section */}
      <CountdownTimer targetDate="2026-06-01T00:00:00" />

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

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <div key={interval} className="countdown-item">
        <span className="countdown-value">{timeLeft[interval].toString().padStart(2, '0')}</span>
        <span className="countdown-label">{interval.toUpperCase()}</span>
      </div>
    );

    // Add colon between items (but not after the last one)
    if (index < Object.keys(timeLeft).length - 1) {
      timerComponents.push(
        <div key={`colon-${index}`} className="countdown-separator">:</div>
      );
    }
  });

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-header">
          <span className="eyebrow">Launching Soon</span>
          <h2>The future of workspace arrives in June 2026.</h2>
        </div>
        <div className="countdown-timer">
          {timerComponents.length ? timerComponents : <span>Launching now!</span>}
        </div>
        <div className="countdown-footer">
          <p>Join the waitlist to be part of the first cohort.</p>
          <button className="btn-black-outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Join the list</button>
        </div>
      </div>
    </section>
  );
};

export default HalspaceFigmaSection;
