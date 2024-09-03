import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Contentservice1 } from "./Contentservice1";
import { Contentservice2 } from "./Contentservice2";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group} from "@mantine/core";
import { getServices } from "../services/services";
import { useNavigate } from "react-router-dom";

export const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            setServices(await getServices());
        }

        fetchServices();
    }, []);

    const navigate = useNavigate();

    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <br /><br /><br /><br /><br /><br /><br />
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Tenemos los mejores Servicios para ti</Title>
                        </Center>
                    </GridCol>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br /><br />
                        <Contentservice1 data={services}/>
                        <br /><br />
                    </Grid.Col>

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}
