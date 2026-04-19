import React from 'react'
import SliderImport from "react-slick";
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
        testimonial: "Service is outstanding! Highly satisfied with the quality of the products. Will definitely come back! Thank you!",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "CTO, Company C",
        testimonial: "Great products and excellent customer service. Highly recommended! Thank you! ",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        position: "Product Manager, Company D",
        testimonial: "Excellent service and great products. Will definitely come back! Thank you! ",
        img: "https://randomuser.me/api/portraits/women/4.jpg", 
    }, 
    {
        id: 5,
        name: "David Wilson",
        position: "Sales Manager, Company E",
        testimonial: "Great products and excellent customer service. Highly recommended! Thank you! ",
        img: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 6,
        name: "Olivia Martinez",
        position: "Marketing Manager, Company F",
        testimonial: "Excellent service and great products. Will definitely come back! Thank you! ",
        img: "https://randomuser.me/api/portraits/women/6.jpg",
    },

];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div className="py-10 mb-10">
        <div className="container mx-auto">
         {/* header section  */}
           <div className="text-center mb-10 max-w-150 mx-auto" >
                <p data-aos="fade-up" className="text-sm text-primary " >What our customers say about us.</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold " >Testimonial</h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">Review from our customers about our products and services.</p>
            </div>
            {/* Testimonial Cards  */}
            <div data-aos="zoom-in">
                <Slider {...settings} >
                    {TestimonialData.map((data) => (
                        <div key={data.id} className="my-6">
                            <div key={data.id}  className="flex flex-col gap-4 shadow-md py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative min-h-70 ">
                                <div className="mb-4" >
                                    <img src={data.img} alt="" className="w-20 h-20 object-cover rounded-full" />
                                </div>
                                <div className="flex flex-col items-start gap-2" >
                                    <div className="space-y-2" >
                                        <p className="text-xs text-gray-400 leading-relaxed min-h-15" >{data.testimonial}</p>
                                        <h1 className="text-xl font-bold text-black/80 dark:text-light" >{data.name}</h1> 
                                        <p className="text-xs text-gray-400" >{data.position}</p>
                                    </div>
                                </div>
                                <p className="text-black/20  text-9xl absolute top-0 right-4 font-serif">,,</p>
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
