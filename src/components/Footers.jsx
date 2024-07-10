import React from 'react';
import { Box, Button, BackgroundImage, Group, Grid, GridCol, Title, Text, Center} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Footer = () => {
  
    
    function renderCards(){
    return(

     <BackgroundImage 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYyI06iKqd0z8Z3qmrVJssO2APEYZgOx_qA_vOH-qBkVQ-rR2kGMcmOls0LyMJMeW4ISIR6KYK4GnKj1VtkFqvhRsCJqIZrN7R2pan7SnEyXyCqtH0vXBmTfaZKTHo1JwvyGYf-ryeG3YO/s1600/fiat-500x-my-face.jpg" radius="md" opacity={0.8}
      >
      <Grid span={{span:24, md:24}}>
      <GridCol span={{ span:4, md:4 }}>
        <footer>
        <div className="contacto">
          <Title c={'white'} size={'3rem'}>Nuestro Consecionario:</Title>
          <Text c={'white'} size={'2.5rem'}>Avenida Nueva Granada </Text>
        </div>
        </footer>
      </GridCol>
      <GridCol span={{ span:4, md:4 }}>
        <footer>
        <div className="contacto">
          <Title size={'3rem'} c={'white'}>Contáctanos:</Title>
          <br />
          <Text c={'white'} size={'2.5rem'}>Correo electrónico: @automotoresreiga.com</Text>
          <br />
          <Text c={'white'} size={'2.5rem'}>Teléfono: 
                 0212-345678
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
            <FontAwesomeIcon icon={faInstagram} size='4x' color='red'/>
          </Button>
          <Button size='3x' variant="outline">
            <FontAwesomeIcon icon={faEnvelope} size='4x' color='red' />
          </Button>
          <Button size='3x' variant="outline">
            <FontAwesomeIcon icon={faWhatsapp} size='4x' color='red'/>
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
