import Proptypes from 'prop-types';
import Cardwidget from '../Cartwidget';
import Navbarinput from '../Navbarinput';

const Navbar = ({menus, children}) => {
    return (
        <div className="navbar">
            <div>
                <div className="navbar__logo">
                    <a href="#">
                        <img src="https://edicom.com.ar/dam/jcr:713680c7-7c2e-4145-bd94-2f7b5de20bd6/mercadolibre_integration.png" alt="logo" />
                    </a>
                </div>
                <Navbarinput />
                <Cardwidget />
            </div>
            <div className="navbar__abajo">
                <div className="navbar__menu">
                    {
                    menus.map((menu)=> {
                        return <a href="#">{menu}</a>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

Navbar.proptype = {
    menus: Proptypes.array.isRequired,
    children: Proptypes.element
}

export default Navbar;