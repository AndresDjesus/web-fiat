import React, { useEffect, useState } from "react";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text} from "@mantine/core";
import Navbar from "./Navbar";
import { Catalog } from "./Catalog";
import { Presentacion } from "./Presentacion";
import { Imagenfondo } from "./BackgroundImage";
import { Imagenfondo2 } from "./BackgroundImage2";
import { Carrusel } from "./Carrusel";
import { Footer } from "./Footers";
import { Servicios } from './Servicios';
import { Taller } from './Taller';
import Concesionario from '../imagenes/concesionario.png';
import { getVehicles } from "../services/vehicles";
import { getServices } from "../services/services";
import { getIndex } from "../services";
import { getCompany } from "../services/company";

export const Home = () => {
    const [services, setServices] = useState([]);

        useEffect(() => {
            const fetchServices = async () => {
                setServices(await getServices());
            }
    
            fetchServices();
        }, []);

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            setVehicles(await getVehicles());
        }

        fetchVehicles();
    }, []);

    const [index, setIndex] = useState([]);

    useEffect(() => {
        const fetchIndex = async () => {
            setIndex(await getIndex());
        }

        fetchIndex();
    }, []);

    const [company, setCompany] = useState([]);
    useEffect(() => {
        const fetchCompany = async () => {
          const data = await getCompany();
          setCompany(data[0]);
        };
     
        fetchCompany(); // Llama a la función dentro del contexto síncrono
      }, []);
        return (
            <Box>
                <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <Grid>
                    <br /><br />
                    <Grid.Col span={{ span:12, md:12}} >
                        <br />
                        <br /><br /><br /><br /><br /><br /><br />
                        <Presentacion />
                    </Grid.Col> 
                    </Grid>
                          
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br />
                        <Center>
                        <Title c={"white"} size={"4rem"}>Ven y explora nuestra amplia selección de vehiculos nuevos disponibles</Title>
                        </Center>
                        <br />
                        <Catalog data={vehicles} />
                        <br /><br />
                        <Center>
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }}
                        component="a" href="/vehiculos">
                        Ver Catalogo
                        </Button>
                        </Center>
                        <br /><br />
                    </Grid.Col>
                    <Grid.Col>
                        <Carrusel />
                        <br />
                    </Grid.Col>
                    
                    <Grid.Col>
                        <Center>
                        <Title c={"white"} size={"5rem"}> Compra tu Proximo vehículo aquí en Automores Reiga</Title>
                        </Center>
                        <Center><Text c={"white"} size={"3rem"}>{index[0]?.buyVehicletitle}</Text></Center>
                        <br /><br />
                        
                        <Text c={"white"} size={"2rem"}>{index[0]?.buyVehiclecontent}</Text>
                        <Center>
                        <br /><br /><br /><br />
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/empresa">
                        
                        Conoce más sobre nuestra empresa
                        </Button>
                        </Center>      
                    </Grid.Col>
                    <Grid.Col span= {{ span:12, md:12}}> 
                        <Center>
                            <Title c={"white"} size={"5rem"}> Ven y conoce los servicios que tenemos para ti </Title>
                        </Center>
                        <br /><br />
                        <Servicios data={services} />
                        
                        <br /><br />
                        <Center>
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/servicios">
                        
                        Ver Todos los Servicios
                        </Button>
                        </Center>
                        <br /><br />
                    </Grid.Col>
                        <br />
                    <Grid.Col span={{ span:12, md:12}}>
                        <Imagenfondo />
                    </Grid.Col>
                    <br /><br />
                    <Grid.Col span={{ span:12, md:12}}>
                        <br /><br /><br /><br />
                        <Imagenfondo2 />
                    </Grid.Col>
                    <Grid.Col>
                    <Center>
                        <Title c={"white"} size={"5rem"}> Ven y vive la Experiencia Fiat</Title>
                        </Center>
                        <Image  radius={"xl"} src={`data:image/png;base64,${company?.Images?.[0]?.base64}`} alt={company?.name} />
                    </Grid.Col>

                    <Grid.Col>
                        <Taller />
                    </Grid.Col>
                    
                    <Grid.Col span={{span:12, md:12}}>
                        <br /><br />
                        <Footer />
                    </Grid.Col>
                    
                </Grid>
            </Box>
    )
}