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
                {({ data: { post } }) => {

                    return (
                        <div>

                            <div className="pages">

                                <div id="page-content" className="content" dangerouslySetInnerHTML={{
                                    __html: post.content
                                }}></div>
                            </div>

                        </div>
                    );
                }}

            </Query>
        )
    }

export default Footer;
