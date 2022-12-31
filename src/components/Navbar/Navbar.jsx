import Proptypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

import Cardwidget from '../Cartwidget';

const Navbar = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'menus');
 
        getDocs(itemCollection).then(res => setData(res.docs.map(product => ({name: product.name, ...product.data()}))) );
        }, [])

    function toggleAnimation() {
        setTimeout(() => {
            const navbar__togglecontainer = document.getElementById("navbar__togglecontainer");
            const navbar__toggle = document.getElementById("navbar__toggle");

            navbar__togglecontainer.classList.toggle("active");
            navbar__toggle.classList.toggle("active");
        },100)
    }

    return (
        <div className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo">
                    <Link to='/'>
                        <img src="https://espacioeje.com/wp-content/uploads/2020/08/eje-logo.png" alt="logo" />
                    </Link>
                </div>
                <div className='navbar__abajo'>
                    <Cardwidget />
                    <button id='navbar__toggle' onClick={toggleAnimation}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
            </div>
                <div id='navbar__togglecontainer' className="navbar__menu">
                    <ul>
                        { data && data.map((menu, index) => {
                            const newKey = `${menu}-${index}`
                            return (
                                <li key={newKey}>
                                    <Link to={menu.href} onClick={toggleAnimation}>{menu.name}</Link>  
                                </li>
                            )      
                        })
                        }
                    </ul>
                </div>
        </div>
    )

}

Navbar.proptype = {
    menus: Proptypes.array.isRequired,
    children: Proptypes.element
}

export default Navbar;