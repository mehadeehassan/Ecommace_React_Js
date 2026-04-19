import React from 'react'
import Image1 from "../../assets/Hero/w.png";
import Image2 from "../../assets/Hero/wife.png";
import Image3 from "../../assets/Hero/sale1.png";
import SliderImport from "react-slick";
const Slider = SliderImport.default ? SliderImport.default : SliderImport;

const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Man's wear",
      description: "Discover the latest trends in   men's fashion with our exclusive collection. Shop now and enjoy up to 50% off on all men's wear.",

    },
    {
      id: 2,
      img: Image2,
      title: "Upto 50% off on all Women's wear",
      description: "Discover the latest trends in women's fashion with our exclusive collection. Shop now and enjoy up to 50% off on all women's wear.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all sale ",
      description: "Don't miss out on our incredible sale! Enjoy up to 70% off on a wide range of products. Shop now and grab the best deals before they're gone!",
    },
]
const Hero = ( { handleOrderPopup}) => {
    console.log(Slider);
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className="relative overflow-hidden min-h-137.5 sm:min-h-162.5  bg-gray-100 flex justify-center items-center dark:bg-gray-900 dark:text-white" >
            {/* background pattern  */}
            <div className= "h-175 w-175 bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 ">
            </div>
            {/* hero section  */}
            <div className="container mx-auto pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text content section */}
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                     className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
                                        {data.title}
                                    </h1>
                                    <p 
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="200"
                                    className="text-gray-600 dark:text-gray-300">
                                        {data.description}
                                    </p>
                                    <div data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="300">
                                        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary hover:scale-105 transition duration-200 w-max" onClick={() => handleOrderPopup()}>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* image section  */}
                                <div 
                                    data-aos="zoom-in "
                                    data-aos-once="true"
                                    className="order-1 sm:order-2 ">
                                    <div className="relative z-10">
                                        <img src={data.img} alt="Hero Image"
                                            className="w-80 h-80 sm:h-112.5 sm:w-112.5 sm:scale-125 lg:scale-120 object-contain mx-auto "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
