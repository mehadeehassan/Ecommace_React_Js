import React from 'react'
import footerLogo from '../../assets/Logo.png';
import Banner from '../../assets/f.jpg';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { FaG } from 'react-icons/fa6';
const BannerImg = {
    background : `url(${Banner})`,
    backgroundSize : "cover",
    backgroundPosition : "bottom",
    backgroundRepeat : "no-repeat",
    height : "100%",
    width : "100%",

}

const FooterLinks = [
    {
        title : "Home",
        link : "#"
    },
    {

        title : "About",
        link : "#"
    },
    {

        title : "Contact",
        link : "#"
    },
    {

        title : "Blog",
        link : "#"
    },
]

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white ">
        <div className="container mx-auto  ">
            <div data-aos="zoom-in" className="grid  md:grid-cols-3 sm:grid-cols-2 pb-44 pt-4">
                {/* company details */}
                <div className="mt-6">
                    <h2 className="sm:text-3xl text-xl font-bold mb-1 sm:text-left text-justify flex items-center" ><img src={footerLogo} alt="" className="w-9 h-9" />
                        Shops</h2>
                    <p className="text-gray-200 text-sm font-bold sm:text-left p-2 text-justify">My company is a leading provider of high-quality products and services.</p>

                </div>
                {/* Footer Links  */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-lg font-bold mb-3  text-justify">Impotent Links</h1>
                           <ul className=" flex flex-col gap-3">
                            {FooterLinks.map((link) => (
                              <li key={link.title} className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                <span>{link.title}</span>

                              </li> 
                           ))}
                           </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4 ">
                            <h1 className="sm:text-xl text-lg font-bold mb-3  text-justify">Links</h1>
                           <ul className=" flex flex-col gap-3">
                            {FooterLinks.map((link) => (
                              <li key={link.title} className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                                <span>{link.title}</span>
                              </li> 
                            ))}
                           </ul>
                        </div>
                    </div>
                    {/* social links  */}
                    <div>
                        <div className="flex gap-2 items-center mt-6">
                            <a href="#">
                            <FaInstagram className="text-3xl " />
                            </a>
                            <a href="#">
                            <FaFacebook className="text-3xl" />
                            </a>
                            <a href="#">
                            <FaGithub className="text-3xl" />
                            </a>
                            <a href="#">
                            <FaLinkedin className="text-3xl" />
                            </a>
                        </div>
                        <div className="mt-6">
                            <div className="flex gap-3 items-center">
                                <FaLocationArrow className="text-xl" />
                                <p className="text-gray-200">Nairobi, Kenya</p> 
                            </div>
                            <div className="flex gap-3 items-center mt-4">
                                <FaMobileAlt className="text-xl" />
                                <p className="text-gray-200">+254 123 456 789</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
