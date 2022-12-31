import Proptypes from 'prop-types'
import Item from "../Item/Item";

const ItemDetailContainer = () => { 

    return (
        <div className="item__container">
                <Item/>
        </div>
    )
}

ItemDetailContainer.proptype = {
    productos: Proptypes.array.isRequired
}

export default ItemDetailContainer;