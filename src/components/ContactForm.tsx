import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form";
import { IContact } from "../services/IContact";
import { FormHelperText } from "@mui/material";
import { UseFormRegister } from "react-hook-form/dist/types/form";

interface IContactFormProps {
  onSubmit: SubmitHandler<IContact>;
  textButton: string;
  register: UseFormRegister<IContact>;
  handleSubmit: UseFormHandleSubmit<IContact>;
  errors: FieldErrors<IContact>;
  sendingData: boolean;
}

export default function ContactForm({
  onSubmit,
  textButton,
  register,
  handleSubmit,
  errors,
  sendingData,
}: IContactFormProps) {
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={!!errors?.firstName}
            autoComplete="given-name"
            fullWidth
            required
            id="firstName"
            label="First Name"
            autoFocus
            {...register("firstName", {
              required: "The First Name field is required ",
            })}
          />
          {errors?.firstName?.message && (
            <FormHelperText id="my-helper-text" error={true}>
              {errors.firstName.message}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors?.lastName}
            fullWidth
            required
            id="lastName"
            label="Last Name"
            autoComplete="family-name"
            {...register("lastName", {
              required: "The Last Name field is required",
            })}
          />
          {errors?.lastName?.message && (
            <FormHelperText id="my-helper-text" error={true}>
              {errors.lastName.message}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors?.email}
            fullWidth
            required
            id="email"
            label="Email Address"
            inputProps={{ inputMode: "email" }}
            autoComplete="email"
            {...register("email", {
              required: "The Email field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          {errors?.email?.message && (
            <FormHelperText id="my-helper-text" error={true}>
              {errors.email.message}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={!!errors?.phone}
            fullWidth
            required
            label="Phone"
            id="phone"
            inputProps={{ inputMode: "tel", maxLength: 10 }}
            autoComplete="phone"
            {...register("phone", {
              required: "The Phone field is required",
              pattern: {
                value: /^\d{10}$/i,
                message: "10 digit phone number",
              },
            })}
          />
          {errors?.phone?.message && (
            <FormHelperText id="my-helper-text" error={true}>
              {errors.phone.message}
            </FormHelperText>
          )}
        </Grid>
      </Grid>
      <Button
        disabled={sendingData}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {textButton}
      </Button>
    </Box>
  );
}
