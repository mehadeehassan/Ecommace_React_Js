import React from 'react'
import Banner from '../../assets/website/or.webp';

const BannerImg = {
    background : `url(${Banner})`,
    backgroundSize : "cover",
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    height : "100%",
    width : "100%",

}
const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className="mb-20 bg-gray-100 dark:bg-gray-800 text-white" style={BannerImg}>
        <div className="container mx-auto backdrop-blur-sm py-10">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1 className="text-2xl text-center! sm:text-left sm:text-4xl font-semibold  ">Get Notified About Our New Arrivals</h1>
                <input data-aos="fade-up"
                type="text" placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-full mt-5 focus:outline-none
                 focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 bg-amber-50"
                 />
            </div>
        </div>
    </div>
  );
};

export default Subscribe;
