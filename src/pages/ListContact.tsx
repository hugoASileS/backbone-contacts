import TableWithPagination, {
  IColumn,
  TOrder,
} from "../components/Table/Table";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import {
  ICustomFetchError,
  useGetAllContactsQuery,
} from "../services/RTKContactService";
import { SubmitHandler, useForm } from "react-hook-form";
import { IContact } from "../services/IContact";

const columns: IColumn[] = [
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "lastName", label: "Last Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "phone", label: "Phone", minWidth: 100 },
  { id: "actions", label: "Actions", minWidth: 100 },
];

export default function ListContact() {
  let navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortProperty, setSortProperty] = React.useState("firstName");
  const [order, setOrder] = React.useState<TOrder>("asc");
  const [termsSearch, setTermsSearch] = React.useState<
    [string, string | number][]
  >([]);

  const { data, error, isLoading } = useGetAllContactsQuery({
    page: page + 1,
    perPage: rowsPerPage,
    sortProperty,
    order,
    termsSearch,
  });

  const { register, handleSubmit, reset } = useForm<IContact>();

  const onCleanSearch = () => {
    setTermsSearch([]);
    reset();
  };

  const onSubmit: SubmitHandler<IContact> = (data) => {
    const entries = Object.entries(data);
    const contains = entries.filter((keyValue) => keyValue[1] !== "");
    if (contains.length > 0) {
      setTermsSearch(contains);
    }
  };

  const onPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onSort = (property: string, newOrder: TOrder) => {
    setSortProperty(property);
    setOrder(newOrder);
  };

  // @ts-ignore
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
      {(error as ICustomFetchError)?.data && (
        <Alert severity="error">
          <AlertTitle>{(error as ICustomFetchError).data.error}</AlertTitle>
          {(error as ICustomFetchError).data.message}
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TableWithPagination
          onCleanSearch={onCleanSearch}
          register={register}
          onPageChange={handleChangePage}
          onRowsPerPageChange={onPerPage}
          onSort={onSort}
          rowsPerPage={rowsPerPage}
          isLoading={isLoading}
          count={data?.count ? data.count : 0}
          page={data?.currentPage ? data.currentPage - 1 : 0}
          onEdit={(contactId) => navigate(`/contacts/${contactId}/update`)}
          onDelete={(contactId) => navigate(`/contacts/${contactId}/delete`)}
          rows={data?.results ? data.results : []}
          columns={columns}
          order={order}
          orderBy={sortProperty}
        />
      </form>
    </>
  );
}
