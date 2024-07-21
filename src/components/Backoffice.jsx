import { Box, Grid, Image, Text, Title , NavLink} from "@mantine/core"
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import Logo from '../imagenes/logo-navbar.png';
import React from "react";

export const Backoffice = () => {
  
    const imgStyles = {
        width: "15rem",
        height: "10rem"
    }
    function renderCards(){
    return(
    
    <Box>
        <Grid>
        <Grid.Col c={'blue'} span={{ span:15, md:15}}>
    <>
    <Image style={imgStyles} src={Logo}/>
    <NavLink 
      href="#"
      label= "Vehiculos"
      leftSection={<IconGauge size="1rem" stroke={1.5} />}
    >
      <NavLink href="/backoffice/vehiculos" label= "Crear Vehiculos" />
      <NavLink label = "Modificar Vehiculo" href="#" />
      <NavLink label = "Nested parent link" childrenOffset={28} href="#">
        <NavLink label = "First child link" href="#" />
        <NavLink label = "Second child link" href="#" />
        <NavLink label  = "Third child link" href="#" />
      </NavLink>
    </NavLink>

    <NavLink 
    href="#"
    label = "Imagenes"
    leftSection = {<IconFingerprint size= "1rem" stroke={1.5} />}
    childrenOffset={28}
    defaultOpened
    >
        <NavLink label = "Imagenes de Vehiculos" childrenOffset={28} href="#">
        <NavLink label = "First child link" href="#" />
        <NavLink label = "Second child link" href="#" />
        <NavLink label  = "Third child link" href="#" />
      </NavLink>
      <NavLink label = "Imagenes de Servicos" childrenOffset={28} href="#">
        <NavLink label = "First child link" href="#" />
        <NavLink label = "Second child link" href="#" />
        <NavLink label  = "Third child link" href="#" />
      </NavLink>
    </NavLink>    

    <NavLink 
    href="#"
    label = "Categorias"
    leftSection = {<IconFingerprint size= "1rem" stroke={1.5} />}
    childrenOffset={28}
    defaultOpened
    >
        <NavLink label = "First child link" href="#" />
        <NavLink label = "Second child link" href="#" />
        <NavLink label = "Third child link" href="#" />
    </NavLink>    

    <NavLink 
    href="#"
    label = "Motores"
    leftSection = {<IconFingerprint size= "1rem" stroke={1.5} />}
    childrenOffset={28}
    defaultOpened
    >
        <NavLink label = "First child link" href="#" />
        <NavLink label = "Second child link" href="#" />
        <NavLink label = "Third child link" href="#" />
    </NavLink>    
    </>
        </Grid.Col>
    </Grid>
    </Box>
  );
}
    return (
        <Box>
            <Grid>
                {renderCards()}         
            </Grid>
        </Box>
    )
}
