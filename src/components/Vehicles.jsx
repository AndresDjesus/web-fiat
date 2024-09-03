import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Vehiclescatalog } from "./Vehiclescatalog";
import { Footer } from "./Footers";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group} from "@mantine/core";
import { getVehicles } from "../services/vehicles";

export const Vehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            setVehicles(await getVehicles());
        }

        fetchVehicles();
    }, []);

    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <br /><br /><br /><br /><br /><br /><br />
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Group
                          justify="center"
                        >
                            <Title c={"white"} size={"5rem"}>Explora nuestra amplia selección de vehiculos</Title>
                        </Group>

                    </Grid.Col> 

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Vehiclescatalog  data={vehicles}/>
                    </Grid.Col>

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}