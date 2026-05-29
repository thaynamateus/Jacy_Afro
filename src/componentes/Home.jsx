import { useNavigate } from 'react-router-dom';
import style from "../css/Home.module.css"
import boxeadora from "../assets/boxeadora.jpg"
import chanel from "../assets/chanel.png"
import rabo from "../assets/rabo.png"
import nago from "../assets/nago.png"
import braids from "../assets/braids.png"
import croche from "../assets/croche.png"
import box from "../assets/box.png"
import toucas from "../assets/toucas.jpg"
import coroa from "../assets/coroa.png"
import masculino from "../assets/masculino.png"
import micangas from "../assets/micangas.png"
import boxeadora1 from "../assets/boxeadora1.png"
import insta1 from "../assets/insta1.svg"
import face1 from "../assets/face1.svg"
import whats1 from "../assets/whats1.svg"
import Comentario from "./Comentario"
import Galeria from './Galeria';

function Home({ usuarioLogado }) {
    const navigate = useNavigate();

    const handleAgendarBanner = (e) => {
        e.preventDefault();
        if (usuarioLogado) {
            navigate("/Agendar");
        } else {

            navigate("/perfil");
        }
    };

    return (
        <>
            {/* banner */}
            <section className={style.conteiner_banner}>
                <div className={style.parte1}>
                    <h1>Do agendamento ao cuidado dos fios.</h1>
                    <h3>Agende seu horário e transforme seu visual com praticidade e estilo.</h3>
                    <a href="/Agendar" onClick={(e) => verificarAcesso(e, "/Agendar")}>
                            Agendar
                        </a>
                </div>
                <div className={style.parte2}>
                </div>
            </section>
            <section className={style.produtos}>
                <div className={style.conteiner_produtos}>

                    <a href="/galeria" className={style.card_produto}>
                        <img src={boxeadora} alt="boxeadora" />
                        <div className={style.efeito}><span>Boxeadora</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={rabo} alt="rabo" />
                        <div className={style.efeito}><span>Ponytail Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={braids} alt="braids" />
                        <div className={style.efeito}><span>Box Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={chanel} alt="chanel" />
                        <div className={style.efeito}><span>Chanel</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={nago} alt="nago" />
                        <div className={style.efeito}><span>Nagô</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={croche} alt="croche" />
                        <div className={style.efeito}><span>Croche Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={boxeadora1} alt="boxeadora1" />
                        <div className={style.efeito}><span>Boxeadora</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={masculino} alt="masculino" />
                        <div className={style.efeito}><span>Chanel Masculino</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={coroa} alt="coroa" />
                        <div className={style.efeito}><span>Tiara</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={micangas} alt="micangas" />
                        <div className={style.efeito}><span>Tranças com Miçangas</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={box} alt="box" />
                        <div className={style.efeito}><span>Gypsy braids</span></div>
                    </a>

                    <a href="/galeria" className={style.card_produto}>
                        <img src={boxeadora} alt="boxeadora" />
                        <div className={style.efeito}><span>Boxeadora</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={rabo} alt="rabo" />
                        <div className={style.efeito}><span>Ponytail Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={braids} alt="braids" />
                        <div className={style.efeito}><span> Box Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={chanel} alt="chanel" />
                        <div className={style.efeito}><span>Chanel</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={nago} alt="nago" />
                        <div className={style.efeito}><span>Nagô</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={croche} alt="croche" />
                        <div className={style.efeito}><span>Croche Braids</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={boxeadora1} alt="boxeadora1" />
                        <div className={style.efeito}><span>Boxeadora</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={masculino} alt="masculino" />
                        <div className={style.efeito}><span>Chanel Masculino</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={coroa} alt="coroa" />
                        <div className={style.efeito}><span>Tiara</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={micangas} alt="micangas" />
                        <div className={style.efeito}><span>Tranças com Miçangas</span></div>
                    </a>
                    <a href="/galeria" className={style.card_produto}>
                        <img src={box} alt="box" />
                        <div className={style.efeito}><span>Gypsy braids</span></div>
                    </a>

                </div>
            </section>

            {/* sobre */}
            <section className={style.sobre}>
                <div className={style.foto}></div>
                <div className={style.texto}>
                    <h2>Jacyra da Silva </h2>
                    <p>Meu nome é Jacyra da Silva, e desde criança sempre fui apaixonada por cuidar e arrumar cabelos. Cresci usando tranças, um estilo que sempre fez parte da minha identidade. Porém, por muito tempo, assim como muitas mulheres negras, senti que precisava alisar o cabelo para me encaixar nos padrões de beleza impostos pela sociedade e evitar o preconceito.
                        Com o passar do tempo, decidi me libertar desses padrões e assumir com orgulho minhas raíces e meu cabelo afro. Foi uma escolha que transformou não apenas minha aparência, mas também minha autoestima e minha forma de enxergar minha própria história.</p>
                    <div className={style.area_rede}>
                        <a href="https://www.instagram.com/jacyafrooficial/" className={style.redes} target="_blank" rel="noreferrer"><img src={insta1} alt="instagram" /></a>
                        <a href="https://www.facebook.com/jacyra.silva.7712" className={style.redes} target="_blank" rel="noreferrer"><img src={face1} alt="facebook" /></a>
                        <a href="https://wa.me/message/ME7JGXHT2BUTP1" className={style.redes} target="_blank" rel="noreferrer"><img src={whats1} alt="facebook" /></a>
                    </div>
                </div>
            </section>

            <Comentario />
        </>
    );
}

export default Home;