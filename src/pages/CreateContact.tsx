import ContactForm from "../components/ContactForm";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function CreateContact() {
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
          New Contact
        </Typography>
        <ContactForm></ContactForm>
      </Box>
    </Container>
  );
}
