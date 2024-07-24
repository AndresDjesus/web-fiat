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
                    <GridCol span={{ span:12, md:12 }}>
                        <Center>
                            <Title c={"white"} size={"6rem"}>Nuestra empresa</Title>
                        </Center>    
                    </GridCol>
                    <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem" c={"white"}>
                    {company.name }
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                    {company.description}
                    </Text>
                    </Center>                  
                </Card>
                   
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                <Image  style={imgStyles} src={`data:image/png;base64,${company?.Images?.[0]?.base64}`} alt={company.name} />
                </Card.Section>
            </Grid.Col>
            </Card>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Mision </Title>
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.mission}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Vision </Title>
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.vision}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                    <Box border radius={4} padding={20} style={{ border: "2px solid red" }}>
                        <Title size={"4rem"}  c={"white"} weight="bold">Historia</Title>
                    </Box>      
                        <br /><br />
                        <Text c={"white"} size="2.5rem">
                            {company?.CompanyProfiles?.[0]?.history}
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={{ span:12, md:12 }}>
                        <Title c={"white"} size={"4rem"}> Ubicacion </Title>
                        <br /><br />
                        <AspectRatio ratio={10 / 4}>
                        <iframe
                                src="https://www.google.com/maps/place/Automotores+Reiga,+C.A./@10.48434,-66.9072973,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a5f324e4f3e73:0x4dfb3dfac4e2140e!8m2!3d10.48434!4d-66.9072973!16s%2Fg%2F11f3r694v9?entry=ttu"
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
