import style from "../css/Footer.module.css"
import { useNavigate } from 'react-router-dom';
import insta1 from "../assets/insta1.svg"
import face1 from "../assets/face1.svg"
import whats1 from "../assets/whats1.svg"
import visa from "../assets/visa.png"
import master from "../assets/master.png"
import elo from "../assets/elo.png"
import pix from "../assets/pix.png"

function Footer({ usuarioLogado }) {

    const navigate = useNavigate();

    const verificarAcesso = (e, destino) => {
        e.preventDefault();
        if (usuarioLogado) {
            navigate(destino);
        } else {
            navigate("/perfil");
        }
    };

    return (
        <section className={style.Footer}>
            <div className={style.logo}></div>
            <div className={style.info}>

                <div className={style.fala_gente}>
                    <h3>Fale com a gente</h3>
                    <h5>De seg á sab</h5>
                    <h5>Das 7h ás 17h</h5>
                    <a href="https://wa.me/message/ME7JGXHT2BUTP1" className={style.redes} target="_blank" rel="noreferrer">
                        <img src={whats1} alt="whatsapp" /> (11) 98141-3285
                    </a>
                    <a href="mailto:jacyra.silva1993@gmail.com" className={style.redes}>
                     Jacyra.silva1993@gmail.com
                    </a>
                    <div className={style.nossas_redes}>
                        <h5>Nossas Redes Sociais</h5>
                        <div className={style.area_rede}>
                            <a href="https://www.instagram.com/jacyafrooficial/" target="_blank" rel="noreferrer">
                                <img src={insta1} alt="instagram" />
                            </a>
                            <a href="https://www.facebook.com/jacyra.silva.7712" target="_blank" rel="noreferrer">
                                <img src={face1} alt="facebook" />
                            </a>
                        </div>
                    </div>
                </div>

                <nav className={style.botom_rapido}>
                    <a href="/">Home</a>
                    <a href="/Agendar" onClick={(e) => verificarAcesso(e, "/Agendar")}>Agendar</a>
                    <a href="/galeria">Galeria</a>
                </nav>

                <div className={style.pagamentos}>
                    <h4>Formas de Pagamento</h4>
                    <div className={style.cartoes}>
                        <img src={visa} alt="cartão visa" />
                        <img src={master} alt="cartão master" />
                        <img src={pix} alt="pix" />
                        <img src={elo} alt="cartão elo" />
                    </div>
                    <div className={style.mapa}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.840149257851!2d-46.509692099999995!3d-23.574183899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce677ba6137edd%3A0x38b70a832032190e!2sRua%20J%C3%BAlio%20Parigot%2C%201053%20-%20Vila%20Antonieta%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003478-007!5e0!3m2!1spt-BR!2sbr!4v1780134265690!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Footer;