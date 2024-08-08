import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box, Grid , Image} from "@mantine/core"
import '@mantine/carousel/styles.css';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { getAdvertising } from "../services/advertising";
export const Carrusel = () => {
  
    const [advertising, setAdvertising] = useState([]);

    useEffect(() => {
        const fetchAdvertising = async () => {
            setAdvertising(await getAdvertising());
        }

        fetchAdvertising();
    }, []);
    function renderCards(){
    return(
        <Carousel
        slideSize="90%"
        height={1285}
        nextControlIcon={<IconArrowRight style={{ width: rem(80), height: rem(40) }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(80), height: rem(40) }} />}
      >
        <Carousel.Slide>
            <Image src={`data:image/png;base64,${advertising[0]?.Images[0]?.base64}`} alt={advertising[0]?.name} /> 
        </Carousel.Slide>
        <Carousel.Slide>
            <Image src={`data:image/png;base64,${advertising[0]?.Images[1]?.base64}`}  alt={advertising[0]?.name}/>
        </Carousel.Slide>
        <Carousel.Slide>
            <Image src={`data:image/png;base64,${advertising[0]?.Images[2]?.base64}`} alt={advertising[0]?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image  src={`data:image/png;base64,${advertising[0]?.Images[3]?.base64}`} alt={advertising[0]?.name} />
        </Carousel.Slide>
            
       
      
      </Carousel>

       
  );
}
    return (
        <Box>
            <Grid>
                {renderCards()}         
            </Grid>
        </Box>
    )
}
