import './Footer.css';

function Footer() {
  return (
  <div>
    <div className="container">
      <div className="upper-half">
      </div>
      <div className="bottom-half">
        <div className="left-side">
          <h1>Ayush Startup<br/> Challenge</h1>
          <p>Ayush startup newsletter</p>
          <p>Get the latest in Ayurveda health<br/> research, industry updates, and<br/> more</p>
          <div className="newsletter">
            <input type="text" placeholder="Enter your email" className="text-field" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="right-side"><br/>
        <p className="toll-free-info">
    Toll Free Number: 1800 115 565<br />
    Working Hrs: 10:00 am- 5:30 pm
  </p><br /><br />
          <div className="links">
            <p>Blogs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms of Use</p><br />
            <p>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Use Startup India Logo</p><br />
            <p>Contact Us &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Request for Proposal</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
}

export default Footer;
