import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Image, Title, Text, Stack, Group } from "@mantine/core";
import { getVehicleId } from "../services/vehiclesId";
import { useParams } from "react-router-dom";
import '@mantine/carousel/styles.css';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export const VehicleId = () => {

    const imgStyles = {
        width: "60rem",
        height: "35rem"
    }

    const imgStilo = {
      width: "15rem",
      height: "10rem"
    }

    const imgCarrusel = {
      with: "60rem",
      height:"70rem"
    }

    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicleId = async (id) => {
      try {
        const data = await getVehicleId(id);
        setVehicle(data);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
      }
    };

    fetchVehicleId(id);
  }, []);

  return (
    <Box>
        <Navbar />
        <Card>
        <Card.Section>

        <Center><Title>Detalles del Vehiculo</Title></Center>
        </Card.Section> 
        </Card>
        
       <Center><Title c={"white"} size={"6rem"} bd={"white"}>{vehicle?.name}</Title></Center> 
       <Center><Title c={"white"} size={"4rem"} bd={"white"}>Muevete al ritmo de tus aventuras</Title></Center> 
        <br /><br />
        <Image  src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
        
        /// Sesion con el carruzel
        <Card>
             <Grid>
              <Grid.Col span={{span:12 , md: 12}}>
                <Grid>
                 <Grid.Col span={{ span:5, md:5}}>
                 <Group gap="lg" justify="center">
                    <br /><br />
                    <Card radius="xl" bg={"blue"} sx={{ height: "35rem" }}>
                     <Card.Section bg={"blue"} sx={{ height: "35rem" }}>
                            <Center>
                                <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
                            </Center>
                            <Center><Title c={"white"} order={2} size={"4rem"}>{vehicle?.name}</Title></Center>
                            <br /><b />
                            <Center><Title c={"white"} size={"3rem"}>Desde</Title></Center>                          
                            <Center><Text c={"white"} size={"3rem"} fw={"bold"}>${vehicle?.price}</Text> </Center>   
                            <br />
                            <Center><Text c={"white"} size={"1rem"}>El precio indicado incluye IVA y placa+ Seguro por un año</Text></Center>   
                            <br />
                            <Grid>
                            <Grid.Col span={{ span:6, md:6 }}>
                            <Group gap="lg" justify="center">
                            <Button  bg={"white"} variant="button" size="xl" radius="xl" c={"black"} >Contactar</Button>
                            </Group>  
                            </Grid.Col>
                            <Grid.Col span={{ span:6, md:6 }}>
                            <Group gap="lg" justify="center">
                            <Button  bg={"white"} variant="button" size="xl" radius="xl" c={"black"} >Financiamiento</Button>
                            </Group>  
                            </Grid.Col>
                            </Grid>
                            <br /><br />          
                        </Card.Section>
                    </Card>
                    </Group>
                </Grid.Col>
                <Grid.Col   span={{ span:7, md:7}}>
                  <Group p={"xl"} >
                    <Center><Title p={"3rem"}>Conocelo mas a fondo</Title></Center>
                  <Carousel
        slideSize="80%"
        height={520}
        nextControlIcon={<IconArrowRight style={{ width: rem(50), height: rem(50) }} />}
        previousControlIcon={<IconArrowLeft style={{ width: rem(50), height: rem(50) }} />}
      >
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
      </Carousel>

                  </Group>
                 </Grid.Col> 
                  </Grid>
                </Grid.Col>
            </Grid>                       
        </Card>
        <br />// Sesion de caracteristicas
        <Card bg={"dark"}>
        <Grid>
              <Grid.Col span={{span:12 , md: 12}}>
                <Center><Title size={"4rem"} c={"white"}> Fiat {vehicle?.name} en 5 segundos </Title></Center>
                <br /><br />
                <Grid>
                 <Grid.Col span={{ span:2.5 , md: 2.5}}>
                 <Group gap="lg" justify="center">
                    <br /><br />
                     <Card.Section  sx={{ height: "30rem" }}>
                                 <Title c={"white"}>Motor</Title>
                                 <Title c={"white"}>{vehicle?.motor?.name}</Title>
                                 <Image  style= {imgStilo}src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />  
                                <br />
                                 <Title c={"white"}>Categoria</Title>
                                 <Title c={"white"} >{vehicle?.category?.name} </Title>
                                 <Image style={imgStilo} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />  
                        </Card.Section>  
                    </Group>
                </Grid.Col>

                <Grid.Col span={{span:2.5 , md:2.5}}>
                  <Group gap="lg" justify="center">
                    <br /><br />
                     <Card.Section  sx={{ height: "35rem" }}>
                                 <Title c={"white"}> Transmision</Title>
                                 <Title c={"white"}>{vehicle?.transmission}</Title>
                                 <Image style={imgStilo} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} /> 
                                 <br />
                                 <Title c={"white"}> Pantalla</Title>
                                 <Title></Title>
                                 <Image style={imgStilo} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} /> 
                        </Card.Section>
                    </Group>
                </Grid.Col>

                <Grid.Col   span={{ span:7, md:7}}>
                  <Group p={"xl"}>
        
                    <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />

                  </Group>
                 </Grid.Col> 
                  </Grid>
                </Grid.Col>
            </Grid>   
        </Card>
        <br /><br />
        <Card>//DISENO
        <Grid>
              <Grid.Col span={{span:12 , md: 12}}>
                <Center><Title size={"4rem"} c={"dark"}> DISENO </Title></Center>
                <Center><Title size={"2.5rem"} c={"dark"}> FABULOSO DENTRO Y FUERA DE LA CIUDAD </Title></Center>
                <br /><br />
                <Grid>
                 <Grid.Col span={{ span:5 , md: 5}}>
                 <Group gap="lg" justify="center">
                    <br /><br />
                     <Card.Section  sx={{ height: "30rem" }}>
                       <Center><Text c={"dark"} size={"2rem"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis saepe eveniet sit a, cupiditate fugit libero numquam illum nam sapiente, iste, facilis voluptatum? Reprehenderit voluptates quidem adipisci impedit modi ducimus.</Text></Center>
                      </Card.Section>
                    </Group>
                </Grid.Col>
                <Grid.Col   span={{ span:7, md:7}}>
                  <Group p={"xl"}>
                  <Carousel
              slideSize="90%"
              height={"35rem"}
              nextControlIcon={<IconArrowRight style={{ width: rem(40), height: rem(40) }} />}
              previousControlIcon={<IconArrowLeft style={{ width: rem(40), height: rem(40) }} />}
               >
            <Carousel.Slide>
            <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            </Carousel>
                  </Group>
                 </Grid.Col> 
                  </Grid>
                </Grid.Col>
            </Grid>   
        </Card>
        <br />
        <Card bg={"gray"}>
          <Grid>
            <Grid.Col span={{span:12 , md : 12}}>
                <Center><Title size={"4rem"} c={"dark"}> INTERIOR </Title></Center>
                <Center><Title size={"2.5rem"} c={"dark"}> CONFORT DE LOS PIES A LA CABEZA </Title></Center>
                <br />
                <Carousel
              slideSize="90%"
              height={"70rem"}
              nextControlIcon={<IconArrowRight style={{ width: rem(50), height: rem(50) }} />}
              previousControlIcon={<IconArrowLeft style={{ width: rem(50), height: rem(50) }} />}
               >
            <Carousel.Slide>
            <Image style={imgCarrusel} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image style={imgCarrusel} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            </Carousel>
            <br />
            <Center><Title c={"dark"} size={"3rem"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellat eius ex, nesciunt aliquam illum adipisci natus perspiciatis temporibus dolorem. Voluptatibus quo consectetur aut amet magni. Hic cum ducimus quas.</Title></Center>
            </Grid.Col>
          </Grid>
        </Card>
        <br />
        <Card>
            <Grid>
              <Grid.Col span={{span:12 , md:12}}>
              <Center><Title size={"4rem"} c={"dark"}>TECNOLOGIA Y CONECTIVIDAD </Title></Center>
              <Center><Title size={"2.5rem"} c={"dark"}> CONDUCE SIEMPRE CONECTADO </Title></Center>
              <br />
              <Center><Title c={"gray"} size={"2rem"}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, deleniti ab odio nemo, quo velit dignissimos corrupti mollitia eius doloremque corporis modi rem ex nesciunt molestias, voluptate ipsum sequi! Eius?</Title></Center>
              </Grid.Col>
              </Grid>          
        </Card>
        <br />
        <Card bg={"dark"}>
          <Grid>
            <Grid.Col span={{span:12, md:12}}>
              <Center><Title size={"4rem"} c={"white"}>RENDIMIENTO</Title></Center>
                <Center><Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[0]?.base64}`} alt={vehicle?.name} />
                </Center>
                <Center><Title c={"white"}>CIUDAD: 12.5 KM/L</Title></Center>
                <br />
                <Center><Title c={"white"}>CARRETERA : 19.3 KM/L </Title></Center>
                <br /><br />
                <Center><Text size="3rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia ipsum tempora quos! Libero tempora voluptatem harum illum nesciunt quasi nam, pariatur atque praesentium qui suscipit, consectetur laudantium vero voluptatum.</Text></Center> 
                            
                <br />
                  <Group gap="lg" justify="center">
                     <Button  bg={"red"} variant="button" size="xl" radius="xl" ><Title size={"1rem"}>DESCARGAR FICHA TECNICA</Title></Button>
                   </Group>
                            
            </Grid.Col>
          </Grid>
        </Card>
    
        <Footer />
    </Box>
  );
}
