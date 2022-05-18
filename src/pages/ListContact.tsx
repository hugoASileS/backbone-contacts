import TableWithPagination from "../components/Table";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";

export default function ListContact() {
  let navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const onPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <h2>List Contact</h2>
        </Grid>
        <Grid item xs={12} lg={6} textAlign="right">
          <Button
            variant="contained"
            onClick={() => navigate("/contacts/create")}
          >
            Add Contact
          </Button>
        </Grid>
      </Grid>

      <TableWithPagination
        onPageChange={handleChangePage}
        onRowsPerPageChange={onPerPage}
        rowsPerPage={rowsPerPage}
        page={page}
        onEdit={(contactId) => navigate(`/contacts/${contactId}/update`)}
        onDelete={(contactId) => navigate(`/contacts/${contactId}/delete`)}
        rows={[
          {
            _id: "62830fc82c53ad00162bcb2c",
            firstName: "gaston",
            lastName: "Briones",
            email: "unmaisl@gmail.com",
            phone: "2333331112",
            createdAt: "2022-05-17T03:00:24.257Z",
            updatedAt: "2022-05-17T03:00:24.257Z",
            __v: 0,
            id: "62830fc82c53ad00162bcb2c",
          },
          {
            _id: "62830fc82c53ad00162bcb2c",
            firstName: "gaston",
            lastName: "Briones",
            email: "unmaisl@gmail.com",
            phone: "2333331112",
            createdAt: "2022-05-17T03:00:24.257Z",
            updatedAt: "2022-05-17T03:00:24.257Z",
            __v: 0,
            id: "62830fc82c53ad00162bcb2c",
          },
        ]}
      ></TableWithPagination>
    </>
  );
}
