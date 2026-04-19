import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({orderPopup, setOrderPopup}) => {
  return (
    <>
       {orderPopup &&(
           <div className="popup">
               <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
                   <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-800 rounded-md duration-200 w-75 ">
                      {/* header  */}
                      <div className="flex justify-between items-center">
                        <div >
                            <h1>Order Now</h1>
                        </div>
                        <div>
                            <IoCloseOutline
                            className="text-2xl cursor-pointer hover:text-orange-500"
                            onClick={() => setOrderPopup(false)}
                            />
                        </div>
                      </div>
                      {/* from section  */}
                        <div className="mt-4">
                            <input
                            type="text"
                            placeholder="Name"
                            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark;bg-gray-800 px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                            />
                            <input
                            type="email"
                            placeholder="Email"
                            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark;bg-gray-800 px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                            />
                            <input
                            type="address"
                            placeholder="Address"
                            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark;bg-gray-800 px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                            />
                        </div>

                        <button className="w-full rounded-full bg-orange-400 hover:bg-orange-500 text-white py-1.5 mt-4">Order Now</button>
                   </div>
               </div>
           </div>
        )}
    </>
    );
};

export default Popup;
