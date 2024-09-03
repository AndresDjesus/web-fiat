import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box, Grid , Image, Title , Button} from "@mantine/core"
import { getIndex } from "../services";

export const Imagenfondo2 = () => {

    const imgStyles = {
        width: "70rem",
        height: "30rem"
    }
    const [index, setIndex] = useState([]);

    useEffect(() => {
        const fetchIndex = async () => {
            setIndex(await getIndex());
        }

        fetchIndex();
    }, []);
    const renderCards = () => {
    return(
<Box sx={{ position: 'relative' }}>
<Image
  src={`data:image/png;base64,${index[0]?.Images[2]?.base64}`} alt={index[0]?.title}
  width={700}
  height={700}
/>
<Box
  sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',   

    alignItems: 'center',
  }}
>
  <Title 
c ={"white"} size="4rem">¿Buscando tu vehiculo ideal?</Title>
    <Text c={"white"} size="2rem">{index[0]?.LookingforVehicle } </Text>
    <br />
    <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/vehiculos"
                >
                Ver Catalogo
          </Button>
        </Center>
</Box>
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


       
           