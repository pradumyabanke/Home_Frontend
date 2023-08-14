import React,{useEffect} from 'react'
import Typography from '@mui/material/Typography';
import { Button,Box, CardActionArea, CardActions, Link } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import "aos/dist/aos.css";
import { UpdateFormValue } from '../Pages/Reducer/FormReducer';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../Pages/Context/FormContext';

const ServiceSlider = ({data,title}) => {
    useEffect(() => {
        AOS.init();
      }, []);

      const {dispatch} = useFormContext()
const navigate = useNavigate();

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

      const handleSubmit = (title)=>{
        dispatch({type:UpdateFormValue,payload:{key:'serviceName',value:title}})
        
        navigate(`/services/${title}/welcome`)
      }

      
  return (
    <Box my={{md:'16px',xs:'8px'}} >
        <Box  width={{md:'90%',xs:'95%'}} margin={'auto'}   >
        <Typography fontSize={{md:'26px',xs:'18px'}} color={'#343f52'} fontWeight={'700'}  px={'15px'}>{title}</Typography>
<Box>
    <Box columnGap={{md:'30px',xs:'10px'}} px={{xs:'20px'}}   >
    <Slider {...settings}>

        {data.map(({img,title,min,max})=>{
            return (             

 <Card onClick={()=>handleSubmit(title)} data-aos="fade-up" key={title}
     data-aos-duration="2000" data-aos-once='true' position={'relative'} borderRadius={'10px'}  sx={{maxWidth:{md:'290px',xs:'220px'},height:{xs:'120px',md:'200px'},  transition:' 0.6s ease-in',":hover":{boxShadow:9},cursor:'pointer',":hover img":{transform: 'scale(1.2)'}}}>
            <Box sx={{overflow:'hidden', position:'relative', ":before":{
        content: `""`,
        background: 'rgba(0,0,0,.6)',
        borderRadius:'10px',
        position: 'absolute',
        height:'200px',
        top: 0,
        left: 0,
        right: 0
},width:'100%',cursor:'pointer',}}><img src={img} alt="Car Service" width={'100%'} height={'200px'} style={{objectFit:'cover',transition:'transform 0.3s ease-in-out'}} /></Box>
            
            <Box padding={'15px'} position={'absolute'} bottom={'-100px'}>
              <Typography   fontSize={{md:'16px',xs:'14px'}} color={'#fff'} fontWeight={500} lineHeight={1.2} >
                {title}
              </Typography>
              <Typography minHeight={'100px'} pb={'10px'} fontSize={{md:'12px',xs:'10px'}}  variant="body2" color={'#fff'}>
                SAR{min}-SAR{max}
              </Typography>
            </Box>
           
          </Card>

            )
        })}

</Slider>
    
    
    </Box>

</Box>
        </Box>

        
    </Box>
  )
}

export default ServiceSlider