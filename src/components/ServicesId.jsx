import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footers";
import { Box, Card, Grid, Button, Center, GridCol, Image, Title, Text, Stack, Group } from "@mantine/core";
import {getIdService} from "../services/servicesId";
import { useParams } from "react-router-dom";

export const ServicesId = () => {

    const { id } = useParams();
    const [service, setService] = useState(null);

  useEffect(() => {
    const fetchServiceId = async (id) => {
      try {
        const data = await getIdService(id);
        setService(data);
      } catch (error) {
        console.error('Error fetching vehicle:', error);
      }
    };

    fetchServiceId(id);
  }, []);
  return (
    <Box>
        <Navbar />
        <Card>
            <Card.Section>
                <Center><Title>SERVICIOS</Title></Center>
            </Card.Section>
        </Card>
    </Box>
  )

}