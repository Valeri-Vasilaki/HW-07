import { NavLink, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import ProductsList from "./pages/ProductsList"
// import Product from "./components/Product"
import ProductPage from "./pages/ProductPage"


// type Props = {
//     children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
// }

export default function Layout( ) {
    return (
        <>
            <header>
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products-list">products</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* {children} */}

            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/products-list' element={<ProductsList />}></Route>
                <Route path='/products/:productId' element={<ProductPage  />}></Route>
            </Routes>

            <footer>
                <hr />
                copyright 2024
            </footer>
        </>
    )
}