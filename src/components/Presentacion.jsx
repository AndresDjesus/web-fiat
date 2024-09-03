import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Image, Center, Text , Title} from "@mantine/core"
import { getIndex } from "../services"

export const Presentacion = ({ data = [] }) => {
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
        <Box>
        <Grid>
            <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem" c={"white"}>
                {index[0]?.title}
                </Title>
                </Center>
                <br />
                    <Center>
                    <Text size="2.5rem" c={"white"}>
                    {index[0]?.content}
                    </Text>
                    </Center>
                                  
                
                   
             </Grid.Col>
            
            <Grid.Col span={{ span:6, md:6 }}>
                    <Image style={imgStyles}  radius={"lg"} src={`data:image/png;base64,${index[0]?.Images[0]?.base64}`} alt={index[0]?.title} />                
            </Grid.Col>
            
            
        </Grid>
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
