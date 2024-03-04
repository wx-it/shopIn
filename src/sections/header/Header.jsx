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

  const ref = [useRef(), useRef(), useRef()];
  useLayoutEffect(() => {
    ref.forEach((section) => {
      const elems = section.current;
      gsap.set(elems, {
        y: 50,
        duration: 1.5,
        ease: "power3.out",
        overwrite: "auto",
      });

      ScrollTrigger.create({
        trigger: section.current,
        start: "top 60%",
        end: "bottom 20%",
        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 2,
          }),
        // onLeave: () =>
        //   gsap.to(elems, {
        //     y: -10,
        //     stagger: 0.2,
        //   }),
        // onEnterBack: () =>
        //   gsap.to(elems, {
        //     y: 0,
        //     opacity: 1,
        //     stagger: -0.2,
        //   }),
        // onLeaveBack: () =>
        //   gsap.to(elems, {
        //     y: 10,
        //     stagger: -0.2,
        //   }),
      });
    });
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
          <motion.img
            initial={{ opacity: 0.5, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "linear" }}
            className="desktop"
            src="/images/herosection.jpg"
            alt=""
          />
          <motion.div>
            <motion.span>Shop Now</motion.span>
          </motion.div>
        </div>

        <div>
          <div>
            <div className="title">
              <div>
                <h1
                  ref={ref[0]}
                  // initial={{ y: 60 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 1.5, ease: "linear" }}
                >
                  Each Piece is
                </h1>
              </div>
              <div>
                <h1
                  ref={ref[1]}
                  // initial={{ y: 60 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 1.5, ease: "linear" }}
                >
                  Designed to Move
                </h1>
              </div>
              <div>
                <h1
                  ref={ref[2]}
                  // initial={{ y: 60 }}
                  // animate={{ y: 0 }}
                  // transition={{ duration: 1.5, ease: "linear" }}
                >
                  with You
                </h1>
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
          <img src="/images/herosection2.jpg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
