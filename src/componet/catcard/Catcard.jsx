import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Catcard.scss';

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const images = [
    {
      id: 1,
      title: "AI Artists",
      desc: "Add talent to AI",
      img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      title: "Logo Design",
      desc: "Build yor brand",
      img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      title: "WordPress",
      desc: "Customize your site",
      img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      title: "Voice Over",
      desc: "Share your message",
      img: "https://images.pexels.com/photos/7608079/pexels-photo-7608079.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 5,
      title: "Video Explainer",
      desc: "Engage your audience",
      img: "https://images.pexels.com/photos/13388047/pexels-photo-13388047.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    }
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='catCard'>
            <div className="container">
              <img 
                className={`photo ${currentSlide === index ? 'active' : ''}`}
                src={image.img}
                alt={`Slide ${index + 1}`}
              />
              <span className="desc-overlay">{image.desc}</span>
              <span className="title-overlay">{image.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
