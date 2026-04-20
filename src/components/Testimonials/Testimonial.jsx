import React from 'react';
import SliderImport from "react-slick";
// Slick carousel styles (Ensure these are imported in your App.js or index.js)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderImport.default ? SliderImport.default : SliderImport;

const TestimonialData = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, Company A",
        testimonial: "Good service and great products. I highly recommend this company. Thanks!",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Marketing Manager, Company B",
        testimonial: "Service is outstanding! Highly satisfied with the quality of the products.",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "CTO, Company C",
        testimonial: "Great products and excellent customer service. Highly recommended!",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "Product Manager, Company D",
        testimonial: "Excellent service and great products. Will definitely come back!",
        img: "https://randomuser.me/api/portraits/women/4.jpg", 
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p data-aos="fade-up" className="text-sm font-semibold text-primary uppercase tracking-widest">
                        Testimonials
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold mt-2 dark:text-white">
                        What Our Clients Say
                    </h1>
                    <div data-aos="fade-up" className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Slider Section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className="py-4">
                                <div className="bg-white dark:bg-gray-800 p-6 mx-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    
                                    {/* Image Section */}
                                    <div className="mb-4">
                                        <img 
                                            src={data.img} 
                                            alt={data.name} 
                                            className="w-16 h-16 object-cover rounded-full border-4 border-primary/20" 
                                        />
                                    </div>

                                    {/* Quote Icon (Simple & Modern) */}
                                    <div className="absolute top-4 right-6 text-gray-600 dark:text-gray-400 text-6xl font-serif">
                                        ,,
                                    </div>

                                    {/* Content Section */}
                                    <div className="space-y-3">
                                        <p className="text-sm text-gray-600 dark:text-gray-300 italic line-clamp-3">
                                            "{data.testimonial}"
                                        </p>
                                        <div>
                                            <h2 className="text-lg font-bold dark:text-white leading-tight">
                                                {data.name}
                                            </h2>
                                            <p className="text-xs text-primary font-medium uppercase tracking-tighter">
                                                {data.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;