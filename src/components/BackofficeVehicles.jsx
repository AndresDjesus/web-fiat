import React, { useState } from 'react';
import { TextInput, Button, Group, Text, Box, Grid, Center, Title } from '@mantine/core';
import { FormVehicles } from './formVehicles'; // Assuming this is your form component
import { Backoffice } from './Backoffice'; // Assuming this is your backoffice component

export const BackofficeVehicles = () => {
  function renderCards() {
    return (
      <Box>
        <Grid gutter="md"> {/* Add gutter for spacing */}
          <Grid.Col span={4}> {/* Backoffice component takes 6 columns */}
            <Backoffice />
          </Grid.Col>
    
            <Center><Title c={"white"} size={"5rem"}> Cree su nuevo vehiculo</Title></Center>
          <Grid.Col span={8}> {/* FormVehicles component takes 6 columns */}
            <Center>
                <br />
                <FormVehicles />
            </Center>
        
          </Grid.Col>
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
  );
};
