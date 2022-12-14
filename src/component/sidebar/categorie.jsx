import { Component } from "react";

const title = "All Categories";


class Categorie extends Component {
    render() { 
        return (
            <div className="widget shop-widget">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <div className="widget-wrapper">
                    <ul className="shop-menu lab-ul">
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Code Optimization</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Monitoring Ranking</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Target Strategy</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Nap Syndication</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">SEO Support</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Email Marketing</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                        <li className="catmenu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Engine Marketing</a>
                            <ul className="shop-submenu lab-ul dropdown-menu">
                                <li><a href="#0">All Products</a></li>
                                <li><a href="#0">Seo</a></li>
                                <li><a href="#0">Marketing</a></li>
                                <li><a href="#0">Email Marketing</a></li>
                                <li><a href="#0">Seo Support</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Categorie;