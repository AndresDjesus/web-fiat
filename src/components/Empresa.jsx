import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid ,Button, Center, GridCol , Image, Title, Text, AspectRatio} from "@mantine/core";
import { getCompany } from "../services/company";

export const Empresa = () => {
    const [company, setCompany] = useState([]);
  
    useEffect(() => {
        const fetchCompany = async () => {
          const data = await getCompany();
          setCompany(data[0]);
        };
     
        fetchCompany(); // Llama a la función dentro del contexto asíncrono
      }, []);
      console.log(company)
    
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
                    <br /><br /><br /><br /><br /><br /><br />
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Nuestra empresa</Title>
                        </Center>    
                    </GridCol>
                    
                    <Grid.Col span={{ span:6, md:6 }}>
                        <br />
                <Center>
                <Title size="5rem" c={"white"}>
                    {company?.name }
                </Title>
                </Center>
                <br />
                    <Center>
                    <Text size="2.5rem" c={"white"}>
                    {company?.description}
                    </Text>
                    </Center>                  
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                <Image  style={imgStyles} src={`data:image/png;base64,${company?.Images?.[0]?.base64}`} alt={company.name} />
                </Card.Section>
            </Grid.Col>
            </Card>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br />
                        <Title c={"white"} size={"4rem"}> Mision </Title>
                        <br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.mission}
                        </Text>
                    </Grid.Col>
                    <br /><br />
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br />
                        <Title c={"white"} size={"4rem"}> Vision </Title>
                        <br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.vision}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <br />
                    <Box border radius={4} padding={20} >
                        <Title size={"4rem"}  c={"white"} weight="bold">Historia</Title>
                    </Box>      
                        <br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.history}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Ubicacion </Title>
                        <br /><br />
                        <AspectRatio ratio={8 / 4}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2070235067645!2d-66.90729730000001!3d10.48434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5f324e4f3e73%3A0x4dfb3dfac4e2140e!2sAutomotores%20Reiga%2C%20C.A.!5e0!3m2!1ses-419!2sve!4v1725412606184!5m2!1ses-419!2sve" 
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Footer />
                    </Grid.Col>
            </Grid>
        </Box>

    )
}
