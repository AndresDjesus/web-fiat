import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Contentservice1 } from "./Contentservice1";
import { Contentservice2 } from "./Contentservice2";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group} from "@mantine/core";

export const Services = () => {
    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <br /><br />
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Tenemos los mejores Servicios para ti</Title>
                        </Center>
                    </GridCol>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Contentservice1 data={[{ title: 'Escaneo Computarizado ', image: 'https://automotrizmaver.com/wp-content/uploads/2019/07/DIAGNOSTICO_POR_COMPUTADORA.jpg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhvnvnsdfslkjasldkkjsfjsdfkkposdksopdfksdjkdsfjksfjkdshfsfnsjkvnsjwoiohfklspowksdiskdnafjaio'}]}/>
                        <br /><br />
                        <Contentservice2 data={[{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhvnvnsdfslkjasldkkjsfjsdfkkposdksopdfksdjkdsfjksfjkdshfsfnsjkvnsjwoiohfklspowksdiskdnafjaio'}]}/>
                    </Grid.Col>

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}
