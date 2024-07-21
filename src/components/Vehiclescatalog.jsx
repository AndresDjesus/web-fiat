import { Box, Grid, Card, Image, Center, Text, Title ,Button, Group, GridCol} from "@mantine/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";


export const Vehiclescatalog = ({ data = [] }) => {
    const imgStyles = {
        width: "60rem",
        height: "35rem"
    }

    const navigate = useNavigate();

    const renderCards = () => {

        return data?.map((item, index) => {
            const main = item?.Images?.find((image) => image.principal);
            return (
                <Grid.Col span="auto">
                    <Card>
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} src={`data:image/png;base64,${main?.base64}`} alt={item.name} />
                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                           
                            <Text c="black" size={"3rem"} fw={"bold"}>
                                {item.price}    
                            </Text>
                            <Center>
                            <Title order={2} size={"4rem"}>
                                {item.name}
                            </Title>
                            </Center>
                            <Text c="black">
                                {item.description ?? "No hay descripción"}
                            </Text>
                        </Card.Section>
                        <GridCol span={{ span:12, md:12 }}>
                            
                        <Group gap="lg" justify="center">
                            <Button variant="button" onClick={() => navigate(`/vehiculos/${index}`)} size="lg" radius="md" c={"black"} >Ver mas</Button>
                         <Button size='3x' variant="default">
                        <FontAwesomeIcon icon={faInstagram} size='4x' color='red'/>
                         </Button>
                         <Button size='3x' variant="default">
                         <FontAwesomeIcon icon={faWhatsapp} size='4x' color='red'/>
                        </Button>
                        </Group>

                        </GridCol>
                    </Card>
                </Grid.Col>
            )
        });
    }

    return (
        <Box>
            <Grid>
                {renderCards()}         
            </Grid>
        </Box>
    )
}