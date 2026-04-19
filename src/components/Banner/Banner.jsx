import React from 'react'
import BannerImg from '../../assets/woman/b4.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import { BiSolidOffer } from 'react-icons/bi';

const Banner = () => {
  return (
    <div className="min-h-137.5 flex justify-center items-center py-12 sm:py-0"> 
        <div className="container mx-auto ">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* image section */}
                <div data-aos="zoom-in">
                    <img src={BannerImg} alt=""
                    className=" max-w-100 h-88 w-full mx-auto shadow-[-20px_20px_35px_-10px_rgba(0,0,0,0.8)] object-cover rounded-xl"
                    /> 
                </div>
                {/* text section */}
                <div  className="flex flex-col justify-center gap-6 sm:pt-0 ">
                    <h1 className="text-2xl sm:text-3xl font-bold" >Winter Sale upto 50% off</h1>
                    <p className="text-gray-600 text-sm tracking-wide leading-5 ">All the best products for you in this season </p>
                    <div>
                        <div data-aos= "fade-up"
                         className="flex items-center gap-4 ">
                            <GrSecure
                            className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                            />
                            <p>Quality Products</p>
                        </div>
                        <div data-aos= "fade-up"
                         className="flex items-center gap-4 mt-4">
                            <IoFastFood
                            className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 -100 dark:bg-orange-400"
                            />
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos= "fade-up"
                         className="flex items-center gap-4 mt-4">
                            <GiFoodTruck
                            className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"
                            />
                            <p>Easy Payment Method</p>
                        </div>
                        <div data-aos= "fade-up"
                         className="flex items-center gap-4 mt-4">
                            <BiSolidOffer
                            className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"
                            />
                            <p>Get Offers</p>    

                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
};

export default Banner;
