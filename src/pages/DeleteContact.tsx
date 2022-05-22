import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useAppSelector } from "../hooks/redux-app";
import { selectContactSelected } from "../store/features/contacts/contactSlice";
import { useEffect } from "react";
import { useDeleteContactMutation } from "../services/RTKContactService";
import ErrorHttp from "../components/ErrorHttp";
import SuccessHttp from "../components/SuccessHttp";

export default function DeleteContact() {
  let { contactId } = useParams<{ contactId: string }>();
  let contact = useAppSelector(selectContactSelected);
  const [deleteContact, { isSuccess, error, isLoading }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      console.log("se borro el usuario");
    }
  }, [isSuccess]);
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
        {error && <ErrorHttp error={error} />}
        {isSuccess ? (
          <SuccessHttp />
        ) : (
          <>
            <Typography component="h1" variant="h5" align="center">
              Are you sure you want to delete the contact{" "}
              <strong>
                {contact.firstName} {contact.lastName}
              </strong>{" "}
              with id {contactId}?
            </Typography>
            <Typography component="h5" align="center" color="error.main">
              this change is irreversible
            </Typography>
            {contactId !== undefined && (
              <Button
                variant="contained"
                color="error"
                disabled={isLoading}
                onClick={() => {
                  const id = contactId ?? "";
                  deleteContact({ contactId: id });
                }}
              >
                Delete Contact
              </Button>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}
