import React, { useEffect, useState } from "react";
import { BackgroundImage, Center, Text, Box, Grid , Image, Title} from "@mantine/core"
import { getIndex } from "../services";

export const Imagenfondo = () => {

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
        <Box maw={5000} mx="100">
          <br /><br />
      <BackgroundImage 
         src={`data:image/png;base64,${index[0]?.Images[1]?.base64}`} alt={index[0]?.title} opacity={1.5}
      >
        
          <Center p="md">
          
          <Text c={"blue"} size="5rem" >
          <Center> 
              <Title c={"red"} size="6rem">¿Por qué Nosotros?</Title>
          </Center>
         <Title c={"red"} size="6rem">{index[0]?.WhiWe}</Title>

           
          </Text>
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
