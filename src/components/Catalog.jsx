import { Box, Grid, Card, Image, Center, Text, Title } from "@mantine/core"

export const Catalog = ({ data = [] }) => {

    const imgStyles = {
        width: "30rem",
        height: "15rem"
    }

    const renderCards = () => {
        return data?.map((item, index) => {
            return (
                <Grid.Col span="auto">
                    <Card>
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} src={item.image} alt={item.title} />
                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                            <Title order={3} size={"2rem"}>
                                {item.title}
                            </Title>
                            <Text>
                                {item.description}
                            </Text>
                            <Text>
                                {item.price}
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