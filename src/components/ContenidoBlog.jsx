import { format } from 'date-fns';
import React from "react";
import { Box, Grid, Card, Image, Center, Text, Title, Button, Group} from "@mantine/core"

export const ContenidoBlog = ({ data = [] }) => {
    
    const imgStyles = {
        width: "40rem",
        height: "25rem"
    }
    const renderCards = () => {
        return data?.map((item, index) => {

            const formattedDate = format(item?.date ? new Date(item?.date) : new Date(), 'dd/MM/yyyy');
            return (
                <Grid.Col span="auto">
                    <Card>
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} src={`data:image/png;base64,${item?.Images?.[0]?.base64}`} alt={item.title} />
                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                            <Title order={3} size={"2rem"}>
                                {item.title}
                            </Title>
                            <Text>
                                {item.content}
                            </Text>
                            <Text>
                                {formattedDate}
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Group gap="lg" justify="center">
                            <Button variant="button" size="lg" radius="md" c={"black"} >Ver mas</Button>
                        </Group>
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