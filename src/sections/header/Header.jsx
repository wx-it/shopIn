import { BsCart2 } from "react-icons/bs";
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
          <div className="cart">
            <BsCart2 />
          </div>
        )}
        <span
          style={{
            color: open ? "white" : "black",
            fontSize: open ? "2rem" : "1.5rem",
            paddingLeft: open ? "1rem" : ".5rem",
            paddingTop: open ? "1rem" : ".5rem"
          }}
        >
          ShopIn.
        </span>
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

      <nav style={{ transform: open ? "translateY(0)" : "translateY(100%)" }}>
        <a href="">About us</a>
        <a href="">Our products</a>
        <a href="">New items</a>
        <a href="">Contact</a>
      </nav>

      <div>
        <div>
          <h1>Each Piece is Designed to Move with You</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum fermentum risus ac neque feugiat, vel tincidunt nulla
              cursus. Quisque at elit et urna bibendum posuere. Vivamus euismod.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
        <img src="/images/model.jpg" alt="" />
      </div>
    </header>
  );
};

export default Header;
