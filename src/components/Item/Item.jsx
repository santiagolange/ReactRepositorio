import Proptypes from 'prop-types'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore,} from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext";
import Itemcount from "../Itemcount";


const Item = () => {

    const {addProduct} = useCartContext();
    const [data, setData] = useState([]);

    const onAdd = (quantity) => {
        addProduct(data,quantity);
    }

    const {itemid} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const dbDoc = doc(db, 'item', itemid)
        getDoc(dbDoc).then(res => setData({id: res.id, ...res.data() }));
        }, [itemid])

    return (
        <div className="detail__container">
            <div className="detail__itemcontainer">
                <img src={data.img} alt="" />
                <div className='detail__detalles'>
                    <p className="detail__items">{data.name}</p>
                    <p className="detail__itemPrecio">${data.precio}</p>
                    <Itemcount stock = {data.stock} initial = {1} onAdd={onAdd}/>
                    <p className='detail__itemsDescDos'>Descripción:</p>
                    <p className="detail__itemsDesc">{data.desc}.</p>
                </div>
            </div> 
        </div>
    )
}

Item.proptype = {
    productos: Proptypes.array.isRequired
}

export default Item;