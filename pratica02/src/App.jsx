import { BrowserRouter, Routes, Route } from "react-router-dom";
import Novo from "./pages/Novo";
import Home from "./pages/Home";
import Erro from "./pages/Erro";
import Layout from "./components/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<Novo />} />
        </Route>

        <Route path="/erro" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}