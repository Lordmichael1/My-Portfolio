import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  {
    image: "https://placehold.co/600x400",
    title: "Modern UI",
    description: "Beautiful Tailwind components",
  },
  {
    image: "https://placehold.co/600x400",
    title: "Responsive",
    description: "Works on all screens",
  },
  {
    image: "https://placehold.co/600x400",
    title: "Fast",
    description: "Blazing speed performance",
  },
  {
    image: "https://placehold.co/600x400",
    title: "Customizable",
    description: "Styled your way",
  },
   {
    image: "https://placehold.co/600x400",
    title: "David",
    description: "Styled your way",
  },
   {
    image: "https://placehold.co/600x400",
    title: "Customer",
    description: "Styled your way",
  },
   {
    image: "https://placehold.co/600x400",
    title: "Case",
    description: "Styled your way",
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full px-4 py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Recent Designs
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-xl rounded-xl overflow-hidden ">
                <img src={slide.image} alt={slide.title} className="w-[1037px] h-[450px] object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
