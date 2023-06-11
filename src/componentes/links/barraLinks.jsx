import './links.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export default function BarraLinks () {
    return (
        <div className="BarraLinks">
            <div class="caixinhas"><a id="g1" href="https://www.instagram.com/itajunior.ej/" target="_blank">g1</a></div>
            <div class="caixinhas"><a id="o-globo" href="https://www.instagram.com/itajunior.ej/" target="_blank">o globo</a></div>
            <div class="caixinhas"><a id="valor" href="https://www.instagram.com/itajunior.ej/" target="_blank">valor</a></div>
            <div class="caixinhas"><a id="ge" href="https://www.instagram.com/itajunior.ej/" target="_blank">ge</a></div>
            <div class="caixinhas"><a id="cartola" href="https://www.instagram.com/itajunior.ej/" target="_blank">cartola</a></div>
            <div class="caixinhas"><a id="globoplay" href="https://www.instagram.com/itajunior.ej/" target="_blank">globoplay</a></div>
            <div class="caixinhas"><a id="gshow" href="https://www.instagram.com/itajunior.ej/" target="_blank">gshow</a></div>
            <div class="caixinhas"><a id="quem" href="https://www.instagram.com/itajunior.ej/" target="_blank">quem</a></div>
            <div class="caixinhas"><a id="receitas" href="https://www.instagram.com/itajunior.ej/" target="_blank">receitas</a></div>
            <div class="caixinhas"><a id="cartola-express" href="https://www.instagram.com/itajunior.ej/" target="_blank">cartola express</a></div>
            <div class="caixinhas"><Link to="/login" id="ge">login</Link></div>

        </div>
    
    )
}