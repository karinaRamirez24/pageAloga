import '../Header/Header.css';
import logoAloga from "../../img/Logo_Aloga.png";
import menu from "../../img/Menu.png"

const Header = () => {
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

                <div className="menu-toggle" onclick="toggleMenu()">
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
    )
}

export default Header