import { Box, Grid, Card, Image, Center, Text, Title ,Button, Group, GridCol} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const Contentservice1 = ({ data = [] }) => {
    const imgStyles = {
        width: "70rem",
        height: "30rem"
    }

    
    const navigate = useNavigate();
    const renderCards = () => {
        return data?.map((item, index) => {
            const main = item?.Images?.find((image) => image.principal);
    return(
        <Box>
        <Grid>
            <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem" c={'white'}>
                 {item.name}
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                    {item.description}
                    </Text>
                    </Center>               
                </Card>
                <br />
                <Group gap="lg" justify="center">
                <Button
                        variant="gradient" size="xl"
                        gradient={{ from: 'red', to: 'gray', deg: 90 }}
                        component="a" href="/contactanos">
                        Contactar
                </Button>
                </Group>   
                <br /><br /><br />
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                <Image  style={imgStyles} src={`data:image/png;base64,${item?.Images?.[0]?.base64}`} alt={item.title} />
                </Card.Section>
            </Grid.Col>
            </Card>
            
            
        </Grid>
        </Box>
    )});
}


return (
    <Box>
        <Grid>
            {renderCards()}         
        </Grid>
    </Box>
)
}
