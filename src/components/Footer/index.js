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
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='section-title'>
                                <Link to="/"><img src={imageUrl} alt="logo" /></Link>
                                <p>
                                    {global.Footer.content}

                                    <br /><br />{global.Footer.copyright}
                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-md-3 col-md-offset-1 contact-info'>
                        <div className='contact-item'>
                            <h3>Get in touch</h3>
                            <p>
                                <span>
                                    <i className='fa fa-map-marker'></i>  {global.Footer.address}
                               </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> {global.Footer.number}<br/>

                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-fax'></i> {global.Footer.number1}<br />
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-envelope-o'></i> {global.Footer.email}
                </span>
                            </p>
                        </div>
                        <div className='contact-item'>
                            <p>
                                <span>
                                    <i className='fa fa-phone'></i> {global.Footer.duns}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='row' id="contact">
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className='fa fa-youtube'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
                <div className='container text-center'>
                    <p>
                       footer content
                    </p>
                </div>
            </div>
        </div>
                    )
                }}

            </Query>
        )
    }

export default Footer;
