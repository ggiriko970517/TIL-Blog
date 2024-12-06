import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/ExampleCarouselImage';
import BlogCard from '../components/BlogCard';
import './Home.scss';


function Home() {
  return (
    <div>

      {/* 캐러셀 배너 */}

      <div clasName="carousel"
>
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage 
        text="First slide" 
        src="https://static.vecteezy.com/system/resources/thumbnails/025/721/242/small_2x/travel-man-mountain-nature-yellow-young-water-lake-hiking-back-cape-generative-ai-photo.jpg"
        style={{height:'400px', objectFit:'cover'}}
        />
        <Carousel.Caption>
          <h3>계곡진 산을 따라 달리는 여행</h3>
          <p>캠프용 차를 몰고 가는 어느 한 계곡...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
        text="Second slide" 
        src="https://static.vecteezy.com/system/resources/thumbnails/047/071/919/small_2x/three-people-with-backpacks-on-a-cliff-near-the-ocean-photo.jpeg"
        />
        <Carousel.Caption>
          <h3>바다가 보이는 여행</h3>
          <p>푸른 바다가 보이는 이색적인 공간...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage 
        text="Third slide" 
        src="https://static.vecteezy.com/system/resources/thumbnails/047/736/753/small_2x/happy-man-tourist-theme-of-travel-and-recreation-photo.jpg"
        />
        <Carousel.Caption>
          <h3>폭포 아래서</h3>
          <p>
            폭포 아래서 찍는 나만의 셀카...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <hr />


    {/* 블로그 카드 */}

  <div className="blog-card row g-4">
    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://www.lotteintl.co.kr/resource/img/intro/livestock/81/300x180-%EA%B8%B0%EC%A1%B4.jpg"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://static.vecteezy.com/system/resources/thumbnails/039/069/357/small_2x/ai-generated-various-fast-food-items-isolated-on-white-background-fried-chicken-fries-pizza-sandwiches-chicken-nuggets-eggs-and-bacon-shawarma-prawns-fast-food-junk-food-set-closeup-shot-photo.jpeg"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://www.shutterstock.com/image-illustration/economy-south-korea-falling-down-260nw-2250870673.jpg"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrBUGM6qsXy4HcDsf7zGMOeCCiBZ2DvoeiQw&s"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_ql-7vxh-qcu5mnF4hWac11PUYtiRPF3sw&s"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsKc4eaF5-PxwmWviP43yAxyD7M2Ndav0GQ&s"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsxtYhNyaQAqz1c4Ynog16rendDyElrhXoA&s"/>
    </div>

    <div className="col-12 col-md-6 col-lg-3">
    <BlogCard imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tP_KCAk2bCbQjVoeLtkttNI36W1Srpxrmg&s"/>
    </div>

  </div> 

    </div>
  );
}

export default Home;