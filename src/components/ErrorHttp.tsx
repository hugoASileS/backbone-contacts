import { Alert, AlertTitle } from "@mui/material";
import * as React from "react";

interface IErrorHttpProps {
  error: any;
}

export default function ErrorHttp({ error }: IErrorHttpProps) {
  return (
    <Alert severity="warning">
      <AlertTitle>Error</AlertTitle>
      {error?.data?.message}
    </Alert>
  );
}
