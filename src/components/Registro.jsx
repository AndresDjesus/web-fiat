import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Title, Text, Group, Input, Space } from "@mantine/core";
import { Registrarse } from "./Registrarse";

export const Registro = () => {

  return (
    <Box>
      <Grid>
        <Grid.Col span={{ span: 12, md: 12 }}>
          <Navbar />
        </Grid.Col>
        <GridCol span={{ span: 12, md: 12 }}>
          <Center>
            <Title c={"white"} size={"6rem"}>
              Regístrese y sea parte de nosotros
            </Title>
          </Center>
        </GridCol>

        <Grid.Col span={{ span: 6, md: 6 }}>
          <Group justify="center">
          <Registrarse />  
          </Group>
             
        </Grid.Col>

        <Grid.Col span={{ span: 12, md: 12 }}>
          <Footer />
        </Grid.Col>
      </Grid>
    </Box>
  );
};
