import { BackgroundImage, Center, Text, Box, Grid , Image, Title} from "@mantine/core"

export const Imagenfondo = () => {

    const imgStyles = {
        width: "70rem",
        height: "30rem"
    }
    const renderCards = () => {
    return(
        <Box maw={5000} mx="100">
          <br /><br />
      <BackgroundImage 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhon-cCM7-RoDFvN8G6_YKMQUgumET7vEmhMI3mCzBm6HAhewao_U9RZr8tZ-OFSh_AnIrFqBwzu-G7S9tR6fdIiq5lU92z-CHr2NoRDf0p7V7ayicPF5fNe1Hk7XY8u9Lj8_CX4Yu9PuM/s1600/Fiat-Recall.png" alt="Fiat Cronos" radius="md" opacity={1}
      >
        
          <Center p="md">
          
          <Text c={"blue"} size="5rem" >
          <Center> 
              <Title c={"red"} size="6rem">¿Por qué Nosotros?</Title>
          </Center>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis fugit vero cumque sequi neque obcaecati beatae aliquam earum dolore? Beatae sequi error maiores sunt reprehenderit eaque labore, eius saepe!
           
          </Text>
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
