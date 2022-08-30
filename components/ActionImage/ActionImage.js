import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CardWrapper from "../Ui/Wrapper/CardWrapper";

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
    <CardWrapper>
      <div className="px-lg-5 pt-lg-3 ">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/bufallo.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Come explore the wild</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/giraffe.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <p>An experience like no other</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/lion.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <p>refresh through nature</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </CardWrapper>
  );
};

export default ActionImage;
