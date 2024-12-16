import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import './NewHome.scss';
import '../style/page/NewHome.scss';
import CardLayout from '../components/CardLayout';

const NewHome = () => {
 
  return (
    <div>
      {/* 캐러셀 */}
      <div className="carousel-container">
        <Carousel showThumbs={true} infiniteLoop useKeyboardArrows autoPlay={true}>
          <div>
            <img src="https://via.placeholder.com/1024x400" alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/1024x400" alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/1024x400" alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/1024x400" alt="Slide 5" />
            <p className="legend">Slide 5</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/1024x400" alt="Slide 6" />
            <p className="legend">Slide 6</p>
          </div>
        </Carousel>
      </div>
      {/* 캐러셀 끝 */}

      {/* 카드 레이아웃 */}
         <CardLayout />
      {/* 카드 레이아웃 끝 */}
    </div>
  );
};

export default NewHome;
