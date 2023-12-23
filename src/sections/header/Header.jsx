import { BsCart2, BsSearch } from "react-icons/bs";
import Hamburger from "hamburger-react";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div
        style={{
          borderBottom: open ? "none" : "1px black solid",
        }}
      >
        {!open && (
          <div className="cart mobile">
            <BsCart2 />
          </div>
        )}
        <span
          // className="mobile"
          style={{
            color: open ? "#F5F4F0" : "black",
            fontSize: open ? "2rem" : "1.5rem",
            paddingLeft: open ? "1rem" : ".5rem",
            paddingTop: open ? "1rem" : ".5rem",
          }}
        >
          ShopIn.
        </span>

        <nav className="desktop">
          <a href="">About us</a>
          <a href="">Our products</a>
          <a href="">New items</a>
          <a href="">Contact</a>
        </nav>

        <div className="desktop">
          <div>
            <BsSearch />
            <input type="text" name="" id="" placeholder="Search" />
          </div>
          <div className="cart">
            <BsCart2 />
          </div>
        </div>

        <button className="hamburger">
          <Hamburger
            size={20}
            hideOutline={false}
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true);
              } else {
                setOpen(false);
              }
            }}
          />
        </button>
      </div>

      <nav
        className="mobile"
        style={{ transform: open ? "translateY(0)" : "translateY(100%)" }}
      >
        <a href="">About us</a>
        <a href="">Our products</a>
        <a href="">New items</a>
        <a href="">Contact</a>
      </nav>

      <div>
        <div className="desktop">
          <img className="desktop" src="/images/model.jpg" alt="" />
          <div>
            <span>Shop Now</span>
          </div>
        </div>

        <div>
          <div>
            <h1>Each Piece is Designed to Move with You</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum risus ac neque feugiat, vel tincidunt nulla
                cursus. Quisque at elit et urna bibendum posuere. Vivamus
                euismod.
              </p>
              <button className="mobile">Shop Now</button>
            </div>
          </div>
          <img src="/images/model.jpg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
