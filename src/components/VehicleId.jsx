import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Image, Title, Text, Stack, Group } from "@mantine/core";
import { getVehicleId } from "../services/vehiclesId";
import { useParams } from "react-router-dom";

export const VehicleId = () => {

    const imgStyles = {
        width: "60rem",
        height: "35rem"
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
        
        
        <Card>
             <Grid>
                 <Grid.Col span={{ span:5, md:5}}>
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
                        <GridCol span={{ span:12, md:12 }}>
    
                        

                        </GridCol>
                </Grid.Col>
            </Grid>                       
        </Card>
       

        <Footer />
    </Box>
  );
}
