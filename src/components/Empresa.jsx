import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import Concesionario from '../imagenes/concesionario.png';
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, AspectRatio} from "@mantine/core";

export const Empresa = () => {
    const imgStyles = {
        width: "70rem",
        height: "30rem"
    }
    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Nuestra empresa</Title>
                        </Center>    
                    </GridCol>
                    <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem" c={"white"}>
                  Automotores Reiga
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis error quas eveniet consequuntur illo minus. Sunt, inventore. Sint expedita porro placeat voluptatem id accusantium quasi amet fuga nemo qui?
                    </Text>
                    </Center>                  
                </Card>
                   
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                    <Image style={imgStyles} src={Concesionario} alt='Fiat Cronos' />
                    
                </Card.Section>
            </Grid.Col>
            </Card>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Mision </Title>
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem magni possimus, minima ullam cum nostrum eum voluptas, accusamus nisi dolorum aut sequi obcaecati suscipit ad! Molestias inventore unde id!
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Vision </Title>
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem magni possimus, minima ullam cum nostrum eum voluptas, accusamus nisi dolorum aut sequi obcaecati suscipit ad! Molestias inventore unde id!
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                    <Box border radius={4} padding={20} style={{ border: "2px solid red" }}>
                        <Title size={"4rem"}  c={"white"} weight="bold">Historia</Title>
                    </Box>      
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem magni possimus, minima ullam cum nostrum eum voluptas, accusamus nisi dolorum aut sequi obcaecati suscipit ad! Molestias inventore unde id!
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Ubicacion </Title>
                        <br /><br />
                        <AspectRatio ratio={10 / 4}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.    68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                            title="Google map"
                        style={{ border: 0 }}
                         />
    </AspectRatio>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}