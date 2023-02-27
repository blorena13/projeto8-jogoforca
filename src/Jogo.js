
import inicio from "./assets/forca0.png"

export default function Jogo({ desativado, iniciando, sortidas }) {


    return (
        <div>
            <div class="jogo">
                <img src={inicio} />
                <div class="direita">
                    <button class="botao" onClick={
                        () => {
                            { desativado(false) }
                            { iniciando() }
                        }

                    } > Escolher palavra </button>


                    <div className="adivinhar">{sortidas.join('')}</div>

                </div>
            </div>
        </div>
    )


}