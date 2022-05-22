import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, IconButton, TableSortLabel, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import RowLoading from "./RowLoading";
import { visuallyHidden } from "@mui/utils";
import RowSearch from "./RowSearch";
import { IContact } from "../../services/IContact";
import { UseFormRegister } from "react-hook-form/dist/types/form";

export interface IColumn {
  id: keyof IContact;
  label: string;
  minWidth?: number;
}

interface ITableParam<T> {
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsPerPage: number;
  page: number;
  rows: Array<any>;
  onEdit: (contact: IContact) => void;
  onDelete: (contact: IContact) => void;
  count: number;
  isLoading: boolean;
  columns: T[];
  onSort: (property: string, newOrder: TOrder) => void;
  order: TOrder;
  orderBy: string;
  register: UseFormRegister<any>;
  onCleanSearch: () => void;
}

export type TOrder = "asc" | "desc";

export default function TableWithPagination<T extends IColumn>({
  onPageChange,
  onRowsPerPageChange,
  rowsPerPage,
  page,
  rows,
  onEdit,
  onDelete,
  count,
  isLoading,
  columns,
  onSort,
  order,
  orderBy,
  register,
  onCleanSearch,
}: ITableParam<T>) {
  const createSortHandler = (property: string) => () => {
    if (property !== "actions") {
      const isAsc = orderBy === property && order === "asc";
      const newOrder: TOrder = isAsc ? "desc" : "asc";
      onSort(property, newOrder);
    }
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : undefined}
                    onClick={createSortHandler(column.id)}
                  >
                    {column.label}
                    {orderBy === column.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <RowLoading colSpan={columns.length + 1} />
            ) : (
              <>
                <RowSearch
                  onCleanSearch={onCleanSearch}
                  register={register}
                  columns={columns}
                ></RowSearch>
                {!isLoading && rows.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1}>
                      <Typography
                        component="h3"
                        variant="h3"
                        textAlign="center"
                      >
                        No results found :(
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
                {rows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        if (column.id === "actions") {
                          return (
                            <TableCell key="actions">
                              <IconButton onClick={() => onEdit(row)}>
                                <Edit color="primary" />
                              </IconButton>
                              <IconButton onClick={() => onDelete(row)}>
                                <Delete color="error" />
                              </IconButton>
                            </TableCell>
                          );
                        }
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
}
