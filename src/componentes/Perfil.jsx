import { useState } from "react"
import { useNavigate } from "react-router-dom" 
import style from "../css/Perfil.module.css"
import perfilIcon from "../assets/perfil.svg"

function Perfil({ setUsuarioLogado, usuarioLogado }) {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [erroCadastro, setErroCadastro] = useState("")
    const [foto, setFoto] = useState(null)

    const [emailLogin, setEmailLogin] = useState("")
    const [senhaLogin, setSenhaLogin] = useState("")
    const [erroLogin, setErroLogin] = useState("")

    function handleFotoPerfil(e) {
        const arquivo = e.target.files[0]
        if (!arquivo) return
        const leitor = new FileReader()
        leitor.onload = () => setFoto(leitor.result)
        leitor.readAsDataURL(arquivo)
    }

    const handleCriarConta = (e) => {
        e.preventDefault()
        if (senha !== confirmarSenha) {
            setErroCadastro("As senhas não coincidem.")
            return
        }
        const dados = { email, nome, sobrenome, cpf, telefone, senha, foto }
        localStorage.setItem("dadosUsuario", JSON.stringify(dados))
        setUsuarioLogado(true)
        navigate("/")
    }

    const handleEntrar = (e) => {
        e.preventDefault()
        const dadosSalvos = JSON.parse(localStorage.getItem("dadosUsuario") || "{}")
        if (emailLogin === dadosSalvos.email && senhaLogin === dadosSalvos.senha) {
            setUsuarioLogado(true)
            navigate("/")
        } else {
            setErroLogin("E-mail ou senha incorretos.")
        }
    }

    return (
        <div className={`${style.cena} ${login ? style.login : ""}`}>

            <form className={style.form_cadastro} onSubmit={handleCriarConta}>
                <h3>Cadastrar-se</h3>

                {/* Upload de foto */}
                <label htmlFor="upload_foto" style={{ cursor: 'pointer', alignSelf: 'center' }}>
                    <img
                        src={foto || perfilIcon}
                        alt="Foto de perfil"
                        style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', border: '2px solid #EED4A7' }}
                    />
                </label>
                <input
                    id="upload_foto"
                    type="file"
                    accept="image/*"
                    onChange={handleFotoPerfil}
                    style={{ display: 'none' }}
                />

                <span className={style.label}>E-mail</span>
                <input type="email" placeholder="seu@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <div className={style.campo_linha}>
                    <input type="text" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type="text" placeholder="Sobrenome" required value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <div className={style.campo_linha}>
                    <input type="text" placeholder="CPF" required value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <input type="text" placeholder="Telefone" required value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>
                
                <span className={style.label}>Senha</span>
                <input type="password" placeholder="••••••••" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                
                <span className={style.label}>Confirme a senha</span>
                <input type="password" placeholder="••••••••" required value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />

                {erroCadastro && <p className={style.erroMensagem}>{erroCadastro}</p>}
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className={style.btn_principal}>Criar</button>
                </div>
                
                <p className={style.link_troca} onClick={() => setLogin(true)}>
                    Já tem conta? <span>Entrar</span>
                </p>
            </form>

            <form className={style.form_login} onSubmit={handleEntrar}>
                <h3>Login</h3>
                
                <span className={style.label}>E-mail</span>
                <input type="email" placeholder="seu@email.com" required value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
                
                <span className={style.label}>Senha</span>
                <input type="password" placeholder="••••••••" required value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} />

                {erroLogin && <p className={style.erroMensagem}>{erroLogin}</p>}
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className={style.btn_principal}>Entrar</button>
                </div>
                
                <p className={style.link_troca} onClick={() => setLogin(false)}>
                    Não tem conta? <span>Cadastre-se</span>
                </p>
            </form>

            <div className={style.painel_rosa}>
                <div className={style.logo}></div>
                <h3>Agende seu horário e transforme seu visual com praticidade e estilo.</h3>
            </div>

        </div>
    )
}

export default Perfil;