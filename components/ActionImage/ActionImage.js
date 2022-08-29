import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ActionImage = () => {
  const carouselImg = [
    {
      id: 1,
      src: "/static/lion.jpg",
      Caption: "Come explore the wild",
      alt: "lion",
    },
    {
      id: 2,
      src: "/static/giraffe.jpg",
      Caption: "An experience like no other",
      alt: "giraffe",
    },
    {
      id: 3,
      src: "/static/bufallo.jpg",
      Caption: "refresh through nature",
      alt: "bufallo",
    },
  ];

  return (
    // <Carousel>
    //   {carouselImg.map((item, index) => {
    //     <Carousel.Item key={item.id}>
    //       <img className="d-block w-100" src={item.src} alt={item.alt} />
    //       <Carousel.Caption>
    //         <p>{item.Caption}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>;
    //   })}
    // </Carousel>
    <Carousel>
      <Carousel.Item>
        <img src="/static/lion.jpg" />
        <Carousel.Caption>Hello there</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ActionImage;
