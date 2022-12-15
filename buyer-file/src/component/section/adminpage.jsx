import { Component, useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rating from "./rating";
import ProductMgmt from "../../pages/productmgmt";


let AdminPageData = [
    {
        id: 1,
        image: 'assets/images/game/01.png',
        alt: 'Product Management',
        title: '     Products Mgmt',
        catagory: 'collection-one',
    },
    {
        id: 2,
        image: 'assets/images/game/02.png',
        alt: 'Match Management',
        title: 'Matches Mgmt',
        catagory: 'collection-two',
    },
]



const AdminPage = () => {

    const [items, setItems] = useState(AdminPageData);
    const filterItem = (categItem) => {
        const updateItems = AdminPageData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }
    return (
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <ul className="collection-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">  
                        <li onClick={() => setItems(AdminPageData) }>All Managements</li>
                        <li onClick={() => filterItem('collection-one') }>Product Management</li>
                        <li onClick={() => filterItem('collection-two') }>Matches Management</li>
                    </ul>
                    <div className="row g-4 justify-content-center collection-grid  GameListStyle">
                        {
                            items.map((elem) => {
                            const { id, image, title, alt } = elem;
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                                        
                                            <div className="game-item-inner">
                                                <div className="game-thumb">
                                                <center> <img src={image} alt={alt} /></center>
                                                </div>
                                                <div className="game-overlay">
                                                    <center><h4><Link to={ProductMgmt}>{title}</Link> </h4></center>
                                                </div>
                                            </div>
                                        </div>
                               
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            
        </section>

    );
}
 export default AdminPage;

