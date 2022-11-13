import React from "react";
import { Link, animateScroll as scroll} from 'react-scroll'
import Logo from "../assets/logo_003.svg";
import '../css/footer.css'

const Experience = () => {
  return (
    <React.Fragment>
      <div className="footerContent">
        <div className="infoContent">
            <div className="contentFooter">
                <div className="imgContent">
                    <img src={Logo} alt="logo-enermotors" />
                </div>
                <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            </div>
            <div className="contentFooter">
                <h2>MENU</h2>
                <ul>
                    <li><a onClick={() => {
                            scroll.scrollToTop({
                                duration: 500,
                                smooth: true,
                                offset: 50
                            })
                            }}>Inicio</a></li>
                    <li><Link to="about" smooth={true} offset={50} duration={500}>Nosotros</Link></li>
                    <li><Link to="experience" smooth={true} offset={50} duration={500}>Experiencia</Link></li>
                    <li><Link to="service" smooth={true} offset={50} duration={500}>Servicios</Link></li>
                    <li><Link to="contact" smooth={true} offset={50} duration={500}>Contacto</Link></li>
                </ul>
            </div>
            <div className="contentFooter">
                <h2>REDES SOCIALES</h2>
                <ul>
                    <li><a href="#"><i className='bx bxl-facebook-square'></i>@enermotorssan</a></li>
                    <li><a href="#"><i className='bx bxl-instagram-alt'></i>@enermotorssas</a></li>
                </ul>
            </div>
            <div className="contentFooter">
                <h2>CONTACT</h2>
                <ul>
                    <li><a href="#"><i className='bx bxs-map'></i>Atención en sitio</a></li>
                    <li><a href="#"><i className='bx bx-envelope'></i>gerencia@enermotors.com</a></li>
                    <li><a href="#" className="dataNumber">
                        <i className='bx bxs-phone' ></i>
                        <div className="numberData">
                            <p>+57 313 311 9549</p>
                            <p>+57 321 961 6903</p>
                        </div>
                        </a></li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="copyContent">
            <h3>© 2022 <strong>Tauro Dev.</strong> Todos los derechos reservados.</h3>
            <h3>Enermotors 2022</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;