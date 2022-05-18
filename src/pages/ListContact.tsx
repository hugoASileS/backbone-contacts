import TableWithPagination from "../components/Table";
import * as React from "react";

export default function ListContact() {
  const [page, setPage] = React.useState(1);
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
      <h2>List Contact</h2>
      <TableWithPagination
        onPageChange={handleChangePage}
        onRowsPerPageChange={onPerPage}
        rowsPerPage={rowsPerPage}
        page={page}
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
        ]}
      ></TableWithPagination>
    </>
  );
}
