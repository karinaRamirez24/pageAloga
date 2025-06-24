import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="container-login">
        <form action="https://formsubmit.co/alogasoftware@gmail.com" method="post" className="login-form">
          <div className="login-form-container">
            <p className="login-title">¡Contáctanos!</p>
            <p className="login-subtitle">Hazlo realidad con nosotros.</p>

            <div className="form-group">
              <div className="input-container">
                <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
            
                <span className="underline"></span>
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <input type="text" id="name" name="name" required pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}" title="Ingresa solo letras y espacios (mínimo 2 caracteres)" placeholder="Tu nombre" />
              
                <span className="underline"></span>
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" title="Ingresa un número de 10 dígitos" placeholder="10 dígitos" maxLength="10"/>
            
                <span className="underline"></span>
              </div>
            </div>
          <input type="hidden" name="_autoresponse" value="mensaje de prueba" />
            <div className="form-group">
              <button type="submit" className="btn-login">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contacto