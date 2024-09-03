import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Image, Title, Text, Stack, Group } from "@mantine/core";
import {getIdBlog} from "../services/blogId";
import { useParams } from "react-router-dom";

export const BlogId = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogId = async (id) => {
      try {
        const data = await getIdBlog(id);
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlogId(id);
  }, []);
  
  return (
    <Box>
        <Navbar />
        <Card bg={"gray"}>
          <br /><br /><br /><br /><br /><br />
            <Card.Section>
                <Center><Title size={"4rem"}>{blog?.title}</Title></Center>
            </Card.Section>
        </Card>
        <Card marginLeft={ "15px"} marginRight={ "15px"}>
            <Card.Section marginLeft={ "15px"} marginRight={ "15px"}>
                <br />
                <Grid>
                <Grid.Col span={{span:12 , md: 12}}>
                <Group gap="lg" justify="center">
                    <Button  bg={"white"} variant="button" size="xl" radius="xl" component="a" href="/blog"><Title c={"red"} size={"1.5rem"}>VOLVER AL BLOG</Title> </Button>
                    </Group>
                    <br /><br />
                    <Center><Title c={"red"} size={"2rem"}>NOTICIAS</Title></Center>
                    <br /><br />
                    <Center><Title c={"gray"} size={"3rem"}>{blog?.title}</Title></Center>
                    
                    <Center><Title c={"red"}>-------</Title></Center>  
                    <br /><br />
                    <Center><Image   src={`data:image/png;base64,${blog?.Images?.[0]?.base64}`} alt={blog?.title} /></Center>
                    <Center><Text marginLeft={ "15px"} marginRight={ "15px"} size="2rem" c={"black"}  style={{ textAlign: 'justify', padding: '75px' , lineHeight: '1.9', backgroundColor: '#f0f0f0'}}>{blog?.content}</Text></Center>
                </Grid.Col>
                </Grid>
            </Card.Section>
        </Card>
        <br /><br />
        <Footer />
    </Box>
  )
}