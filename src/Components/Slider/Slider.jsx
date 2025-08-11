import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ImageSlider = ({ images }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        fadeEffect={{
          crossFade: true
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !w-3 !h-3 !bg-white !opacity-50 hover:!opacity-100 !transition-opacity !duration-300"></span>`;
          },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.pagination.el = paginationRef.current;
        }}
        className="h-full w-full rounded-lg overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div
          ref={navigationPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-opacity-70"
        >
          <FaChevronLeft />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:bg-opacity-70"
        >
          <FaChevronRight />
        </div>

        {/* Pagination */}
        <div
          ref={paginationRef}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2"
        ></div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;