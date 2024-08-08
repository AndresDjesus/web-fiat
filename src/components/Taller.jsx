import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box, Grid , Image, Title, Button} from "@mantine/core"
import { getServices} from "../services/services";

export const Taller = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
      const fetchServices = async () => {
          setServices(await getServices());
      }

      fetchServices();
  }, []);

    return (
        <Grid>
        <Grid.Col span={{ span:6, md:6 }}>
        <Box maw={4000} mx="100">
          <br /><br />
      <BackgroundImage 
        src={`data:image/png;base64,${services[4]?.Images[0]?.base64}`} alt="Fiat Cronos" radius="md" opacity={1}
      >
        
          <Center p="md">
          
          <Text c={"bla"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">{services[4]?.name}</Title>
          </Center>
            <Text c={"black"}>
            {services[4]?.description}
             </Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }}
                >
                Solicitar Informacion
          </Button>
        </Center>
           
      </BackgroundImage>
      
        </Box>
        </Grid.Col>
        <Grid.Col span={{ span:6, md:6 }}>
            
        <Box maw={4000} mx="100">
          <br /><br />
      <BackgroundImage 
        src={`data:image/png;base64,${services[1]?.Images[0]?.base64}`} alt={services[1]?.title} radius="md" opacity={0.9}
      >
        
          <Center p="md">
          
          <Text c={"bla"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">{services[1]?.name}</Title>
          </Center>
            <Text c={"black"} fontWeight={700}>
            {services[1]?.description} 
             </Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/servicios"
                >
                Conoce nuestros Servicios
          </Button>
        </Center>
           
      </BackgroundImage>
      
        </Box>
        </Grid.Col>
      </Grid>
    );
}