import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import Icones from './componentes/cabecalho/Icones';
import BarraLinks from './componentes/links/barraLinks';
import Noticia from './componentes/parteNoticias/Noticia';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './login'


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="" element={
    <div>
        <div className="cabecalho"><Icones/></div>

        <hr></hr>

        <div><BarraLinks/></div>

        <hr></hr>

        <div className="corpoNoticia">

            <div className="primeiraColuna">

                <div className="Linha">
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                </div>   
                <hr></hr> 
                <div className="Linha">
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                </div> 

                <hr></hr> 
                <div className="Linha">
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                    <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                </div>  
            </div>

            <div className='linhaV'/>
            
            <div className="segundaColuna">
                 <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />

                

            </div>

            <div className='linhaV'/>
            
            <div className="segundaColuna">
                <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />
                <Noticia
                    imagem="https://i.natgeofe.com/k/09db0b0a-9ca5-47de-93a8-00bbb9a3a50d/ADULTS_CHINSTRAP_PENGUIN-PROFILES_KIDS_0123_square.jpg"
                    titulo="Pinguins foda-se"
                    texto="Eles estao fodase"
                    />

            </div>
        </div>
    </div>
    }/>
            <Route path="/login" element={<Login/>}/>
    </Routes>


    </BrowserRouter>,
    document.getElementById('root')
)
