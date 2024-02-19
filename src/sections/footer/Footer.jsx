import "./footer.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h3>ShopIn.</h3>
          <div className="icons">
            <FaInstagram className="icon fa-icon" />
            <FaFacebook className="icon fa-icon" />
            <FaYoutube className="icon fa-icon" />
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div>
            <a href="">About us</a>
            <a href="">Our products</a>
            <a href="">New items</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
