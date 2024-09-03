import { format } from 'date-fns';
import React from "react";
import { Box, Grid, Card, Image, Center, Text, Title, Button, Group} from "@mantine/core"
import { useNavigate } from "react-router-dom";

export const ContenidoBlog = ({ data = [] }) => {
    
    const imgStyles = {
        width: "70rem",
        height: "40rem"
    }

    const navigate = useNavigate();
    const renderCards = () => {
        return data?.map((item, index) => {

            const formattedDate = format(item?.date ? new Date(item?.date) : new Date(), 'dd/MM/yyyy');
            return (
                <Grid.Col span="auto">
                    <Card>
                        <br />
                        <Card.Section>
                            <Center>
                                <Image  style={imgStyles} radius={"xl"} src={`data:image/png;base64,${item?.Images?.[0]?.base64}`} alt={item.title} />

                            </Center>
                        </Card.Section>
                        
                        <Card.Section mt="md">
                            <Title size={"2.5rem"} c={"black"}>
                                {item?.title}
                            </Title>
                            <br />
                            <Text c={"black"} size={"2rem"}>
                                {item?.description}
                            </Text>
                            <br />
                            <Text c={"black"} size={"1.5rem"}>
                                {formattedDate}
                            </Text>
                        </Card.Section>
                        <Card.Section>
                        <Group gap="lg" justify="center">
                         <Button variant="button" onClick={() => navigate(`/blog/${item?.id}`)} size="lg" radius="xl" c={"white"} bg={"red"} >Ver mas</Button>
                </Group>   
                <br />
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