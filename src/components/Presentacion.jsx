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
                <Title size="5rem">
                {index[0]?.title}
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                    {index[0]?.content}
                    </Text>
                    </Center>                  
                </Card>
                   
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                    <Image style={imgStyles} src={`data:image/png;base64,${index[0]?.Images[0]?.base64}`} alt={index[0]?.title} />
                    
                </Card.Section>
            </Grid.Col>
            </Card>
            
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
