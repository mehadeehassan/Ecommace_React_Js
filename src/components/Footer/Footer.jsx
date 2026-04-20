import React from 'react'
import footerLogo from '../../assets/Logo.png';

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        //    background color

        <div data-aos="fade-up" className="bg-gray-950 text-white border-t border-gray-800">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 pb-20 pt-10">
                    
                    {/* Company Details */}
                    <div data-aos="zoom-in" className="mt-6 px-4">
                        <h2 className="sm:text-3xl text-xl font-bold mb-3 sm:text-left text-justify flex items-center gap-2">
                            <img src={footerLogo} alt="Logo" className="w-9 h-9" />
                            Shops
                        </h2>
                        <p className="text-gray-400 text-sm font-medium sm:text-left text-justify leading-relaxed">
                            My company is a leading provider of high-quality products and services. We strive to provide the best experience for our customers.
                        </p>
                    </div>

                    {/* Footer Links Section */}
                    <div data-aos="zoom-in" className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        
                        {/* Important Links Column */}
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-lg font-bold mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Home</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>About</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Contact</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Blog</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Other Links */}
                        <div data-aos="zoom-in">
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-lg font-bold mb-3">Quick Links</h1>
                                <ul className="flex flex-col gap-3">
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Services</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Privacy Policy</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>Terms & Conditions</span>
                                    </li>
                                    <li className="cursor-pointer text-gray-400 hover:text-orange-400 hover:translate-x-1 duration-300">
                                        <span>FAQ</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div data-aos="zoom-in" className="px-4">
                            <div className="flex gap-4 items-center mt-8">
                                <a href="#" className="text-gray-400 hover:text-orange-400 duration-300">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 duration-300">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white duration-300">
                                    <FaGithub className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 duration-300">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="flex gap-3 items-center">
                                    <FaLocationArrow className="text-orange-400" />
                                    <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <FaMobileAlt className="text-orange-400" />
                                    <p className="text-gray-400 text-sm">+254 123 456 789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright Section  */}
                <div className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
                    © 2026 SHOPS. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;