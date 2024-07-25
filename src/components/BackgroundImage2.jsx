import { BackgroundImage, Center, Text, Box, Grid , Image, Title, Button} from "@mantine/core"

export const Imagenfondo2 = () => {
   
    const renderCards = () => {
    return(
        <Box maw={5000} mx="100">
          <br /><br />
      <BackgroundImage 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVfgJnLY_9foEDLEyGKTh-Dbngpc7NdyTLEO0xGgZXR7fet-pGURq3whguGCDNuVSDw86zHLqhuGDI-lfO3QyskKu5Vom7qZDuIt5jiAhzFLH3AqopAhZKYkGYmZWSXrIx6UA71rVXj08/s1600/Fiat.png" alt="Fiat Cronos" radius="md" opacity={1}
      >
        
          <Center p="md">
          
          <Text c={"blue"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">¿Buscando tu Vehículo Ideal?</Title>
          </Center>
            <Text c={"blue"}>
            ¡Confió en nosotras!Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis fugit vero cumque sequi neque obcaecati beatae aliquam earum dolore? Beatae sequi error maiores sunt reprehenderit eaque labore, eius saepe!
             </Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/vehiculos"
                >
                Ver Catalogo
          </Button>
        </Center>
           
      </BackgroundImage>
      
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
