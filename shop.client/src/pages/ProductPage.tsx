import { FunctionComponent, useContext } from "react";
import { ProductsContext } from "../Context";
// import Product from "../components/Product";
import { useParams } from "react-router-dom";

import "./ProductPage.css";
import SimilarProducts from "../components/SimilarProducts";
import Comments from "../components/Comments";

interface IProductIdProps {
    productId: String
}

const ProductPage: FunctionComponent = (): JSX.Element => {

    const params = useParams();
    const productId = params.productId;
    const productsContext = useContext(ProductsContext);
    const filtered = productsContext.products.filter(p => p.id === productId);
    const product = (filtered.length === 0) ? null : filtered[0];

    const imgUrl = product?.thumbnail?.url ?? "../product-placeholder.png";
    return (
        <>
            {
                product ? (
                    <>
                        <h1>{product.title}</h1>
                        <img src={imgUrl} alt={product.title} />
                        <div className="product-images">
                            {
                                product.images?.map(image => {
                                    return (

                                        <ul>
                                            <li key={image.id}>
                                                <div className="product-image">
                                                    <div className="image-wrapper">
                                                        <img src={image.url} alt="" />
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    );
                                })

                            }
                        </div>
                        <p>{product.description}</p>
                        <div> <span>price:</span>{product.price}</div>
                        <SimilarProducts similarTo={product.id} />
                        <Comments comments={product.comments} />
                    </>
                ) : (<h1> not found</h1>)
            }


        </>
    )
}

export default ProductPage;