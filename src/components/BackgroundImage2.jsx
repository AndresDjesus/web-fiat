import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box, Grid , Image, Title, Button} from "@mantine/core"
import { getIndex } from "../services";

export const Imagenfondo2 = () => {
   
  const [index, setIndex] = useState([]);

    useEffect(() => {
        const fetchIndex = async () => {
            setIndex(await getIndex());
        }

        fetchIndex();
    }, []);
    const renderCards = () => {
    return(
        <Box maw={5000} mx="100">
          <br /><br />
      <BackgroundImage 
        src={`data:image/png;base64,${index[0]?.Images[2]?.base64}`} alt="Fiat Cronos" radius="md" opacity={1}
      >
        
          <Center p="md">
          
          <Text c={"blue"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">¿Buscando tu Vehículo Ideal?</Title>
          </Center>
            <Text c={"blue"}>{index[0]?.LookingforVehicle}</Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/vehiculos"
                >
                Ver Catalogo
          </Button>
        </Center>
           
      </BackgroundImage>
      
        </Box>

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
