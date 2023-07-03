import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();



  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "adhmed",
    isSeller: true,
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const navbarClass = active || pathname !== "/" ? "navbar active" : "navbar";

  return (
    <div className={navbarClass}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span class="dot">.</span>

        </div>
        {open && (
          <div class="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={toggleOpen}>
                <img
                  src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <span>{currentUser?.username}</span>
                {open && (
                  <div class="options">
                    {currentUser?.isSeller && (
                      <>
                      <Link className="link" to="/gig">
                          gig
                        </Link>
                        <Link className="link" to="/mygigs">
                        Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add New Gig
                        </Link>
                        <Link className="link" exact to="/gigs">
                          Gigs1                      
                    </Link>
                      </>
                    )}
                    <Link className="link" exact to="/orders">
                      Orders
                    </Link>
                    <Link className="link" exact to="/Messages">
                      Messages                      
                    </Link>
                    <Link className="link" exact to="/Message">
                      Message                      
                    </Link>
                    <Link className="link" to="/">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {!open && (
          <span
            className={`icon ${!open && "show-svg"}`}
            onClick={toggleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
            </svg>
          </span>
        )}
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>

        </>
      )}
    </div>
  );
}

export default Navbar;
