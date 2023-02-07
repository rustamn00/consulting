import React, { useState } from "react";
// import "./navbar.css";

const NavbarBurger = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      document.getElementById("overlay").style.display = "block";
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      document.getElementById("overlay").style.display = "none";
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="">
      <nav>
        <div className="burger-menu " onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div id="overlay"></div>

      <div className={menu_class}>
        <ul className="flex flex-col h-[180px] text-center font-poppins text-sm font-normal justify-around">
          <li>
            <a className="" onClick={updateMenu} href="#about_us">
              Biz haqimizda
            </a>
          </li>
          <li>
            <a className="" onClick={updateMenu} href="#tarifs">
              Tariflar
            </a>
          </li>
          <li>
            <a className="" onClick={updateMenu} href="#izoh">
              Izohlar
            </a>
          </li>
          <li>
            <a className="" onClick={updateMenu} href="#contacts">
              Savol-Javoblar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBurger;
