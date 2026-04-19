import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Products from './components/Products/Products.jsx';
import TopProducts from './components/TopProducts/TopProducts.jsx';
import Banner from './components/Banner/Banner.jsx';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Testimonial from './components/Testimonials/Testimonial.jsx';
import Footer from './components/Footer/Footer.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from './components/Popup/Popup.jsx';


function App() {
  const[orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup); 
  };

  React.useEffect(() => {
    AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
  });
  AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-gray-800 bg-white dark:text-white duration-200">
      <Navbar orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Hero  orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Products orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <TopProducts orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

    </div>
  );
}
export default App;

