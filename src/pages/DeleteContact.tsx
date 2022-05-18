import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

export default function DeleteContact() {
  let { contactId } = useParams();
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginY: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          Are you sure you want to delete the contact {contactId}?
        </Typography>
        <Typography component="h5" align="center" color="error.main">
          this change is irreversible
        </Typography>
        <Button variant="contained" color="error">
          Delete Contact
        </Button>
      </Box>
    </Container>
  );
}
