import { BackgroundImage, Center, Text, Box, Grid , Image} from "@mantine/core"
import '@mantine/carousel/styles.css';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
export const Carrusel = () => {
  
    
    function renderCards(){
    return(
        <Carousel
        slideSize="90%"
        height={1120}
        nextControlIcon={<IconArrowRight style={{ width: rem(80), height: rem(40) }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(80), height: rem(40) }} />}
      >
        <Carousel.Slide>
            <Image src='https://motormagazine.com.ar/wp-content/uploads/2020/08/Fiat-Strada_KV_Work-aviso-1.jpg' />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image src='https://i.ytimg.com/vi/-axU002oxAU/maxresdefault.jpg' />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image src='https://i.ytimg.com/vi/B17EvtdQM5M/sddefault.jpg' />
        </Carousel.Slide>
        <Carousel.Slide>
            <Image  src='https://fiatautodrive.com.ar/templates/yootheme/cache/4c/colores-cronos-drive-negro-vesuvio1-4cfeebc3.png' />
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
