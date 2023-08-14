import React,{useEffect,useContext} from 'react'
import Typography from '@mui/material/Typography';
import { Button,Box, CardActionArea, CardActions, Link, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HomeServicesContext } from "../Context/ServicesContext";

import AOS from 'aos';
import "aos/dist/aos.css";
import ServiceSlider from '../../Components/ServiceSlider';
import { useNavigate } from 'react-router-dom';




const PopularProjects = () => {
const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

const servicesData = useContext(HomeServicesContext);

const uniqueCategories = [
  ...new Set(servicesData.map((service) => service.category)),
];


  const maintenance = [
    {img:'https://dariapp.com/wp-content/uploads/2021/05/HouseCleaning_SingleVisit-1024x683.png',
title:'House Cleaning',
min:'2k',
max:'25k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/painting-1.webp',
title:'House Painting',
min:'6k',
max:'3L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/termite.webp',
title:'Pest Control Services',
min:'2k',
max:'10k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/watertank1.webp',
title:'Water Tank Cleaning',
min:'10k',
max:'50k'},

]

const remodelling = [
    {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/home-renovation-1.webp',
title:'Home Renovation',
min:'25k',
max:'3L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/kitchen-renovation-1.webp',
title:'Kitchen Renovation',
min:'15k',
max:'1.5L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/bathroom-renovation-1.webp',
title:'Bathroom Renovation',
min:'5k',
max:'50k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/mosquito-mesh-2x.webp',
title:'Mosquito Net Installation',
min:'3k',
max:'20k'},

]

const appliances = [
    {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/ac-repair-1.webp',
title:'AC Repair Services',
min:500,
max:'5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/gas-stove.webp',
title:'Gas Stove Repair',
min:400,
max:'2.5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/washing-machine-repair-1.webp',
title:'Washing Machine Repair',
min:'400',
max:'6.5k'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/refrigerator.webp',
title:'Refrigerator Repair',
min:'400',
max:'7.5k'},

]


const events = [
    {img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/wedding-planners.webp',
title:'Wedding Planners',
min:'50k',
max:'6L+'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/party-planners.webp',
title:'Party Planners',
min:'6k',
max:'3L+'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/wedding-photography.webp',
title:'Wedding Photography',
min:'50k',
max:'6L'},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/webp/stage-decorator.webp',
title:'Stage Decoration',
min:'10k',
max:'5L'},

]

const personal = [
    {img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/makeup-artist.jpg',
title:'Makeup Artist'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/physiotherapy.jpg',
title:'Physiotherapy'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/fitness-trainers.jpg',
title:'Fitness Trainer'
},

{img:'https://hometriangle.com/web/assets/images/2x-600x400/jpg/swimming-classes.jpg',
title:'Swimming Classes',
},

]


    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1
          }
        }
      ]
    };


    const handleSubmit = (title) => {
      // dispatch({
      //   type: UpdateFormValue,
      //   payload: { key: "serviceName", value: title },
      // });

      navigate(`/services/${title}/welcome`);
    };


  return (
    <Box my={"7rem"}>
      <Box>
        <Box width={{ md: "90%", xs: "95%" }} margin={"auto"}>
          {uniqueCategories.map((category) => (
            <Box>
            <Box my={{ md: "16px", xs: "8px" }} key={category}>
              <Typography
                fontSize={{ md: "26px", xs: "18px" }}
                color={"#343f52"}
                fontWeight={"700"}
                px={"15px"}
              >
                {category}
              </Typography>
              <Box>
                <Box columnGap={{ md: "30px", xs: "10px" }} px={{ xs: "20px" }}>
                  <Slider {...settings}>
                    {servicesData
                      .filter((service) => service.category === category)
                      .map((service) => (
                        <Box key={service.title}>
                          <Card
                            onClick={() => handleSubmit(service.title)}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            data-aos-once="true"
                            position={"relative"}
                            borderRadius={"10px"}
                            sx={{
                              maxWidth: { md: "290px", xs: "220px" },
                              height: { xs: "120px", md: "200px" },
                              transition: " 0.6s ease-in",
                              ":hover": { boxShadow: 9 },
                              cursor: "pointer",
                              ":hover img": { transform: "scale(1.2)" },
                            }}
                          >
                            <Box
                              sx={{
                                overflow: "hidden",
                                position: "relative",
                                ":before": {
                                  content: `""`,
                                  background: "rgba(0,0,0,.6)",
                                  borderRadius: "10px",
                                  position: "absolute",
                                  height: "200px",
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                },
                                width: "100%",
                                cursor: "pointer",
                              }}
                            >
                              <img
                                src={service.image}
                                alt="Car Service"
                                width={"100%"}
                                height={"200px"}
                                style={{
                                  objectFit: "cover",
                                  transition: "transform 0.3s ease-in-out",
                                }}
                              />
                            </Box>

                            <Box
                              padding={"15px"}
                              position={"absolute"}
                              bottom={"-100px"}
                            >
                              <Typography
                                fontSize={{ md: "16px", xs: "14px" }}
                                color={"#fff"}
                                fontWeight={500}
                                lineHeight={1.2}
                              >
                                {service.title}
                              </Typography>
                              <Typography
                                minHeight={"100px"}
                                pb={"10px"}
                                fontSize={{ md: "12px", xs: "10px" }}
                                variant="body2"
                                color={"#fff"}
                              >
                                {service.range}
                              </Typography>
                            </Box>
                          </Card>
                        </Box>
                      ))}
                  </Slider>
                </Box>
              </Box>
            </Box>
            <Divider variant="middle" />
            </Box>
          ))}
        </Box>
      </Box>
       {/* <ServiceSlider data={maintenance} title={"Home maintenance"} />
       <Divider variant="middle" />
       <ServiceSlider data={remodelling} title={"Home Remodelling"} />
       <Divider variant="middle" />
       <ServiceSlider data={events} title={"Events"} />
       <Divider variant="middle" />
       <ServiceSlider data={personal} title={"Personal"} /> */}
    </Box>
  );
}

export default PopularProjects