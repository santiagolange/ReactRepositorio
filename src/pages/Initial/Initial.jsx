import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Itemlistcontainer from '../../components/Itemlistcontainer';

const Initial = () => {
    const Menus = ['Inicio', 'Categorias', 'Favoritos', 'Mi cuenta', 'Ayuda', 'Contacto'];
    const Listas = ['Ultimas busquedas','Ofertas','Muebles', 'Componentes de PC', 'Juegos'];
    return (
        <Layout>        
            <Navbar menus={Menus}>
            </Navbar>
            <Itemlistcontainer listas={Listas}/>
        </Layout>
    )
}

export default Initial;