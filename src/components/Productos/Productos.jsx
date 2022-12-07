import {Link} from 'react-router-dom';


const Productos = () => {
    return (
        <div>
            <h1>Productos</h1>
            <Link to='/detalleproducto/1234'><p>ver más</p></Link>
        </div>
    )
}

export default Productos;