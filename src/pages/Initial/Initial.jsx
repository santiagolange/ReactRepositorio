import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menus } from '../../mocks';

import CartProvider from '../../context/CartContext'

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Itemlistcontainer from '../../components/Itemlistcontainer';
import ItemDetailContainer from '../../components/ItemDetailContainer';
import Cart from '../../components/Cart';
import Home from '../../components/Home';
import Footer from '../../components/Footer';
import Checkout from '../../components/Checkout';

const Initial = () => {
    
    return (
        <Layout>   
            <BrowserRouter>
                <CartProvider>
                    <Navbar menus={Menus} />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/categoria/:categoriaid' element={<Itemlistcontainer />}/>
                        <Route exact path='/item/:itemid' element={<ItemDetailContainer />}/>
                        <Route exact path='/cart' element={<Cart/>}/>
                        <Route exact path='/checkout' element={<Checkout/>}/>
                    </Routes>
                    <Footer />
                </CartProvider>
            </BrowserRouter>  
        </Layout>
    )
}

export default Initial;