import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Image, Center, Text, Title, Button } from "@mantine/core"
import { getServices } from "../services/services"

export const Servicios = ({ data = [] }) => {

    const imgStyles = {
        width: "20rem",
        height: "15rem"
    }

    const cardStyles = {
        borderRadius: 20
      };

    const renderCards = () => {
        return data?.map((item, index) => {
            return (
                <Grid.Col span="auto">
                
                    <Card style={cardStyles}>
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} src={`data:image/png;base64,${item?.Images[0]?.base64}`} alt={item?.name} />
                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                            <Center>
                                <Title order={3} size={"2rem"}>
                                    {item.name}
                                </Title>
                            </Center>
                            
                        </Card.Section>
                    </Card>
                </Grid.Col>

                

            )
        });
    }

    return (
        <Box>
            <Grid>
                {renderCards()}         
            </Grid>
        </Box>
    )
}