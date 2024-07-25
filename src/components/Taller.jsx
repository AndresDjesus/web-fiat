import { BackgroundImage, Center, Text, Box, Grid , Image, Title, Button} from "@mantine/core"

export const Taller = () => {

    return (
        <Grid>
        <Grid.Col span={{ span:6, md:6 }}>
        <Box maw={4000} mx="100">
          <br /><br />
      <BackgroundImage 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVfgJnLY_9foEDLEyGKTh-Dbngpc7NdyTLEO0xGgZXR7fet-pGURq3whguGCDNuVSDw86zHLqhuGDI-lfO3QyskKu5Vom7qZDuIt5jiAhzFLH3AqopAhZKYkGYmZWSXrIx6UA71rVXj08/s1600/Fiat.png" alt="Fiat Cronos" radius="md" opacity={1}
      >
        
          <Center p="md">
          
          <Text c={"bla"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">Consignacion Fisica</Title>
          </Center>
            <Text c={"black"}>
            ¡Confió en nosotras!Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis fugit vero cumque sequi neque obcaecati beatae aliquam earum dolore? Beatae sequi error maiores sunt reprehenderit eaque labore, eius saepe!
             </Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }}
                >
                Solicitar Informacion
          </Button>
        </Center>
           
      </BackgroundImage>
      
        </Box>
        </Grid.Col>
        <Grid.Col span={{ span:6, md:6 }}>
            
        <Box maw={4000} mx="100">
          <br /><br />
      <BackgroundImage 
        src="https://www.fiatprofessional.com/content/dam/moc/fiat/find_a_repair_shop_or_concessionary/mobile/find_a_repair_shop_fiat.png" alt="Fiat Cronos" radius="md" opacity={0.9}
      >
        
          <Center p="md">
          
          <Text c={"bla"} size="5rem" lineClamp={10}>
          <Center> 
              <Title c={"red"} size="6rem">Taller</Title>
          </Center>
            <Text c={"black"} fontWeight={700}>
            ¡Confió en nosotras!Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis fugit vero cumque sequi neque obcaecati beatae aliquam earum dolore? Beatae sequi error maiores sunt reprehenderit eaque labore, eius saepe! 
             </Text>                
          </Text>
         
        </Center>
        <Center>
        <Button
                variant="gradient" size="xl"
                gradient={{ from: 'red', to: 'gray', deg: 90 }} component="a" href="/servicios"
                >
                Conoce nuestros Servicios
          </Button>
        </Center>
           
      </BackgroundImage>
      
        </Box>
        </Grid.Col>
      </Grid>
    );
}