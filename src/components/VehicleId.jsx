import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Image, Title, Text, Stack, Group, Icon } from "@mantine/core";
import { getVehicleId } from "../services/vehiclesId";
import { useParams } from "react-router-dom";
import '@mantine/carousel/styles.css';
import { rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { TbEngine } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";
import { MdOutlineSmartScreen } from "react-icons/md";
import { GiLever } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { FaRoad } from "react-icons/fa";
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
                            <Button  bg={"white"} variant="button" size="xl" radius="xl" c={"black"} component="a" href="/contactanos">Contactar</Button>
                            </Group>  
                            </Grid.Col>
                            <Grid.Col span={{ span:6, md:6 }}>
                            <Group gap="lg" justify="center">
                            <Button  bg={"white"}  variant="button" size="xl" radius="xl" c={"black"} component="a" href="/servicios" >Financiamiento</Button>
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
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[1]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[2]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[3]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
        <Carousel.Slide>
        <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.Images[4]?.base64}`} alt={vehicle?.name} />
        </Carousel.Slide>
      </Carousel>

                  </Group>
                 </Grid.Col> 
                  </Grid>
                </Grid.Col>
            </Grid>                       
        </Card>
        <br />
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
                                  <TbEngine size={"10rem"} color="white"/>
                                 <Title c={"white"}>Categoria</Title>
                                 <Title c={"white"} >{vehicle?.category?.name} </Title>
                                 <IoCarSportSharp size={"10rem"} color="white"/>
                        </Card.Section>  
                    </Group>
                </Grid.Col>

                <Grid.Col span={{span:2.5 , md:2.5}}>
                  <Group gap="lg" justify="center">
                    <br /><br />
                     <Card.Section  sx={{ height: "35rem" }}>
                                 <Title c={"white"}> Transmision</Title>
                                 <Title c={"white"}>{vehicle?.transmission}</Title>
                                 <GiLever size={"10rem"} color="white"/>
                                 <br />
                                 <Title c={"white"}> Pantalla</Title>
                                 <Title c={"white"}>{vehicle?.screen}</Title>
                                <MdOutlineSmartScreen size={"10rem"} color="white"/>
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
        <Card>
        <Grid>
              <Grid.Col span={{span:12 , md: 12}}>
                <Center><Title size={"4rem"} c={"dark"}> DISENO </Title></Center>
                <Center><Title size={"2.5rem"} c={"dark"}>{vehicle?.design?.title}</Title></Center>
                <br /><br />
                <Grid>
                 <Grid.Col span={{ span:5 , md: 5}}>
                 <Group gap="lg" justify="center">
                    <br /><br />
                     <Card.Section  sx={{ height: "30rem" }}>
                       <Center><Text c={"dark"} size={"2rem"}>{vehicle?.design?.content}</Text></Center>
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
            <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.design?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image style={imgStyles} src={`data:image/png;base64,${vehicle?.design?.Images[1]?.base64}`} alt={vehicle?.name} />
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
                <Center><Title size={"2.5rem"} c={"dark"}> {vehicle?.inside?.title} </Title></Center>
                <br />
                <Carousel
              slideSize="90%"
              height={"70rem"}
              nextControlIcon={<IconArrowRight style={{ width: rem(50), height: rem(50) }} />}
              previousControlIcon={<IconArrowLeft style={{ width: rem(50), height: rem(50) }} />}
               >
            <Carousel.Slide>
            <Image style={imgCarrusel} src={`data:image/png;base64,${vehicle?.inside?.Images[0]?.base64}`} alt={vehicle?.name} />
            </Carousel.Slide>
            <Carousel.Slide>
            <Image style={imgCarrusel} src={`data:image/png;base64,${vehicle?.inside?.Images[1]?.base64}`} alt={vehicle?.name} /><Image style={imgCarrusel} src={`data:image/png;base64,${vehicle?.inside?.Images[2]?.base64}`}/>
            </Carousel.Slide>
            </Carousel>
            <br />
            <Center><Title c={"dark"} size={"3rem"}>{vehicle?.inside?.content}</Title></Center>
            </Grid.Col>
          </Grid>
        </Card>
        <br />
        <Card>
            <Grid>
              <Grid.Col span={{span:12 , md:12}}>
              <Center><Title size={"4rem"} c={"dark"}>TECNOLOGIA Y CONECTIVIDAD </Title></Center>
              <Center><Title size={"2.5rem"} c={"dark"}> {vehicle?.technology?.title} </Title></Center>
              <br />
              <Center><Title c={"gray"} size={"2rem"}>{vehicle?.technology?.content}</Title></Center>
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
                <Center><FaCity  size={"3rem"} color="red"/>
                <Title c={"white"}>CIUDAD: {vehicle?.combustible?.ciudad}</Title></Center>
                <br />
                <Center><FaRoad size={"3rem"} color="red"/>
                <Title c={"white"}>CARRETERA : {vehicle?.combustible?.carretera}</Title></Center>
                <br /><br />
                <Center><Text size="3rem">{vehicle?.combustible?.description}</Text></Center> 
                            <br /><br />
            </Grid.Col>
          </Grid>
        </Card>
    
        <Footer />
    </Box>
  );
}
