import {useState} from 'react';


function Counter(){
    //El estado
    //const [contador, valorDos] = useState(valorInicial);

    const [contador, setContador] = useState(0);
    
    return(
        <div>
            <p>
                Haz hecho click {contador} veces a este boton
            </p>
            <button onClick={ ()=>{setContador(contador + 1)} }>Incrementar</button>
        </div>
    )
}

export default Counter