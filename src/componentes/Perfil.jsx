import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom" 
import style from "../css/Perfil.module.css"

function Perfil({ setUsuarioLogado, usuarioLogado }) {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (usuarioLogado) {
            navigate("/usuario")
        }
    }, [usuarioLogado, navigate])

    const handleCriarConta = (e) => {
        e.preventDefault();
        setUsuarioLogado(true);
        setLogin(true); 
    }

    const handleEntrar = () => {
        setUsuarioLogado(true); 
    }

    return (
        <div className={`${style.cena} ${login ? style.login : ""}`}>

            <form className={style.form_cadastro} onSubmit={handleCriarConta}>
                <h3>Cadastrar-se</h3>
                
                <span className={style.label}>E-mail</span>
                <input type="email" placeholder="seu@email.com" required />
                
                <div className={style.campo_linha}>
                    <input type="text" placeholder="Nome" required />
                    <input type="text" placeholder="Sobrenome" required />
                </div>
                <div className={style.campo_linha}>
                    <input type="text" placeholder="CPF" required />
                    <input type="text" placeholder="Telefone" required />
                </div>
                
                <span className={style.label}>Senha</span>
                <input type="password" placeholder="••••••••" required />
                
                <span className={style.label}>Confirme a senha</span>
                <input type="password" placeholder="••••••••" required />
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className={style.btn_principal}>Criar</button>
                </div>
                
                <p className={style.link_troca} onClick={() => setLogin(true)}>
                    Já tem conta? <span>Entrar</span>
                </p>
            </form>

            <div className={style.form_login}>
                <h3>Login</h3>
                
                <span className={style.label}>E-mail ou CPF</span>
                <input type="text" placeholder="seu@email.com ou CPF" required />
                
                <span className={style.label}>Senha</span>
                <input type="password" placeholder="••••••••" required />
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link 
                        to="/usuario" 
                        className={style.btn_principal} 
                        onClick={handleEntrar}
                    >
                        Entrar
                    </Link>
                </div>
                
                <p className={style.link_troca} onClick={() => setLogin(false)}>
                    Não tem conta? <span>Cadastre-se</span>
                </p>
            </div>


            <div className={style.painel_rosa}>
                <div className={style.logo}></div>
                <h3>Agende seu horário e transforme seu visual com praticidade e estilo.</h3>
            </div>

        </div>
    )
}

export default Perfil;