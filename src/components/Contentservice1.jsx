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
    return(
        <Box>
        <Grid>
            <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem" c={'white'}>
                 {item.title}
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                    {item.description}
                    </Text>
                    </Center>     

                <Group gap="lg" justify="center">
                    <Button variant="button" onClick={() => navigate(`/servicios/${index}`)} size="lg" radius="md" c={"black"} >Ver mas</Button>
                    </Group>             
                </Card>
                   
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                    <Image style={imgStyles} src={item.image} alt={item.title} />
                    
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
