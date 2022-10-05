import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import side1 from "../SinglePage/hacker1.png";
import side2 from "../SinglePage/hacker2.png";
import side3 from "../SinglePage/hacker3.png";
import side4 from "../SinglePage/heacker2.png";
import side5 from "../SinglePage/snapcartt.png";
import {Row,Col} from "reactstrap";

export default function Silder() {
    var settings={
        dots:true,
        infinite:true,
        speed:600,
        sliderToShow: 1,
        slidesToScroll:1
    }
  return (
<Row>
      <Slider {...settings}>
      
      <Col>
        <div>
            
      <img src={side1} width="40%"></img>
  
        </div>
        </Col>
        <Col>
        <div>
      <img src={side2}  width="40%"></img>
        </div>
        </Col>
        <Col>
        <div>
      <img src={side3}  width="40%"></img>
        </div>
        </Col>
        <Col>
        <div>
      <img src={side4}  width="40%"></img>
        </div>
        </Col>
        <Col>
        <div>
      <img src={side5}  width="40%"></img>
        </div>
        </Col>
   
      </Slider>
      </Row>
  )
}
