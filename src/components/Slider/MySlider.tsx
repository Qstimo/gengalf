import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cls from './MySlider.module.scss'

interface SliderProps {
    slides: JSX.Element[]; // Принимаем массив JSX элементов для слайдов
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,

            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                autoplay: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,

            }
        }
    ]
};

const MySlider: React.FC<SliderProps> = ({ slides }) => {
    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div className={cls.cardSlider} key={index}>{slide}</div>
            ))}
        </Slider>
    );
}

export default MySlider;