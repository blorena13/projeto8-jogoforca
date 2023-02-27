import { useState } from "react"
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

function App() {

  const forca = [forca1, forca2, forca3, forca4, forca5, forca6]
  const [disabled, setDisabled] = useState(true);
  const [embaralhadas, setEmbaralhadas] = useState([]); // palavras que vão ser embaralhadas
  const [adivinhar, setAdivinhar] = useState([]); // palavras aparecidas em traços
  const [letraClicada, setLetraClicada] = useState([]); // letra clicada errada
  const [letraCorreta, setLetraCorreta] = useState([]); // letra certa
  const [erros, setErros] = useState(0);
  let escondidas = [];

  function inicioJogo() {
    setDisabled(false);
    embaralhar();
    setErros(0);
  }

  function embaralhar() {
    let escondidas = [];
    const palavraNova = palavras[Math.floor(Math.random() * palavras.length)];
    setEmbaralhadas(palavraNova.split(''));
    console.log(palavraNova)

    escondidas = Array(palavraNova.length).fill(' _');
    setAdivinhar(escondidas);


  }



  function verificarLetras(cadaLetra) {
    setLetraClicada([...letraClicada, cadaLetra]);

    for (let i = 0; i < embaralhadas.length; i++) {
      if (embaralhadas[i].includes(cadaLetra)) {
        escondidas.splice(i, 1, embaralhadas[i])
      }
       if (!embaralhadas.includes(cadaLetra)) {
        const qntErros = erros + 1;
        setErros(qntErros);
        if (qntErros === 6) {
          //acaba
        }
      }
    }
    console.log(erros)
  }
  


  return (
    <div class="centro">
      <Jogo forca={forca} desativado={setDisabled} erro={erros} iniciando={inicioJogo} sortidas={adivinhar} />
      <Letras desativado={disabled} verificar={verificarLetras} erro={erros}/>
    </div>
  );
}

export default App;
