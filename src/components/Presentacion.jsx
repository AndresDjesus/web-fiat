import { Box, Grid, Card, Image, Center, Text , Title} from "@mantine/core"

export const Presentacion = ({ data = [] }) => {
    const imgStyles = {
        width: "70rem",
        height: "30rem"
    }

    const renderCards = () => {
    return(
        <Box>
        <Grid>
            <Grid.Col span={{ span:6, md:6 }}>
                <Center>
                <Title size="5rem">
                Tenemos Todo lo que tu Vehiculo Necesita
                </Title>
                </Center>
                <Card>
                    <Center>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis error quas eveniet consequuntur illo minus. Sunt, inventore. Sint expedita porro placeat voluptatem id accusantium quasi amet fuga nemo qui?
                    </Text>
                    </Center>                  
                </Card>
                   
             </Grid.Col>
            <Card>
            <Grid.Col span={{ span:6, md:6 }}>
                <Card.Section>
                    <Image style={imgStyles} src='https://i0.wp.com/autosyclubes.com.ar/wp-content/uploads/2021/07/Cronos_2022_AYC_TOP.jpg?fit=800%2C400&ssl=1' alt='Fiat Cronos' />
                    
                </Card.Section>
            </Grid.Col>
            </Card>
            
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
