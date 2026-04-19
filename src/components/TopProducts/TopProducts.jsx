import React from 'react'
import Img1 from "../../assets/Shirt/s1.png";
import Img2 from "../../assets/Shirt/s3.png";
import Img3 from "../../assets/Shirt/sw1.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img : Img1,
        title : "Men Shirts",
        description : "Made of 100% cotton. Available in different colors. Comfortable to wear. ",
    },
    {
        id: 2,
        img : Img2,
        title : "Formal Wear",
        description : "Made off 100% slick fabric. Available in different colors. Comfortable to wear. ",
    },
    {
        id: 3,
        img : Img3,
        title : "Women Shirts",
        description : "luxurious fabric. Available in different colors. Comfortable to wear. ",
    },
    
];
const TopProducts = ({ handleOrderPopup}) => {
  return (
    <div>
        <div className="container mx-auto ">
            {/* Header Section  */}
            <div className="text-left mb-24 " >
            <p data-aos="fade-up" className="text-sm text-primary " >Top Rated Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold " >Best Products</h1>
            <p data-aos="fade-up" className=" text-xs text-gray-400">My best selling products for you. </p>
            </div>
            {/* Body Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5  place-items-center">
                {ProductsData.map((data) => (
                    <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
                     hover:text-white relative shadow-xl duration-300 group max-w-75 ">
                        {/* image section  */}
                        <div className="h-25">
                            <img data-aos="fade-up" src={data.img} alt="" 
                            className="max-w-35 block mx-auto transform -translate-y-20 group-hover:scale-105  " />
                        </div>
                        {/* details section  */}
                        <div className="p-4 text-center ">
                            <div className="w-full flex items-center justify-center gap-1" >
                              {/* start rating section  */}
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                                <FaStar className="text-yellow-500" />
                            </div>
                            <h1 className=" text-lg font-bold" >{data.title}</h1>
                            <p className=" text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 " >{data.description}</p>
                            <button className="bg-primary hover:scale-105 duration-200 text-white px-4 py-1 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"  onClick={() => handleOrderPopup()}>
                                
                                Order Now
                            </button>
                        </div>
                    </div>  

                ))}
            </div>
        </div>
    </div>
  );
};

export default TopProducts;
