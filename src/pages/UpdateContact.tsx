import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ContactForm from "../components/ContactForm";
import Container from "@mui/material/Container";
import * as React from "react";
import { IContact } from "../services/IContact";
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from "../services/RTKContactService";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorHttp from "../components/ErrorHttp";
import SuccessHttp from "../components/SuccessHttp";

export default function UpdateContact() {
  let { contactId } = useParams();
  const { data, isLoading, isError, refetch } = useGetContactByIdQuery({
    contactId: contactId ?? "",
  });
  const [
    updateContact,
    { error, isSuccess, isLoading: sendingData, reset: resetUpdate },
  ] = useUpdateContactMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>();

  useEffect(() => {
    if (data) {
      const { email, firstName, lastName, phone, id } = data;
      reset({ email, firstName, lastName, phone, id });
    }
  }, [data, reset]);
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  const onUpdate = function (values: IContact) {
    resetUpdate();
    updateContact(values);
    console.log("en el update");
  };

  const errorTemplate = (
    <Typography component="h3" variant="h1">
      Error 404
    </Typography>
  );
  const formTemplate = (
    <>
      {error && <ErrorHttp error={error} />}
      {isSuccess && <SuccessHttp />}
      <ContactForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onUpdate}
        sendingData={sendingData}
        textButton="Edit Contact"
      ></ContactForm>
    </>
  );

  let context = isError ? errorTemplate : formTemplate;

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
        {isLoading ? <div>Cargando...</div> : context}
      </Box>
    </Container>
  );
}
