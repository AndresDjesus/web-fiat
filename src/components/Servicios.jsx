import { Box, Grid, Card, Image, Center, Text, Title, Button } from "@mantine/core"

export const Servicios = ({ data = [] }) => {

    const imgStyles = {
        width: "20rem",
        height: "15rem"
    }

    const cardStyles = {
        borderRadius: 20,
        padding: 16,
      };

    const renderCards = () => {
        return data?.map((item, index) => {
            return (
                <Grid.Col span="auto">
                
                    <Card style={cardStyles}>
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} src={item.image} alt={item.title} />
                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                            <Center>
                                <Title order={3} size={"2rem"}>
                                    {item.title}
                                </Title>
                            </Center>
                            
                            <Text>
                                {item.description}
                            </Text>
                        </Card.Section>
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