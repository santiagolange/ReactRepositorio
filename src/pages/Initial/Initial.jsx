import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Itemlistcontainer from '../../components/Itemlistcontainer';
import ItemDetailContainer from '../../components/ItemDetailContainer';
import Home from '../../components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Menus } from '../../mocks';



const Initial = () => {
    
    return (
        <Layout>   
            <BrowserRouter>
                <Navbar menus={Menus} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/categoria/:categoriaid' element={<Itemlistcontainer />}/>
                    <Route exact path='/item/:itemid' element={<ItemDetailContainer />}/>
                </Routes>
            </BrowserRouter>  
        </Layout>
    )
}

export default Initial;