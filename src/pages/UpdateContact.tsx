import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "../components/ContactForm";
import Container from "@mui/material/Container";
import * as React from "react";

export default function UpdateContact() {
  let { contactId } = useParams();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3">
          Update Contact
        </Typography>
        <ContactForm></ContactForm>
      </Box>
    </Container>
  );
}
