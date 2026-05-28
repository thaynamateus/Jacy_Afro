import { useNavigate } from 'react-router-dom'; 
import perfil from "../assets/perfil.svg"
import style from "../css/Cabecalho.module.css"

function Cabecalho({ usuarioLogado }) {
    const navigate = useNavigate(); 
    
    const verificarAcesso = (e, destino) => {
        e.preventDefault();
        
        if (usuarioLogado) {
            navigate(destino); 
        } else {
            // Se não estiver logado, sempre manda para a tela de cadastro/login
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
                    
                        <a href="#" onClick={(e) => verificarAcesso(e, "/usuario")}>
                            <img src={perfil} alt="Perfil" className={style.perfil} />
                        </a>
                    </div>
                    
                    <nav className={style.botom_rapido}>
                        <a href="/">Home</a>
                        <a href="/Agendar" onClick={(e) => verificarAcesso(e, "/Agendar")}>
                            Agendar
                        </a>
                        
                        <a href="#">Galeria</a>
                        <a href="/sobre">sobre</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;