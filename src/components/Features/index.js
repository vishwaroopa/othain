import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import FEATURES_QUERY from "../../queries/features/features";
import logo from '../../assets/LearnMore-button_4.png';
const Features = () => {
    return (
            <Query query={FEATURES_QUERY} id={null}>
                {({ data: { features } }) => {
                return (
        <div id='features' className='text-center'>
            <div className='container'>
                <div className='col-md-10 col-md-offset-1 section-title'>
                                <h4>Our people do amazing things to help businesses and communities solve their toughest challenges</h4>
                                <h6>Our focus is in the business process and technology management space, offering a broad portfolio of industry-specific services.</h6>
                </div>
                                <div className='row'>
                                    {features.map((feature, i) => {
                                        return (
                                            <div  className='col-xs-12 col-md-4'>
                                                {' '}
                                                <i className={feature.icons}></i>
                                                <h3>{feature.Title}</h3>
                                                <p>{feature.Description}</p>
                                                <h3><Link to={feature.url} className='btn'><img src={logo} alt="LearnMore-button.png" /></Link></h3>
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

export default Features;


