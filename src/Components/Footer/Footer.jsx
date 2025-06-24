import "../Footer/Footer.css";
import AddressImage from "../../img/ADDRESS.PNG";
import LogoAloga from "../../img/LOG_PEST.PNG";
import FacebookImage from "../../img/FACEBOOK.PNG";
import WhatsAppImage from "../../img/WHATSAPP.PNG";
import EmailImage from "../../img/EMAIL.PNG";

const Footer = () => {
    return (
        <>
            <section className="content-footer">
                <div className="content-first">
                    <div className="content-logo">
                        <img className="logo" src={LogoAloga} alt="Logo de Aloga"></img>
                    </div>

                    <div className="content-icon">
                        <a href="https://maps.app.goo.gl/KBWGU967nsVZGEFi9" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={AddressImage} alt="Dirección en Google Maps"></img>
                        </a>
                        <a
                            href="https://www.facebook.com/p/Aloga-Software-Solution-100084069771735/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="icon" src={FacebookImage} alt="Facebook de Aloga"></img>
                        </a>
                        <a
                            href="https://wa.me/525557529369"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-icon"
                        >
                            <img className="icon" src={WhatsAppImage} alt="WhatsApp de Aloga" />
                        </a>
                        <a href="mailto:rh@alogasoftwaresolution.com">
                            <img className="icon" src={EmailImage} alt="Correo electrónico de contacto"></img>
                        </a>
                    </div>
                </div>

                <div className="content-second" aria-label="Información legal y créditos">
                    <p className="credit">Aloga Software Solution: el puente hacia la era digital.</p>
                    <p className="credit">
                        Las imágenes utilizadas son propiedad de terceros y se muestran solo con fines ilustrativos.
                    </p>
                    <p className="credit">
                        © 2025 —
                        <a href="https://alogasoftwaresolution.com" target="_blank" rel="noopener noreferrer">
                            Aloga Software Solution
                        </a>
                    </p> 
                </div>
            </section>
        </>
    );
};

export default Footer;
