
import '../css/footer.css';
import AddressImage from "./img/ADDRESS.PNG"
const Footer = () => {
  return (
    <>


  <section className="content-first">
    <div className="content-logo">
      <img className="logo" src="../img/LOG_PEST.PNG" alt="Logo de Aloga"></img>
    </div>

    <div className="content-icon">
      <a href="https://maps.app.goo.gl/KBWGU967nsVZGEFi9" target="_blank" rel="noopener noreferrer">
        <img className="icon" src={AddressImage} alt="Dirección en Google Maps"></img>
      </a>
      <a href="https://www.facebook.com/p/Aloga-Software-Solution-100084069771735/" target="_blank" rel="noopener noreferrer">
        <img className="icon" src="../img/FACEBOOK.PNG" alt="Facebook de Aloga"></img>
      </a>
      <a href="https://wa.me/525557529369" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <img className="icon" src="../img/WHATSAPP.PNG" alt="WhatsApp de Aloga"></img>
      </a>
      <a href="mailto:rh@alogasoftwaresolution.com">
        <img className="icon" src="../img/EMAIL.PNG" alt="Correo electrónico de contacto"></img>
      </a>
    </div>
  </section>

  <section className="content-second">
    <p className="credit">El puente de la era digital, Aloga Software Solution.</p>
    <p className="credit">
      © 2025 Copyright:
      <a href="http://alogasoftwaresolution.com" target="_blank" rel="noopener noreferrer">
        Aloga Software Solution
      </a>Las imágenes son propiedad de terceros y se emplean solo como referencia.
    </p>
  </section>


        </>

  )
}

export default Footer