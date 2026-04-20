import React from 'react'
import Img1 from "../../assets/woman/w1.png";
import Img2 from "../../assets/woman/w2.png";
import Img3 from "../../assets/woman/w3.avif";
import Img4 from "../../assets/woman/w4.jpg";
import Img5 from "../../assets/woman/w5.jpg";
import Img6 from "../../assets/woman/w6.jpg";
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title : "Women Western",
        price : "$500",
        rating : 5.0,
        color : "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title : "Women Formal",
        price : "$600",
        rating : 4.5,
        color : "Black",
        aosDelay: "100",
    },
    {
        id: 3,
        img: Img3,
        title : "Women Casual",
        price : "$700",
        rating : 4.4,
        color : "Blue",
        aosDelay: "200",
    },
    {
        id: 4,
        img: Img4,
        title : "Women Party",
        price : "$800",
        rating : 4.8,
        color : "Red",
        aosDelay: "300",
    },
    {
        id: 5,
        img: Img5,
        title : "Women T-Shirt",
        price : "$900",
        rating : 4.2,
        color : "Green",
        aosDelay: "400",
    },
    {
        id: 6,
        img: Img6,  
        title : "Women Jeans",
        price : "$1000",
        rating : 4.5,
        color : "Yellow",
        aosDelay: "500",
    },
];
const Products = ( {handleOrderPopup}) => {
  return (
    <div className=" mt-14 mb-12" >
        <div className="container mx-auto " >
            {/* Header Section */}
            <div className="text-center mb-10 max-w-150 mx-auto" >
                <p data-aos="fade-up" className="text-sm text-primary " >Top Selling Products for you</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold " >Top Selling Products</h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">My best selling products for you</p>
            </div>
            {/* Body Section  */}
            <div>
                <div className=" grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 place-items-center" >
                  {/* card section  */}
                   {ProductsData.map((data) => (
                    <div 
                      data-aos="fade-up"  
                      data-aos-delay={data.aosDelay}
                      key={data.id}
                      className="space-y-3">
                      <img 
                      src={data.img}
                      alt=""
                      className="h-55 w-38 object-cover rounded-md"
                      />
                        <div>
                            <h3  className="font-semibold">{data.title}</h3>
                            <p className="text-gray-500 text-sm">{data.color}</p>
                            {/* <p className="text-gray-500 text-sm"> {data.aosDelay}</p> */}
                            <p className="text-gray-500 text-sm">{data.price}</p>
                            
                            <div className="flex items-center mt-1" >
                                <FaStar className="text-yellow-400" />
                                <span className="text-sm text-gray-500 ml-1">{data.rating}</span>
                            </div>
                            <button className="bg-primary hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"  onClick={() => handleOrderPopup()}>
                                    
                                Order Now
                            </button>
                        </div>
                    </div>
                   ))}
                </div>
                {/* view all products button */}
                <div className="flex justify-center" >
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md hover:bg-primary/80 transition duration-300" >
                        View All Products
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Products;
