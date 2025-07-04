// Create your Footer component here
import {FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-contact-info">
        <h1 className="footer-heading">Connect With Me</h1>
        <p className="footer-contact-access">Email: fuad.issa@strathmore.edu</p>
        <p className="footer-contact-access">Mobile: (+254)759701833</p>
      </div>
      <div className="social-section">
        <h1>Social Links</h1>
        <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;