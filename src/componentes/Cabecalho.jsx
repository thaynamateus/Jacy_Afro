import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import perfilIcon from "../assets/perfil.svg"
import style from "../css/Cabecalho.module.css"

function Cabecalho({ usuarioLogado }) {
    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false);

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

    const fecharMenu = () => setMenuAberto(false);

    return (
        <header className={style.home}>
            <div className={style.conteiner_home}>

                <button
                    className={style.hamburguer}
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={style.conteiner_logo}>
                    <div className={style.logo}></div>
                </div>

                <div className={style.info_home}>
                    <div className={style.icons}>
                        <a href="#" onClick={(e) => verificarAcesso(e, "/perfil")}>
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
                        <a href="/Agendar" onClick={(e) => verificarAcesso(e, "/Agendar")}>Agendar</a>
                        <a href="/galeria">Galeria</a>
                    </nav>
                </div>
            </div>

            {menuAberto && (
                <div className={style.overlay} onClick={fecharMenu}>
                    <div className={style.menu_lateral} onClick={(e) => e.stopPropagation()}>
                        <button className={style.voltar} onClick={fecharMenu}>←</button>

                        <div className={style.perfil_menu}>
                            <div className={style.perfil_circulo}>
                                <img
                                    src={fotoPerfil}
                                    alt="Perfil"
                                    style={{ borderRadius: '50%', objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                            <p>{dadosUsuario.nome || "Usuario"}</p>
                        </div>

                        <nav className={style.menu_links}>
                            <a href="/" onClick={fecharMenu}>Home</a>
                            <a href="/Agendar" onClick={(e) => { fecharMenu(); verificarAcesso(e, "/Agendar"); }}>Agendar</a>
                            <a href="/galeria" onClick={fecharMenu}>Galeria</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Cabecalho;