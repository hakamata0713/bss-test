import React, { Component } from "react";
import Slider from "react-slick";
import {
  Container,
  Heading,
  Hide,
  Box,
  Image,
  Link
} from "@chakra-ui/react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
            }
        }
      ]
    };
    return (
      <Box m="0 auto" w="calc( 100% - 1.5rem )">
        <Slider {...settings}>
          <Box p={1}>
            <Link href="#"><Image src="images/banner01.webp" m="0 auto" /></Link>
          </Box>
          <Box p={1}>
            <Link href="#"><Image src="images/banner02.webp" m="0 auto" /></Link>
          </Box>
          <Box p={1}>
            <Link href="#"><Image src="images/banner03.webp" m="0 auto" /></Link>
          </Box>
          <Box p={1}>
            <Link href="#"><Image src="images/banner04.webp" m="0 auto" /></Link>
          </Box>
        </Slider>
      </Box>
    );
  }
}