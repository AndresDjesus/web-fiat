import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { ContenidoBlog } from "./ContenidoBlog";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group, Anchor} from "@mantine/core";
import { getBlog } from "../services/blog";


export const Blog = () => {

        const [blog, setBlog] = useState([]);
        useEffect(() => {
            const fetchBlog = async () => {
              const data = await getBlog();
              setBlog(data);
            };
         
            fetchBlog(); // Llama a la función dentro del contexto asíncrono
          }, []);

          console.log (getBlog, 'DATOOOOS222222222222222')
          console.log (blog, 'DATOOOOS')
    
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
                        <Center><Title size={"3rem"} c={"white"}>Todas las noticias del Mundo Automotriz</Title></Center>
                    </GridCol>
                    <GridCol span={{ span:12, md:12 }}>
                        <ContenidoBlog data={blog}/>
                        
                    </GridCol>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}