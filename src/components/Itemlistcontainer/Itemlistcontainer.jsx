import Proptypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link, link} from 'react-router-dom';
import { productoslista } from '../../mocks';

import Itemcount from '../Itemcount'

// <Itemcount stock = {16} initial = {1} onAdd={onAdd}/>

const Itemlistcontainer = () => { 

    const [data, setData] = useState([]);

    const {categoriaid} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productoslista);
            }, 1000)
        });
        if(categoriaid) {
            getData.then(res => setData(res.filter(productoslista => productoslista.categoria === categoriaid)));
        } else {
            getData.then(res => setData(res));
        } 
    }, [categoriaid])
  
    const onAdd = (count) => {
        console.log(`La compra de ${count} fue exitosa`);
    }

    return (
        <div className="itemlist__container">
            <div className='itemlist__containerflex'>
                { data && data.map((producto, index) =>{
                    const newKey = `${producto}-${index}`
                    return (
                        <Link to={`/item/${producto.itemid}`} key={newKey} className="itemlist__itemcontainer">
                            <img src={producto.img} alt="" />
                            <div className='itemlist__detalles'>
                                <p className="itemlist__items">{producto.name}</p>
                                <p className="itemlist__items">{producto.precio}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
    )
}

Itemlistcontainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default Itemlistcontainer;
