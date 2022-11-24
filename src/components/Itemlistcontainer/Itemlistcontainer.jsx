import Proptypes from 'prop-types'

const Itemlistcontainer = ({listas}) => {
    return (
        <div className="itemlist__container">
            {
            listas.map((lista)=>{
                return <p className="itemlist__items">{lista}</p>
            })  
            }
        </div>
    )
}

Itemlistcontainer.proptype = {
    listas: Proptypes.array.isRequired
}

export default Itemlistcontainer;
