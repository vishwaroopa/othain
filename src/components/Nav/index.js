import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import { useParams } from "react-router";
import Articles from "../../components/Articles";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/articles";
import CATEGORIES_QUERY from "../../queries/category/categories";
import logo from '../../assets/logo.png';
function showAlert() {
    document.getElementById("bs-example-navbar-collapse-1").style.display = "none";
}
function showAlert1() {
    document.getElementById("bs-example-navbar-collapse-1").style.display = "block";
    document.getElementById("bs-example-navbar-collapse-1").style.height = "auto";
}
function sayHello(test) {

}

class Nav extends React.Component {
    render() {
        return (
            <div>
                <Query query={CATEGORIES_QUERY} id={null}>
                    {({ data: { menuItems } }) => {
                        return (

                            <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
                                <div className='container'>
                                    <div className='navbar-header'>
                                        <button onClick={showAlert1}
                                            type='button'
                                            className='navbar-toggle collapsed'
                                            data-toggle='collapse'
                                            data-target='#bs-example-navbar-collapse-1'
                                        >
                                            {' '}
                                            <span className='sr-only'>Toggle navigation</span>{' '}
                                            <span className='icon-bar'></span>{' '}
                                            <span className='icon-bar'></span>{' '}
                                            <span className='icon-bar'></span>{' '}
                                        </button>
                                        <Link to="/"><img src={logo} /></Link>
                                    </div>

                                    <div
                                        className='collapse navbar-collapse'
                                        id='bs-example-navbar-collapse-1'
                                    >
                                        <ul className='nav navbar-nav navbar-right'>
                                            {menuItems.nodes.map((node, i) => {
                                                var person = node.childItems.nodes.length;
                                                return (
                                                    <li className="nav-item dropdown">
                                                        <Link
                                                            to={node.path}
                                                            className="uk-link-reset"
                                                        >
                                                            {node.label}
                                                        </Link>
                                                        {person > 0 && (
                                                            <ul className="dropdown-menu">
                                                            {node.childItems.nodes.map(function (articles, i) {
                                                                return <li > <Link
                                                                    to={`${articles.path}`}
                                                                    className="dropdown-item"
                                                                >{articles.label}</Link></li>
                                                            })}
                                                            </ul>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                        );
                    }}
                </Query>
            </div>
        );
    };
}
export default Nav;
