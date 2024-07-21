import { Box, Grid } from "@mantine/core";
import { VehicleForm } from "./VehicleForm";
export const FormVehicles = () => {
    function renderCards() {
    return (
      <Box>
        <Grid c={'blue'} span={{ span:12, md:12}}>
          <VehicleForm />  {/* Renderizar el componente del formulario */}
        </Grid>
      </Box>
    )
  }

  return (
    <Box>
      <Grid>
        {renderCards()}         
      </Grid>
    </Box>
  )
}
  