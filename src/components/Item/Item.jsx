import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proptypes from 'prop-types'
import Itemcount from "../Itemcount";

const Item = ({productoslista}) => {

    const [data, setData] = useState([]);

    const {itemid} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productoslista);
            }, 1000)
        });
        if(itemid) {
            getData.then(res => setData(res.filter(productoslista => productoslista.itemid === itemid)));
        } else {
            getData.then(res => setData(res));
        } 
    }, [itemid])
  
    const onAdd = (count) => {
        console.log(`La compra de ${count} fue exitosa`);
    }

    return (
        <div className="detail__container">
                { data && data.map((producto, index) =>{
                    const newKey = `${producto}-${index}`
                    return (
                        <div key={newKey} className="detail__itemcontainer">
                            <img src={producto.img} alt="" />
                            <div className='detail__detalles'>
                                <p className="detail__items">{producto.name}</p>
                                <p className="detail__items">{producto.precio}</p>
                                <Itemcount stock = {16} initial = {1} onAdd={onAdd}/>
                            </div>
                        </div>
                    )  
                })
                }     
        </div>
    )
}

Item.proptype = {
    productos: Proptypes.array.isRequired
}

export default Item;