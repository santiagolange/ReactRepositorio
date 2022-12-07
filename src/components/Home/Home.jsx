import Itemlistcontainer from "../Itemlistcontainer";

import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listasproductos } from "../../mocks"

const Home = ({menus}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(listasproductos);
            }, 1000)
        });
        getData.then(res => setData(res))
    }, [])

    return (
        <div className="home__container">
            <div className='home__containerflex'>
                { data && data.map((listasproducto, index) =>{
                    const newKey = `${listasproducto}-${index}`
                    return (
                        <Link to={listasproducto.href} key={newKey} className="home__itemcontainer">
                            <img src={listasproducto.img} alt="" />
                            <div className='home__detalles'>
                                <p className="home__items">{listasproducto.producto}</p>
                            </div>
                        </Link>
                    )  
                })
                } 
            </div>      
        </div>
        )
}

Home.proptype = {
    listasproductos: Proptypes.array.isRequired,
    menus: Proptypes.array.isRequired
}

export default Home;