import { Component, Fragment,useState,useEffect } from "react";
import Rating from "./rating";
import { Link } from 'react-router-dom';

const subtitle = "Crowd Control Esports t-shirt’s";
const title = "explore our products";


/*let ProductListContent = [
    {
        imgUrl: 'assets/images/product/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Crowd Control Esports T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Crowd Control Esports T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Crowd Control Esports T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/04.jpg',
        imgAlt: 'Product Thumb',
        title: 'Crowd Control Esports T-Shirt Here',
        price: '$380.00',
    },
]
*/
const ProductSection = (props)=>{
    const [ProductListContent,setProductListContent] = useState([]);
    
    useEffect(()=>{
        const someFunc = async ()=>{
            let array = [];
                const requestOptions = {
                method: "GET"
            };
            const response = await fetch(
                `http://localhost:3001/api/products/getAll`,
                requestOptions
            )
           
            if(response.status===200){
                const data = await response.json();
                console.log(data);

                for(let i = 0;i<data.length;i++){
                    array.push({
                        imgUrl: `${data[i].image}`,
                        productTitle: `${data[i].title}`,
                        productPrice: `${data[i].price}`,
                        productSize: `${data[i].size}`,
                        to: `${data[i]._id}`
                    });
                }
            }
         console.log(array);  
            setProductListContent(array);
            console.log(ProductListContent);
    };
            someFunc();
    },[]);

return(
    <>
             <div className="product-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center">
                            {ProductListContent.map((val, i) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="product-item">
                                        <div className="product-inner">
                                            <div className="product-thumb">
                                                <img src={val.imgUrl} className="w-100" />
                                            </div>
                                            <div className="product-content text-center p-3">
                                                <Link to="/"><h5 className="product-title">{val.productTitle}</h5></Link>
                                                <h5 className="product-price"><b>Price : </b>{val.productPrice}</h5>
                                                <h5 className="product-price"><b>Size : </b>{val.productSize}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </>
);

}

/*class ProductSection extends Component {
    render() { 
        return (
   
        );
    }
}*/
 
export default ProductSection;