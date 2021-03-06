import React, { useContext } from 'react';

import ProductContext from "../contexts/ProductContext";

function Products(props) {
    const { addToCart } = useContext(ProductContext);
    const items = props.products;

    return (
        <div className="row products">
            {
                items.map(item => (
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={item.id}>
                        <div className="product">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>{item.product}</h4>
                                    <img src={`https://www.farmersph.com/addons/demo/core/public/products/${item.photo}`} alt={item.product} className="photo" />
                                    <p className="content">{item.content}</p>
                                </div>
                            </div>
                            <div className="row bottom">
                                <div className="col-md-12">
                                    <p className="price">$ {item.price}</p>
                                    <button
                                        className="btn add-to-cart"
                                        onClick={addToCart.bind(this, item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;
