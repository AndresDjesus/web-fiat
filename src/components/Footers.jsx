import React, { useEffect, useState } from "react";
import { Box, Button, BackgroundImage, Group, Grid, GridCol, Title, Text, Center} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {getFooter} from "../services/footer";
export const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const fetchFooter = async () => {
      const data = await getFooter();
      setFooter(data[0]);
    };
    fetchFooter(); // Llama a la función dentro del contexto asíncrono
  }, []);

  console.log(footer)
  console.log(footer?.social_networks?.gmail?.url)    
    function renderCards(){
    return(

     <BackgroundImage 
        src={`data:image/png;base64,${footer?.Images?.[0]?.base64}`} alt="Footer"  radius="md" opacity={0.8}
      >
      <Grid span={{span:24, md:24}}>
      <GridCol span={{ span:4, md:4 }}>
        <footer>
        <div className="contacto">
          <Title c={'white'} size={'3rem'}>Nuestro Consecionario:</Title>
          <Text c={'white'} size={'2.5rem'}>
            {footer?.address}
            </Text>
        </div>
        </footer>
      </GridCol>
      <GridCol span={{ span:4, md:4 }}>
        <footer>
        <div className="contacto">
          <Title size={'3rem'} c={'white'}>Contáctanos:</Title>
          <br />
          <Text c={'white'} size={'2.5rem'}>
            Email: {footer?.email}
          </Text>
          <br />
          <Text c={'white'} size={'2.5rem'}>
            Telefono: {footer?.phone}
          </Text>
        </div>
        </footer>
      </GridCol>
    

      <GridCol span={{ span:4, md:4 }}>
        <footer>
        <div className="redes-sociales">
          <Title size={'3rem'} c={'white'} >Redes sociales:</Title>
          <br />
          <Group gap="lg">
          <Button size='3x' variant="outline">
            <FontAwesomeIcon icon={faInstagram} size='4x' color='white' 
            onClick={() => window.open(footer?.social_networks?.instagram?.url)}
            />
          </Button>
          <Button size='3x' variant="outline">
            <FontAwesomeIcon icon={faEnvelope} size='4x' color='white' 
            onClick={() => window.open(footer?.social_networks?.gmail?.url)}
            />
          </Button>
          <Button size='3x' variant="outline">
            <FontAwesomeIcon icon={faWhatsapp} size='4x' color='white'
            onClick={() => window.open(footer?.social_networks?.whatsapp?.url)}
            />
          </Button>
          </Group>
        </div>
        </footer>
        </GridCol>
        <GridCol bg={'blue'}>
          <br />
          <Center>
          <Text c={'white'} size='2rem' fw={700}>©Automotores Reiga 2024 Todos los Derechos Reservados.</Text>
          </Center>
        </GridCol>
        </Grid>
        </BackgroundImage>
        

        
         
        
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
