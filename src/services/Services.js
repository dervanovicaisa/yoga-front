import { Col, Image, Row } from "react-bootstrap";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import YogaService from "../assets/yoga-services.svg";
import "../services/services.css";

function Services() {
  return (
    <Row id="services" className="py-4">
      <Col>
        <Row className="gap-4">
          <Col>
            <Image src={ArrowLeft} />
            <Image src={ArrowRight} className="mx-5" />
          </Col>
          <Col className="pt-3 px-5">
            <Image src={YogaService} />
          </Col>
        </Row>
      </Col>
      <Col className="text-service">
        <h1 className="text-purple text-bold w-50 text-wrap">Our Services</h1>
        <div className="bg-light-purple ptb-5px my-4" />
        <p className="text-purple  w-75">
          And many more well trained courses conducted by world’s best trainers.
        </p>
      </Col>
    </Row>
  );
}

export default Services;
