import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from '../../assets/banner1.png';  // Replace with your actual image file names
import img2 from '../../assets/banner4.jpg';
import img3 from '../../assets/banner5.jpg';
import desco from '../../assets/desco.png';
import wasa from '../../assets/wasa.png';
import nesco from '../../assets/nesco.png';
import titas from '../../assets/titas.png';

const Banner = () => {
  return (
    <section className="banner-section py-12 px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // By default, show 1 slide
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl overflow-hidden"
        breakpoints={{
          // When screen width is 640px or less (mobile)
          640: {
            slidesPerView: 1,  // Show 1 slide per view
            spaceBetween: 10,  // Smaller space between slides on mobile
          },
          // When screen width is 768px or less (tablet)
          768: {
            slidesPerView: 2,  // Show 2 slides per view on tablet
            spaceBetween: 20,  // Adjust space between slides
          },
          // When screen width is 1024px or more (PC)
          1024: {
            slidesPerView: 1,  // Show 3 slides per view on PC
            spaceBetween: 30,  // Adjust space between slides
          },
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[800px]">
            <img src={img1} alt="Banner 1" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[800px]">
            <img src={img2} alt="Banner 2" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-[90vh]">
            <img src={img3} alt="Banner 3" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="container mx-auto text-center inset-shadow-sm shadow-lg  p-10 rounded-lg mt-20 mb-10">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 ">Our Service Providers</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* DESCO Logo */}
      <div className="service-logo">
        <img src={desco} alt="DESCO" className="w-full h-auto object-contain" />
      </div>

      {/* NESCO Logo */}
      <div className="service-logo">
        <img src={wasa} alt="NESCO" className="w-full h-auto object-contain" />
      </div>

      {/* Titas Gas Logo */}
      <div className="service-logo">
        <img src={nesco} alt="Titas Gas" className="w-full h-auto object-contain" />
      </div>

      {/* WASA Logo */}
      <div className="service-logo">
        <img src={titas} alt="WASA" className="w-70 h-auto object-contain" />
      </div>
    </div>
  </div>



  <div className="container mx-auto text-center mt-20 inset-shadow-sm shadow-lg p-10 rounded-lg">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 underline ">How It Works</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="how-step">
        <div className="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
          <i className="fas fa-list-check"></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">Select Your Service</h3>
        <p>Select the utility bill you want to pay. Choose from electricity, water, internet, and more.</p>
      </div>
      <div className="how-step">
        <div className="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
          <i className="fas fa-credit-card"></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">Make a Payment</h3>
        <p>Enter the amount due and choose your preferred payment method. Secure and easy.</p>
      </div>
      <div className="how-step">
        <div className="step-icon bg-blue-600 text-white p-4 rounded-full mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
        <p>Once payment is confirmed, you will receive an instant receipt for your transaction.</p>
      </div>
    </div>
  </div>


  <div className="container mx-auto text-center mt-20 inset-shadow-sm shadow-lg p-10 rounded-lg ">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 underline">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="service-item bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Electricity Bills</h3>
        <p className="text-gray-600">Pay your electricity bills from various providers with ease and security.</p>
      </div>
      <div className="service-item bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Water Bills</h3>
        <p className="text-gray-600">Manage and pay your water bills quickly, without any hassle.</p>
      </div>
      <div className="service-item bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Internet Bills</h3>
        <p className="text-gray-600">Pay your internet and mobile bills directly through our platform.</p>
      </div>
      <div className="service-item bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Gas Bills</h3>
        <p className="text-gray-600">Easily manage your gas bill payments with our service.</p>
      </div>
    </div>
  </div>
  
  <div className="container mx-auto text-center mt-22 inset-shadow-sm p-10 rounded-lg shadow-lg ">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 underline">Customer Reviews</h2>
    <div className="flex justify-between gap-6">
      <div className="review-item bg-blue-50 p-6 rounded-lg shadow-md max-w-sm">
        <p className="text-lg text-gray-700 mb-4">"This platform is so easy to use! I can pay all my bills from one place in just a few clicks!"</p>
        <p className="font-semibold text-blue-700">John Doe</p>
        <span className="text-gray-500">Happy Customer</span>
      </div>
      <div className="review-item bg-blue-50 p-6 rounded-lg shadow-md max-w-sm">
        <p className="text-lg text-gray-700 mb-4">"I love the fact that I can manage all my payments in one place. It saves so much time!"</p>
        <p className="font-semibold text-blue-700">Jane Smith</p>
        <span className="text-gray-500">Loyal User</span>
      </div>
      <div className="review-item bg-blue-50 p-6 rounded-lg shadow-md max-w-sm">
        <p className="text-lg text-gray-700 mb-4">"No more waiting in long queues at utility offices. I can pay everything online now!"</p>
        <p className="font-semibold text-blue-700">Emily Brown</p>
        <span className="text-gray-500">Satisfied Customer</span>
      </div>
    </div>
  </div>

  <div className="container mx-auto text-center mt-20">
    <h2 className="text-3xl font-bold text-blue-800 mb-8 underline">Contact Us</h2>
    <p className="text-lg text-gray-700 mb-8">Have any questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.</p>
    
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 border rounded-lg"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </div>
    </section>
  );
}

export default Banner;
