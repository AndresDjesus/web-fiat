import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { ContenidoBlog } from "./ContenidoBlog";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group, Anchor} from "@mantine/core";

export const Blog = () => {
    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Bienvenido a nuestro Blog</Title>
                        </Center>
                    </GridCol>
                    <GridCol>
                        <Title size={"2rem"}>Todas las noticias del Mundo Automotriz</Title>
                    </GridCol>
                    <GridCol span={{ span:12, md:12 }}>
                        <ContenidoBlog data={[{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfh', fecha: "24-12-2005"},{title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhv', fecha: "24-12-2005"},{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhvnvnsdfslkjasldkkjsfjsd', fecha: "24-12-2005"},{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodf', fecha: "24-12-2005"},{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhvn', fecha: "24-12-2005"},{ title: 'Mecanica General ', image: 'https://totalfiat.co/wp-content/uploads/2022/06/mecanica.jpeg', description: 'fasjfjkasdfjsfksfksfjksfjksfjksjkfkjshfjkshfjshfjkshfjkaklnckjsdlkakkisodfjisjfhvn', fecha: "24-12-2005"}]}/>
                    </GridCol>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}