import {useState} from 'react';

const Itemcount = ({stock, initial, onAdd}) => {
    let botonSumaDisable = false;
    let botonSinProductosDisable = false;

    const [count, setCount] = useState(initial);

    if(count === stock){
        botonSumaDisable = true;
    } else if( count === 0) {
        botonSinProductosDisable = true;
    }

    const agregarCantidad = () => {
        onAdd(count)
    }

    return(
        <div className="itemcount__conteiner">
            <div className="itemcount">
                <button disabled={botonSumaDisable} onClick={()=> setCount(count+1)}>+</button>
                <span>{count}</span>
                <button disabled={botonSinProductosDisable} onClick={()=> setCount(count-1
                    )}>-</button>
            </div>
            <button disabled={botonSinProductosDisable} className="itemcount__agregar" onClick={()=> onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default Itemcount
