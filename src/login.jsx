import './login.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function Login () {
    return (
        <div className="paginaLogin">
            <div className="contaGlobo">Conta Globo</div>
            <p className="UmaSoConta">Uma só conta para todos os produtos globo</p>
            <div className="Dados">
                <p>E-mail</p>
                <input></input>
            </div>
            <p className="nTemConta"><bold>Esqueceu seu e-mail?</bold></p>
            <div className="Dados">
                <div className="Dados">
                    <p>Senha</p>
                    <input></input>
                </div>
            <p className="nTemConta"><bold>Esqueceu sua senha?</bold></p>
            </div>
            <div className="botao"><h2>ENTRAR</h2></div>
            <p className="nTemConta">Não tem conta? <bold>CADASTRE-SE.</bold></p>
            <div className="botao"><Link to="/"><h2>VOLTAR</h2></Link></div>
            
        </div>
    )
}