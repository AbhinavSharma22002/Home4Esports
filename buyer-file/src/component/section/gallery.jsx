import { Component, useState } from "react";


let GalleryData = [
    {
        id: 116,
        image: 'assets/images/gallery/16.jpg',
        title: 'KHELSHALA',
        catagory:'khelshala',
    },
    {
        id: 18,
        image: 'assets/images/gallery/18.jpg',
        title: 'KHELSHALA',catagory:'khelshala',
    },
    {
        id: 21,
        image: 'assets/images/gallery/21.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 22,
        image: 'assets/images/gallery/22.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 23,
        image: 'assets/images/gallery/23.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 24,
        image: 'assets/images/gallery/24.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 25,
        image: 'assets/images/gallery/25.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 26,
        image: 'assets/images/gallery/26.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 27,
        image: 'assets/images/gallery/27.jpg',
        title: 'CCE',catagory:'event',
    },
      {
        id: 28,
        image: 'assets/images/gallery/28.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 29,
        image: 'assets/images/gallery/29.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 30,
        image: 'assets/images/gallery/30.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 31,
        image: 'assets/images/gallery/31.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 32,
        image: 'assets/images/gallery/32.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 33,
        image: 'assets/images/gallery/33.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 34,
        image: 'assets/images/gallery/34.jpg',
        title: 'CCE',catagory:'event',
    },
      {
        id: 35,
        image: 'assets/images/gallery/35.jpg',
        title: 'CCE',catagory:'event',
    },
    {
        id: 36,
        image: 'assets/images/gallery/36.jpg',
        title: 'CCE',catagory:'event',
    },
      {
        id: 37,
        image: 'assets/images/gallery/37.jpg',
        title: 'CCE',catagory:'event',
    },
]



const GallerySection = () => {

    const [items, setItems] = useState(GalleryData);
    const filterItem = (categItem) => {
        const updateItems = GalleryData.filter((curElem) => {
            return curElem.catagory === categItem;
        });
        setItems(updateItems);
    }

    return (
        <div className="gallery-section padding-top padding-bottom">
            <div className="container">
                <ul className="gallery-filter">
                    
                   
                    <li onClick={() => setItems(GalleryData) }><span className="category">All Photos <span className="itemcount">19</span></span></li>
                    <li onClick={() => filterItem('khelshala') } ><span className="category">KHELSHALA <span className="itemcount">2</span></span> </li>
                   <li onClick={() => filterItem('event') } ><span className="category">EVENTS <span className="itemcount">17</span></span> </li>
                  {/*<li onClick={() => filterItem('uplay') } ><span className="category">uplay</span> <span className="itemcount">02</span></li> */}
                </ul>
                <div className="row g-4 masonary-gallery">
                    {
                        items.map((elem) => {
                        const { id, image, title,catagory} = elem;
                            return (
                                <div className="col-lg-4 col-sm-6 col-12 masonary-item" key={id}>
                                    <div className="gallery-item">
                                        <div className="gallery-thumb">
                                            <img src={image} alt="gallery" />
                                        </div>
                                        <div className="gallery-content">
                                            <a href={image} className="img-pop" target="_blank"><i className="icofont-eye"></i></a>
                                            <h3 className="title">{title}</h3>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
 
export default GallerySection;

