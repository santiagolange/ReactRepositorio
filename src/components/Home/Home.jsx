import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'item');
 
        getDocs(itemCollection).then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))) );
        }, [])

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 800);

     if (loading === true) {
        return (
        <div className='loadingContainer'>
            <img src="https://espacioeje.com/wp-content/uploads/2020/08/eje-logo.png" alt="" />
        </div>
        );
    } else {
        return (
        <div className="home__container">
            <div className='home__containerflex'>
                { data && data.map((listasproducto, index) =>{
                    const newKey = `${listasproducto}-${index}`
                    return (
                        <Link to={`/item/${listasproducto.id}`} key={newKey} className="home__itemcontainer">
                            <img src={listasproducto.img} alt="" />
                            <div className='home__detalles'>
                                <p className="home__items">{listasproducto.producto}</p>
                                <p className="home__items">{listasproducto.name}</p>
                                <p className="home__items homeItemsPrecio">${listasproducto.precio}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
        )
    }
}

Home.proptype = {
    listasproductos: Proptypes.array.isRequired,
    menus: Proptypes.array.isRequired
}

export default Home;