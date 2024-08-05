import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Center, Title, Text,  Image } from "@mantine/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faMapMarkedAlt, faClock,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getCompany } from "../services/company";
import {getFooter} from "../services/footer";

export const Contactanos = () => {
  const [company, setCompany] = useState([]);
  
  useEffect(() => {
      const fetchCompany = async () => {
        const data = await getCompany();
        setCompany(data[0]);
      };
   
      fetchCompany(); // Llama a la función dentro del contexto asíncrono
    }, []);
  
    const [footer, setFooter] = useState([]);
    useEffect(() => {
      const fetchFooter = async () => {
        const data = await getFooter();
        setFooter(data[0]);
      };
      fetchFooter(); // Llama a la función dentro del contexto asíncrono
    }, []);

  const imgStyles = {
      width: "90rem",
      height: "40rem"
  }
  return (
    <Box>
      <Grid span={{span: 12, md:12}}>
        <Grid.Col span={{ span: 12, md: 12 }}>
          <Navbar />
        </Grid.Col>
        <Grid.Col bg={'blue'} span={{ span: 12, md: 12 }}>
          <Center>
            <Title  c={"white"} size={"6rem"}>
              CONTACTANOS
            </Title>
          </Center>
        </Grid.Col>
        <Grid.Col span="auto">
          <br />
          <Card>
          <Card.Section bg={"gray"}>
            <br /> 
                <Center><Image  style={imgStyles} src={`data:image/png;base64,${company?.Images?.[0]?.base64}`} alt={company.name} /></Center>
                <br /><br />
                <Center>
                <Title size="5rem" c={"white"} >
                    {company?.name }
                </Title>
                </Center>
                <br />
                <Center><FontAwesomeIcon icon={faMapMarkedAlt} size='8x' color='white'/></Center>
                <Center><Title size="5rem" c={"white"}>Direccion</Title></Center>
                <br />
                <Center><Text size="3rem" c={"white"}>{footer?.address}</Text></Center>
                <br /><br />
                <Center><FontAwesomeIcon icon={faClock} size='8x' color='white'/></Center>
                <Center><Title size="5rem" c={"white"} >Horario de Trabajo</Title></Center>
                <br />
                <Center><Text size="3rem" c={"white"}>Lunes a viernes 8:00 am. a 5:30 pm. (Horario corrido)Sabados: 9:00 am. a 1:00 pm.</Text></Center>
                <br /><br />
                <Center><FontAwesomeIcon icon={faPhone} size='8x' color='white'/></Center>
                <Center><Title size="5rem" c={"white"} >Telefono</Title></Center>
                <br />
                <Center><Text size="3rem" c={"white"}>{footer?.phone}</Text></Center>
                <br /><br />
                <Center><FontAwesomeIcon icon={faWhatsapp} size='8x' color='white'/></Center>
                <Center><Title size="5rem" c={"white"} >WhatsApp</Title></Center>
                <br />
                <Center><Text size="3rem" c={"white"}>{footer?.social_networks?.[0]?.whatsapp?.number} 04146578796</Text></Center>
                <br /><br />
                <Center><FontAwesomeIcon icon={faEnvelope} size='8x' color='white' /></Center>
                <Center><Title size="5rem" c={"white"} >E-mail</Title></Center>
                <br />
                <Center><Text size="3rem" c={"white"}>{footer?.email}</Text></Center>
                <br /><br />

          </Card.Section>
          </Card>
        </Grid.Col>


        <Grid.Col span={{ span: 12, md: 12 }}>
          <Footer />
        </Grid.Col>
      </Grid>
    </Box>
  );
};
