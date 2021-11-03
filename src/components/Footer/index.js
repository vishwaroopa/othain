import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import Query from "../Query";
import GLOBAL_QUERY from "../../queries/global/global";
//import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
const Footer = () => {
        return (
            <Query query={GLOBAL_QUERY} id={null}>
                {({ data: { global } }) => {
                    const imageUrl =
                        process.env.NODE_ENV !== "development"
                            ? global.defaultSeo.shareImage.url
                            : process.env.REACT_APP_BACKEND_URL + global.defaultSeo.shareImage.url;
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='section-title'>
                                <Link to="/"><img src={imageUrl} alt="logo" /></Link>
                                <p>
                                    {global.Footer.content}

                               
                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='contact-item'>
                            <h3>New Jersey</h3>
                            
                        </div>

                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa fa-headphones'></i> {global.Footer.number1}<br />
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> <a href="mailto:info@mavininfotech.com">{global.Footer.email}</a>
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                        <p>
                            <span>
                                <i className='fa fa-map-marker'></i>  {global.Footer.address}
                            </span>
                        </p>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='contact-item'>
                            <h3>Hyderabad</h3>
                           
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-headphones'></i> {global.Footer.number1}<br />
                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> <a href="mailto:info@mavininfotech.com">{global.Footer.email}</a>
                                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                        <p>
                            <span>
                                <i className='fa fa-map-marker'></i>  {global.Footer.address}
                            </span>
                        </p>
                            </div>

                    </div>
                    <div className='col-md-2  contact-info'>
                        <div className='contact-item'>
                            <h3>Resources</h3>
                            <p>
                               SAP
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                ORACLE
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                Manual Testing
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                Master Data Managment
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                Finance And Accounting
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                Robotic Process Automation
                            </p>
                        </div>
                       
                    </div>
                    <div className='col-md-6'>
                        <div className='row' id="contact">
                            <div className='social'>
                                {global.Footer.copyright}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row' id="contact">
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <i className='fa fa-pinterest'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank'>
                                            <i className='fa fa-linkedin'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           


                </div>
  
                    )
                }}

            </Query>
        )
    }

export default Footer;
