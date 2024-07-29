import "./ProductsListItem.css"
import { FunctionComponent, JSX } from "react";

import { IProduct } from "@Shared/types";
import { Link } from "react-router-dom";

interface IProductProps {
    product: IProduct
}

const ProductsListItem: FunctionComponent<IProductProps> = ({ product }): JSX.Element => {

    const imgUrl = product.thumbnail?.url ?? "../product-placeholder.png";

    return (

        <div className="product-item">
            <Link to={`/products/${product.id}`}>
                <div className="image">
                    <img src={imgUrl} alt={product.title} />
                </div>
            </Link>
            <div className="info">
                <Link to={`/products/${product.id}`}>
                    <div className="title" >
                        {product.title}
                    </div>
                </Link>
                <div>
                    <span className="label">Comments:</span> {product.comments?.length || 0}
                </div>
                <div>
                    <span className="label">Price:</span>  {product.price}
                </div>
            </div>
        </div>

    );
}

export default ProductsListItem;