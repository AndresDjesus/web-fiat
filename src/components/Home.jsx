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
export const Home = () => {
        return (
            <Box>
                <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>
                    <Grid>

                    <Grid.Col span={{ span:12, md:12}} >
                        <br />
                        <Presentacion />
                    </Grid.Col> 
                    </Grid>
                          
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br />
                        <Center>
                        <Title c={"white"} size={"4rem"}>Ven y explora nuestra amplia selección de vehiculos nuevos disponibles</Title>
                        </Center>
                        <br />
                        <Catalog data={[{ title: 'Fiat Argo ', image: 'https://production.autoforce.com/uploads/version/profile_image/9677/model_main_webp_comprar-trekking-1-3_33851cbe52.png.webp', description: 'Vehiculo con motor fireflive cuatro puertas modelo treking, año 2024, sincronico a estrenar', price: '29000$'},{ title: 'Fiat Cronos', image: 'https://fiat.com.ve/wp-content/uploads/2023/10/cronos-bari.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar la mejor calidad y el mejor precio', price: '30000$'},{ title: 'Fiat Mobi', image: 'https://carhomerental.com/cdn/shop/files/Fiat-mobi_600x600_crop_center.png?v=1705101381', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar perfecto para la ciudad', price: '24000$'},{ title: 'Fiat Cronos CVT', image: 'https://www.deruedas.com.ar/images/vehiculos/Fiat-Cronos-2024/6035_im.jpg', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas tipo sedan caja automatica ano 2024 a estrenar', price: '32000$'}]} />
                        <br /><br />
                        <Center>
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }}
                        >
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
                        <Center>
                        <Text c={"white"} size={"3rem"}>Somos tu mejor opcion a nivel metropolitano para realizar la compra de tu proximo fiat</Text>
                        </Center>
                        <br /><br />
                        
                        <Text c={"white"} size={"2rem"}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, tempora. Veritatis repudiandae necessitatibus ipsa molestias aliquam, optio earum delectus consectetur, neque quisquam eaque maxime ipsam tempora, blanditiis sed non error?
                        </Text>
                        <Center>
                        <br /><br /><br /><br />
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }}
                        >
                        Conoce más sobre nuestra empresa
                        </Button>
                        </Center>      
                    </Grid.Col>
                    <Grid.Col span= {{ span:12, md:12}}> 
                        <Center>
                            <Title c={"white"} size={"5rem"}> Ven y conoce los servicios que tenemos para ti </Title>
                        </Center>
                        <br /><br />
                        <Servicios data={[{ title: 'Venta de Vehiculos ', image: 'https://thumbs.dreamstime.com/b/icono-s%C3%B3lido-negro-para-auto-save-el-dinero-y-seguro-veh%C3%ADculo-coche-la-venta-reserva-transporte-150550140.jpg', description: 'Vehiculo con motor fireflive cuatro puertas modelo treking, año 2024, sincronico a estrenar'},{ title: 'Financiamiento', image: 'https://cdn-icons-png.flaticon.com/256/2030/2030132.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar la mejor calidad y el mejor precio'},{ title: 'Servicios de Garantia', image: 'https://cdn-icons-png.flaticon.com/512/7541/7541603.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar perfecto para la ciudad'},{ title: 'Escaneo de Vehiculos', image: 'https://st2.depositphotos.com/1064969/42558/v/450/depositphotos_425581726-stock-illustration-car-diagnostic-icons-black-white.jpg', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas tipo sedan caja automatica ano 2024 a estrenar'}]} />
                        
                        <br /><br />
                        <Center>
                        <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }}
                        >
                        Ver Todos los Servicios
                        </Button>
                        </Center>
                        <br /><br />
                    </Grid.Col>
                        <br />
                    <Grid.Col span={{ span:12, md:12}}>
                        <Imagenfondo />
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12}}>
                        <Imagenfondo2 />
                    </Grid.Col>
                    <Grid.Col>
                    <Center>
                        <Title c={"white"} size={"5rem"}> Ven y vive la Experiencia Fiat</Title>
                        </Center>
                        <Image width="60%" height="auto" src={Concesionario} radius="md" />
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