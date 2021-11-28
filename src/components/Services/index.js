import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import PRODUCTS_QUERY from "../../queries/products/products";
import logo from '../../assets/LearnMore-button_4.png';
const Services = () => {
    return (
        <Query query={PRODUCTS_QUERY} id={null}>
            {({ data: { products } }) => {
                return (
                    <div id='services' className='text-center'>
                        <div className='container'>
                            <div className='section-title'>
                                <h2>What we specialize in
Industries we serve and what differentiates us from the rest.</h2>
                               
                            </div>
                            <div className='row'>
                                {products.map((product, i) => {
                                    return (
                                        <div className='col-md-4'>
                                            <div className='col-md-4'>
                                                <div className='service-icon'>
                                                    <i className={product.icons}></i></div></div>
                                            <div className='col-md-8'>
                            <div className='service-desc'>
                                                <h3>{product.title}</h3>
                                                <p>{product.description}</p>
                                                </div>
                                                </div>
                        </div>

                                       
                                    );
                                })}

                            </div>
                        </div>
                    </div>

                );
            }}
        </Query>
    )
}

export default Services;


