import { BrowserRouter, Routes, Route } from "react-router-dom";
import Novo from "./pages/Novo";
import Login from "./pages/Login"
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Layout from "./components/Layout"
import Perfil from "./pages/Perfil"

export default function App() {
  const [logado, setLogado] = useState(false);
  const [userID, setUserID] = useState();
  function handleLogin(event) {
    setLogado(true);
    setUserID(100);
  }

  function handleLogout(event) {
    setLogado(false);
    setUserID(null);
  }

  return (
    <BrowserRouter>
      <Routes>
      {logado ?
          <>
          <Route path="/" element={<Layout id={userID} onLogout={handleLogout} />} >
            <Route index element={<Home />} />
            <Route path="perfil/:id" element={<Perfil />} />
            <Route path="/novo" element={<Novo />} />
            </Route>
          </>
          :
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        }

        <Route path="/erro" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}