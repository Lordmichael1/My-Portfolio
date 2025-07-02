import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463032/20250605_112102-01_wmuhad.jpg",
    title: "Modern UI",
    description: "Beautiful Tailwind components",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463046/20250605_010306-01_p0vjgq.jpg",
    title: "Responsive",
    description: "Works on all screens",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463054/20250227_133912-01_m0aoft.jpg",
    title: "Fast",
    description: "Blazing speed performance",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463069/20250527_132645-01_qeoetf.jpg ",
    title: "Customer",
    description: "Styled your way",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463089/20250605_002307-01_xfckbq.jpg",
    title: "Case",
    description: "Styled your way",
  },
  {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463107/20250403_204306-01_fxrty6.jpg",
    title: "Case",
    description: "Styled your way",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463126/20250329_081859-01_nr1ptt.jpg",
    title: "Case",
    description: "Styled your way",
  },
   {
    image: "https://res.cloudinary.com/dm3j8ksa3/image/upload/v1751463158/20250613_231833-01_e0des2.jpg",
    title: "Case",
    description: "Styled your way",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full px-4 py-10 bg-gradient-to-l from-blue-100 to-grey-100">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Recent Designs
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl rounded-xl overflow-hidden ">
                <img src={slide.image} alt={slide.title} className="w-[1040px] h-[450px] object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
