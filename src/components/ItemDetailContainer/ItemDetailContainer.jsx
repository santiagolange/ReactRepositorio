import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Proptypes from 'prop-types'
import { Link } from "react-router-dom";
import { productoslista } from "../../mocks";

import Item from "../Item/Item";

const ItemDetailContainer = ({onAdd}) => { 

    return (
        <div className="item__container">
                <Item productoslista={productoslista} />
        </div>
    )
}

ItemDetailContainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default ItemDetailContainer;