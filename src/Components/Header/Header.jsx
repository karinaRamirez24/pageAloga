import React, { useEffect } from 'react';
import '../Header/Header.css';
import logoAloga from "../../img/Logo_Aloga.png";
import menu from "../../img/Menu.png"

const Header = () => {
  // Función para alternar el menú
  const toggleMenu = () => {
    const menu = document.getElementById("menuUl");
    if (menu) menu.classList.toggle("active");
  };

  // Efecto para el scroll (se ejecuta solo una vez al montar el componente)
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="spacer"></div>
      <nav className="nav-main" id="navbar">
        <div className="nav-main-content">
          <div className="main-content-image">
            <a href="index.php">
              <img className="nav-image-logo" src={logoAloga} alt="Logo ALOGA" />
            </a>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <img src={menu} alt="Menu" />
          </div>

          <div className="main-content-menu">
            <ul className="menu-ul" id="menuUl">
              <li className="menu-li"><a href="index.php">Inicio</a></li>
              <li className="menu-li"><a href="?menu=login">Contáctanos</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;