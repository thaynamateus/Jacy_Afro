import { useNavigate } from 'react-router-dom'; 
import perfilIcon from "../assets/perfil.svg"
import style from "../css/Cabecalho.module.css"

function Cabecalho({ usuarioLogado }) {
    const navigate = useNavigate();

    const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario") || "{}")
    const fotoPerfil = dadosUsuario.foto || perfilIcon

    const verificarAcesso = (e, destino) => {
        e.preventDefault();
        if (usuarioLogado) {
            navigate(destino); 
        } else {
            navigate("/perfil"); 
        } 
    };

    return (
        <header className={style.home}>
            <div className={style.conteiner_home}>
                <div className={style.conteiner_logo}>
                    <div className={style.logo}></div>
                </div>
                
                <div className={style.info_home}>
                    <div className={style.icons}>
                        <a href="#" onClick={(e) => verificarAcesso(e,)}>
                            <img
                                src={fotoPerfil}
                                alt="Perfil"
                                className={style.perfil}
                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </a>
                    </div>
                    
                    <nav className={style.botom_rapido}>
                        <a href="/">Home</a>
                        <a href="/Agendar" onClick={(e) => verificarAcesso(e, "/Agendar")}>
                            Agendar
                        </a>
                        <a href="/galeria">Galeria</a>
                        
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;