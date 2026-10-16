import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "./TrandingSlider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Reveal from "../components/Reveal";

const images = [
  "/images/slider/DSC_4959.webp",
  "/images/slider/DSC_5224.webp",
  "/images/slider/DSC_5318.webp",
  "/images/slider/DSC_6757.webp",
  "/images/slider/DSC_6814.webp",
  "/images/slider/DSC_6847.webp",
  "/images/slider/DSC_6856.webp",
];

const TrandingSlider = () => {

  const pStyle = {
          background: "none",
          color: "#555",
        };

  return (
    <Reveal className="container" style={{ textAlign: "center", padding: "20px" }}>
      <h1
        style={{ color: "#555", fontFamily: "Oswald, Arial", fontSize: "24px" }}
      >
        OUR PRE-WEDDING GALLERY
      </h1>
      <p style={{ ...pStyle, fontFamily: "Caveat, Arial" }}>
        Our photoshoot took place at <br />
        Angkor Wat, Siem Reap
      </p>
      <Swiper
        className="tranding-slider"
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="tranding-slide">
            <div className="tranding-slide-img">
              <img
                src={img}
                alt={`PIC ${index + 1}`}
                loading="lazy"
                decoding="async"
                style={{ contentVisibility: "auto" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p style={{ ...pStyle, fontFamily: "Oswald, Arial", fontSize: "13px" }}>
        Swipe the photo left or right to see more.
      </p>
      <p style={{ ...pStyle, fontFamily: "Kdam Thmor Pro", fontSize: "13px" }}>
        អូសលើរូបទៅឆ្មេងឬស្ដាំដើម្បីមើលរូបផ្សេងទៀត
      </p>
    </Reveal>
  );
};

export default TrandingSlider;
