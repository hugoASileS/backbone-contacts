import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { IColumn } from "./Table";
import { IContact } from "../../services/IContact";
import { UseFormRegister } from "react-hook-form/dist/types/form";

export default function RowSearch({
  columns,
  register,
  onCleanSearch,
}: {
  columns: any;
  register: UseFormRegister<any>;
  onCleanSearch: () => void;
}) {
  const onSearch = () => {};

  return (
    <TableRow>
      {columns
        .filter((column: IColumn) => column.id !== "actions")
        .map((column: IColumn) => {
          return (
            <TableCell key={column.id}>
              <TextField
                fullWidth
                id={column.id}
                label={column.label}
                {...register(column.id)}
              />
            </TableCell>
          );
        })}
      <TableCell>
        <Button onClick={onSearch} type="submit">
          Search
        </Button>
        <Button onClick={onCleanSearch}>Clean</Button>
      </TableCell>
    </TableRow>
  );
}
