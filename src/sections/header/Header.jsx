import { BsCart2, BsSearch } from "react-icons/bs";
import Hamburger from "hamburger-react";
import "./header.css";
import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
 import gsap from "gsap";
 import { ScrollTrigger } from "gsap/ScrollTrigger";
 gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
   useLayoutEffect(() => {
     const el = ref.current;
     gsap.fromTo(
       el,
       { y: 20 },
       {
         y: 0,
         duration: 1,
         markers: true,
         start: "top bottom",
         end: "top 400px",
         scrollTrigger: {
           trigger: el,
         },
       }
     );
   }, []);

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
          <img className="desktop" src="/images/herosection.jpg" alt="" />
          <motion.div>
            <motion.span>Shop Now</motion.span>
          </motion.div>
        </div>

        <div>
          <div>
            <div className="title">
              <div>
                <motion.h1
                ref={ref} 
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, ease: "linear" }}
                >
                  Each Piece is
                </motion.h1>
              </div>
              <div>
                <motion.h1
                ref={ref} 
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, ease: "linear" }}
                >
                  Designed to Move
                </motion.h1>
              </div>
              <div>
                <motion.h1
                ref={ref} 
                  initial={{ y: 60 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.5, ease: "linear" }}
                >
                  with You
                </motion.h1>
              </div>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "linear" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum fermentum risus ac neque feugiat, vel tincidunt nulla
                cursus. Quisque at elit et urna bibendum posuere. Vivamus
                euismod.
              </motion.p>
              <motion.button className="mobile">Shop Now</motion.button>
            </div>
          </div>
          <img src="/images/herosection.jpg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
