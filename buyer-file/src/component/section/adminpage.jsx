import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";


let AdminPageData = [
    {
        id: 1,
        image: 'assets/images/game/01.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
        icon: [
            {
                iconName: 'icofont-star',
            },
        ],
        catagory: 'collection-one',
    },
    {
        id: 2,
        image: 'assets/images/game/02.png',
        alt: 'game list name',
        title: 'Witch Sports Team',
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
                        <li onClick={() => setItems(AdminPageData) }>All matches</li>
                        <li onClick={() => filterItem('collection-one') }>today’s matches</li>
                        <li onClick={() => filterItem('collection-two') }>upcoming matches</li>
                        <li onClick={() => filterItem('collection-three') }>matche results</li>
                    </ul>
                    <div className="row g-4 justify-content-center collection-grid  GameListStyle">
                        {
                            items.map((elem) => {
                            const { id, image, title, alt } = elem;
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={id}>
                                        <div className="game-item item-layer">
                                            <div className="game-item-inner">
                                                <div className="game-thumb">
                                                    <img src={image} alt={alt} />
                                                </div>
                                                <div className="game-overlay">
                                                    <h4><Link to="/team-single">{title}</Link> </h4>
                                                    <Rating />
                                                </div>
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
 
//export default AdminPage;

