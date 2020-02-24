import React, { Component } from 'react';
import {storeProducts, detailsProduct} from './data'

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
state ={
    products:storeProducts,
    detailProduct:detailsProduct
}
handleDetail = ()=>{
    console.log("Helllo from details")
}
addCart = ()=>{
    console.log("Helllo from add to carts")
}
    render() {
        return (
            <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addCart:this.addCart
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ ProductProvider, ProductConsumer };