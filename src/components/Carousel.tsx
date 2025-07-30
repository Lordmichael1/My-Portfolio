import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463032/20250605_112102-01_wmuhad.jpg",
    name: "black",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463046/20250605_010306-01_p0vjgq.jpg",
    name: "white",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463054/20250227_133912-01_m0aoft.jpg",
    name: "black",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463069/20250527_132645-01_qeoetf.jpg ",
    name: "white",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463089/20250605_002307-01_xfckbq.jpg",
    name: "black",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463107/20250403_204306-01_fxrty6.jpg",
    name: "white",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463126/20250329_081859-01_nr1ptt.jpg",
    name: "black",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463158/20250613_231833-01_e0des2.jpg",
    name: "white",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1753838533/20250226_145600-01_pclqa4.jpg",
    name: "black",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1753834605/729017c8-e2f6-40e7-9b21-92d301f1fc35.png",
    name: "white",
  }
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full px-4 py-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 md:text-5xl">
        Recent Designs
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full mb-6"></div>
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },   // small phones
            640: { slidesPerView: 1 },   // larger phones
            768: { slidesPerView: 2 },   // tablets
            1024: { slidesPerView: 3 },  // desktops
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl rounded-xl overflow-hidden">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full md:w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
