import React from "react";
import "../../styles/carousel.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

function Carousel() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div className="slider">
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}>
        <div data-src="https://i.sha.com.tr/c/80/1682x948/s/dosya/haber/trendyol-super-lig-2023-2024-s_1689710582_Q1wz84.jpg">
          <div className="slide-content">
            <div className="slide-text">Yeni sezonun fikstürü çekildi</div>
          </div>
        </div>
        <div data-src="https://iaftm.tmgrup.com.tr/bdd09d/1200/627/0/230/1600/1066?u=https://iftm.tmgrup.com.tr/2022/07/08/turkiye-futbol-liglerinin-resmi-top-sponsoru-puma-oldu-1657266650532.jpeg">
          <div className="slide-content">
            <div className="slide-text">2023-2024 sezonu topu belli oldu</div>
          </div>
        </div>
        <div data-src="https://www.tff.org/Resources/TFF/FileGallery/9d983fd782b146be982af5c11d954881.jpeg">
          <div className="slide-content">
            <div className="slide-text">
              Süper Lig'in isim sponsoru 'Trendyol' oldu
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Carousel;
