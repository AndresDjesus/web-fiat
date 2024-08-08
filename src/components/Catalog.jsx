import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Image, Center, Text, Title } from "@mantine/core"
import { getVehicles } from "../services/vehicles"

export const Catalog = ({ data = [] }) => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            setVehicles(await getVehicles());
        }

        fetchVehicles();
    }, []);
    const imgStyles = {
        width: "30rem",
        height: "15rem"
    }

    const renderCards = () => {
        return data?.map((item, index) => {
            return (
                <Grid.Col span="auto">
                    <Card>
                        <Card.Section>
                        <Title order={3} size={"2rem"}>
                                {item.name}
                            </Title>
                            <Center>
                            <Image styles={imgStyles} src={`data:image/png;base64,${item?.Images[0]?.base64}`} alt={item?.name} />
                            </Center>
                            <br />
                        </Card.Section>
                        
                        <Card.Section mt="md">
                           
                            <Title>
                                ${item.price}
                            </Title>
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