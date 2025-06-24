import "./App.css";
import backgrounvideo from "./img/Background_section.webm";
import firstImage from "./img/IMG_PROGRAMMIN.jpg";
import Values from "./img/values.png"

function App() {
    return (
        <>
            <section>
                <div id="img-Header" classNameName="">
                    <div className="container-video">
                        <video src={backgrounvideo} autoplay poster="" muted loop></video>
                    </div>
                    <div className="container-text">
                        <h2 className="text_tittle">Trabajo mexicano para empresas norteamericanas</h2>
                        <p className="text-paragraph">We Connect Mexican technologists to U. S. MEXICODE, LLC</p>
                    </div>
                </div>
            </section>
            <div className="hr-tittle"></div>

            <section className="container-secondary">
                <div className="about-us">
                    <div className="we-are">
                        <h2 className="text-new">¿QUIENES SOMOS?</h2>
                    </div>

                    <div className="we-are-text">
                        <p>
                            Somos una empresa profundamente apasionada por la tecnología, dedicada al desarrollo de
                            software con un firme compromiso: impulsar la productividad y el crecimiento de nuestros
                            clientes a través de soluciones innovadoras y a la medida.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-team">
                <div className="content-member">
                    <div className="member-img">
                        <img className="img-propierties" src="../img/goal.png" alt="cohete"></img>
                        <h2 className="member-name">Misión</h2>
                    </div>
                    <div className="member-description">
                        <p>
                            Inspirar confianza a nuestros clientes, ofreciendo soluciones innovadoras enfocadas a la
                            calidad, las cuales les permita alcanzar sus objetivos de forma eficaz y eficiente.
                        </p>
                    </div>
                </div>
                <div className="content-member">
                    <div className="member-img">
                        <img className="img-propierties" src="../img/vision.png" alt="vision"></img>
                        <h2 className="member-name">Visión</h2>
                    </div>
                    <div className="member-description">
                        <p>
                            Ser una empresa reconocida por brindar productos de calidad destacando la aplicación de
                            metodologías ágiles en el proceso y por la satisfacción de nuestros clientes.
                        </p>
                    </div>
                </div>
                <div className="content-member">
                    <div className="member-img">
                        <img className="img-propierties" src={Values} alt="valores"></img>
                        <h2 className="member-name">Valores</h2>
                    </div>
                    <div className="member-description">
                        <ul className="member-values">
                            <li>Mejora Continua.</li>
                            <li>Compromiso.</li>
                            <li>Innovación.</li>
                            <li>Lealtad.</li>
                            <li>Calidad.</li>
                            <li>Responsabilidad.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="technologies">
                <div className="technologies-container">
                    <div className="technologies-names">
                        <div>
                            <h1>Expertos en Múltiples Industrias</h1>
                            <p>
                                Nuestros desarrolladores tienen una amplia experiencia específica en varias industrias,
                                en la creación de aplicaciones y soluciones de software personalizadas.
                            </p>
                        </div>

                        <div className="categories">
                            <ul>
                                <li>Salud.</li>
                                <li>Subasta.</li>
                                <li>Administración.</li>
                                <li>Moda y Belleza.</li>
                                <li>Publicidad y Marketing.</li>
                                <li>Logística.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="technologies-pc">
                        <img src={firstImage} alt="technologies-pc" className="firs-img"></img>
                        <img src="../img/vitamins.jpg" alt="vitamins" className="firs-img"></img>
                        <img src="../img/inventory.jpg" alt="inventory" className="webapp"></img>
                        <img src="../img/web_App.jpg" alt="web_app" className="last-img"></img>
                        <img src="../img/dev.jpg" alt="dev" className="last-img"></img>
                    </div>
                </div>
            </section>

            <section className="services">
                <div className="services-img">Servicios de desarrollo de software</div>
                <div className="services-information">
                    <div className="information-service">
                        <div className="service-image">
                            <img
                                src="../img/mobileDevelopment.png"
                                alt="mobileDevelopment"
                                className="image-circle"
                            ></img>
                        </div>
                        <div className="service-text">
                            <h3>Desarrollo de aplicaciones empresariales.</h3>
                        </div>
                    </div>
                    <div className="information-second">
                        <div className="service-image">
                            <img src="../img/cybersecurity.png" alt="cybersecurity" className="image-circle"></img>
                        </div>
                        <div className="service-text">
                            <h3>Almacenamiento en la nube y ciberseguridad.</h3>
                        </div>
                    </div>
                    <div className="information-service">
                        <div className="service-image">
                            <img src="../img/softwareTest.png" alt="softwareTest" className="image-circle"></img>
                        </div>
                        <div className="service-text">
                            <h3>Control de calidad y pruebas de software.</h3>
                        </div>
                    </div>
                    <div className="information-second">
                        <div className="service-image">
                            <img src="../img/techSupport.png" alt="techSupport" className="image-circle"></img>
                        </div>
                        <div className="service-text">
                            <h3>Soporte tecnico y mantenimietno.</h3>
                        </div>
                    </div>
                    <div className="information-service">
                        <div className="service-image">
                            <img src="../img/AI.png" alt="AI" className="image-circle"></img>
                        </div>
                        <div className="service-text">
                            <h3>Inteligencia artificial.</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="tecnologyes-container">
                    <h2 className="tecnologias-h2">Tecnologías que utilizamos</h2>
                    <p>
                        Impulsamos el futuro con soluciones tecnológicas innovadoras que transforman ideas en software
                        de alto impacto
                    </p>
                </div>

                <div className="technology-use">
                    <img className="technologies-img" src="./img/React.png" alt="Technology 1"></img>
                    <img className="technologies-img" src="./img/sql.png" alt="Technology 2"></img>
                    <img className="technologies-img" src="./img/aws.png" alt="Technology 3"></img>
                    <img className="technologies-img" src="./img/python.png" alt="Technology 4"></img>
                    <img className="technologies-img" src="./img/angular.png" alt="Technology 5"></img>
                    <img className="technologies-img" src="./img/c++.png" alt="Technology 6"></img>
                    <img className="technologies-img" src="./img/figma.png" alt="Technology 7"></img>
                    <img className="technologies-img" src="./img/flutter.png" alt="Technology 8"></img>
                    <img className="technologies-img" src="./img/azure.png" alt="Technology 9"></img>
                    <img className="technologies-img" src="./img/js.png" alt="Technology 10"></img>
                    <img className="technologies-img" src="./img/mysql.png" alt="Technology 11"></img>
                    <img className="technologies-img" src="./img/java.png" alt="Technology 12"></img>
                    <img className="technologies-img" src="./img/google-cloud.png" alt="Technology 13"></img>
                    <img className="technologies-img" src="./img/docker.png" alt="Technology 14"></img>
                    <img className="technologies-img" src="npm run dev ./img/github.png" alt="Technology 15"></img>
                </div>
            </section>
        </>
    );
}

export default App;
