import ContactForm from "../components/ContactForm";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { IContact } from "../services/IContact";
import { useCreateContactMutation } from "../services/RTKContactService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorHttp from "../components/ErrorHttp";
import SuccessHttp from "../components/SuccessHttp";

export default function CreateContact() {
  const [createContact, { error, isSuccess, isLoading: sendingData }] =
    useCreateContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>();

  const onCreate = (values: IContact) => createContact(values);

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

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
        {error && <ErrorHttp error={error} />}
        {isSuccess && <SuccessHttp />}
        <ContactForm
          sendingData={sendingData}
          errors={errors}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onCreate}
          textButton="Add Contact"
        ></ContactForm>
      </Box>
    </Container>
  );
}
