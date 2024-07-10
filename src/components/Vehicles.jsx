import React from "react";
import Navbar from "./Navbar";
import { Vehiclescatalog } from "./Vehiclescatalog";
import { Footer } from "./Footers";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, Stack, Group} from "@mantine/core";

export const Vehicles = () => {
    return (
        <Box>
            <Grid>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Navbar />
                    </Grid.Col>

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Group
                          justify="center"
                        >
                            <Title c={"white"} size={"5rem"}>Explora nuestra amplia selección de vehiculos</Title>
                        </Group>

                    </Grid.Col> 

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Vehiclescatalog  data={[{ title: 'Fiat Argo ', image: 'https://production.autoforce.com/uploads/version/profile_image/9677/model_main_webp_comprar-trekking-1-3_33851cbe52.png.webp', description: 'Vehiculo con motor fireflive cuatro puertas modelo treking, año 2024, sincronico a estrenar', price: '$29000'},{ title: 'Fiat Cronos', image: 'https://fiat.com.ve/wp-content/uploads/2023/10/cronos-bari.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar la mejor calidad y el mejor precio', price: '$30000'},{ title: 'Fiat Mobi', image: 'https://carhomerental.com/cdn/shop/files/Fiat-mobi_600x600_crop_center.png?v=1705101381', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas sincronico ano 2024 a estrenar perfecto para la ciudad', price: '$24000'},{ title: 'Fiat Cronos CVT', image: 'https://www.deruedas.com.ar/images/vehiculos/Fiat-Cronos-2024/6035_im.jpg', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas tipo sedan caja automatica ano 2024 a estrenar', price: '$32000'},{ title: 'Fiat Cronos CVT', image: 'https://www.fiatbolivia.bo/wp-content/uploads/sites/9/2023/07/Fiat-Fastback-Gris-Bari.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas tipo sedan caja automatica ano 2024 a estrenar', price: '$32000'}, { title: 'Fiat Cronos CVT', image: 'https://www.carone.com.ar/wp-content/uploads/2022/01/fiat-toro.png', description: 'Vehiculo tipo sedan , con motor fireflive cuatro puertas tipo sedan caja automatica ano 2024 a estrenar', price: '$32000'}]}/>
                    </Grid.Col>

                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>
    )
}