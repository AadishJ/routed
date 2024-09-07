import "./Footer.css";

function Footer() {
	return (
		<div className="container">
			<div className="bottom-half">
				<div className="left-side">
					<h1>Ayush Startup Challenge</h1>
					<br />
					<div className="links">
						<p>Blogs</p>
						<br />
						<p>Privacy Policy</p>
						<br />
						<p>Contact Us</p>
						<br />
					</div>
				</div>
				<div className="right-side">
					<p className="toll-free-info">
						Toll Free Number: 1800 115 565
						<br />
						Working Hrs: 10:00 am- 5:30 pm
					</p><br/>
					<div className="links">
						<p>Terms of Use</p>
						<br />
						<p>Use Startup India Logo</p>
						<br />
						<p>Request for Proposal</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
