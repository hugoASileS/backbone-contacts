import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

interface IRowLoadingParams {
  colSpan: number;
}

export default function RowLoading({ colSpan = 0 }: IRowLoadingParams) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <Typography component="h3" variant="h3" textAlign="center">
          Cargando...
        </Typography>
      </TableCell>
    </TableRow>
  );
}
