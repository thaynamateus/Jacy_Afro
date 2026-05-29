import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from "./componentes/Home"
import Agendar from "./componentes/Agendar"
import Tranca from "./componentes/Tranca"
import Preco from "./componentes/Preço"
import Cor from "./componentes/Cor"
import Data from "./componentes/Data"
import Pagamento from "./componentes/Pagamento"
import Resumo from "./componentes/Resumo"

import Perfil from "./componentes/Perfil"
import Cabecalho from "./componentes/Cabecalho"
import Galeria from './componentes/Galeria'
import './App.css'

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState(
    localStorage.getItem("usuarioLogado") === "true"
  );

  const handleSetUsuarioLogado = (valor) => {
    localStorage.setItem("usuarioLogado", valor);
    setUsuarioLogado(valor);
  };

  return (
    <>
      <main>
        <Router>
          <Cabecalho usuarioLogado={usuarioLogado} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Agendar" element={<Agendar />}>
              <Route index element={<Tranca />} />
              <Route path="preco" element={<Preco />} />
              <Route path="cor" element={<Cor />} />
              <Route path="data" element={<Data />} />
              <Route path="pagamento" element={<Pagamento />} />
              <Route path="resumo" element={<Resumo />} />
            </Route>
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/perfil" element={
              <Perfil setUsuarioLogado={handleSetUsuarioLogado} usuarioLogado={usuarioLogado} />
            } />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App