import Proptypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const Itemlistcontainer = () => { 

    const [data, setData] = useState();

    const {categoriaid} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'item');

        if(categoriaid){
            const queryFilter = query(itemCollection, where('categoria', '==', categoriaid))
            getDocs(queryFilter).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))) );
        } else {
            getDocs(itemCollection).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))) );
        }
        }, [categoriaid])

    return (
        <div className="itemlist__container">
            <div className='itemlist__containerflex'>
                { data && data.map((producto, index) =>{
                    const newKey = `${producto}-${index}`
                    return (
                        <Link to={`/item/${producto.id}`} key={newKey} className="itemlist__itemcontainer">
                            <img src={producto.img} alt="" />
                            <div className='itemlist__detalles'>
                                <p className="itemlist__items">{producto.name}</p>
                                <p className="itemlist__itemsPrecio">${producto.precio}</p>
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
