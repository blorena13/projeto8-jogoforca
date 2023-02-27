import React from 'react';

export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    return (
        <div class="letras" >{alfabeto.map(i => <button
            data-test="letter"
            class={props.desativado ? "unidade" : "unidade2"}
            onClick={() => props.verificar(i)}
            disabled={props.desativado}>{i}
            
        </button>)}
        </div>
    )
}