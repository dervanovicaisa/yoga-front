import "./home.css";
import Illustration from "../assets/Illustartion.svg";
import { Button, Col, Image, Row } from "react-bootstrap";
function HomeComponent() {
  return (
    <div id="home">
      <Row className="bg-light-purple border-rounded justify-content-between m-0 py-lg-0 py-3">
        <Col
          className="text-purple description-text px-lg-5 px-4 d-flex flex-column align-items-baseline gap-4 justify-content-center "
          lg={4}
        >
          <h3>Train your body and mind through yoga </h3>
          <p>
            Structured yoga sessions or classes with skilled instructors. Get
            the best guidance online.
          </p>
          <Button
            variant="light"
            className="text-white bg-purple explore-more-btn border-0 px-5 py-2"
            href="#services"
          >
            EXPLORE MORE
          </Button>
        </Col>
        <Col className="text-lg-end text-center">
          <Image src={Illustration} className="illustartion w-100" />
        </Col>
      </Row>
    </div>
  );
}

export default HomeComponent;
