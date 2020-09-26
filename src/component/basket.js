import React from 'react';
import BasketItem from "./basket-item";

const Basket = ({basket,plusProduct,deleteProduct}) => {
    const total = basket.reduce((ans,item) => {
        return ans + item.sum
    },0)
    return (
        <section>
            <div className="container jumbotron">
                {basket.map((item) => {
                    return <BasketItem plusProduct={plusProduct} deleteProduct={deleteProduct} key={item.id} {...item}/>
                })}
                <p style={{textAlign:'right'}}>
                    Total:{total}
                </p>
            </div>
        </section>
    );
}


export default Basket;
