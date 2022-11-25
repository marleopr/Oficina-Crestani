import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import ErrorPage from "../pages/error/ErrorPage"
import ProdutosPage from "../pages/produtos/ProdutosPage"
import SobrePage from "../pages/sobre/SobrePage"
import ContatoPage from "../pages/contato/ContatoPage"

// import HistoricPage from "../pages/historic/HistoricPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="produtos" element={<ProdutosPage/>}/>
        <Route path="sobre" element={<SobrePage/>}/>
        <Route path="contato" element={<ContatoPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}