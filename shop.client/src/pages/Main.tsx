import {Link} from "react-router-dom";
import {ProductsContext} from "../Context";
import {useContext} from "react";

export default function Main() {

    const productsContext = useContext(ProductsContext);

    const calcTotalPrice = () => {
        return productsContext.products?.map(product => product.price).reduce((a, e) => a + e, 0);
    }

    const HOST = `http://${process.env.REACT_APP_LOCAL_PATH}:${process.env.REACT_APP_LOCAL_PORT}`;

    return (
        <div className="App">
            <h1>Shop.Client</h1>
            <p>В базе данных находится {productsContext.products?.length} товаров общей
                стоимостью {calcTotalPrice()}</p>
            <Link to="/products-list">Перейти к списку товаров</Link>
            <br/>
            <a className="App-link" href={`${HOST}/admin`} target='_blank' rel="noreferrer">admin</a>
        </div>
    )
}