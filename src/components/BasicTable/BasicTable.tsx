import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { Select } from "../Select";

export function BasicTable({ sets }: any) {
  //const theme = useTheme();
  //const isDarkMode = theme.palette.mode === 'dark';

  const checkboxStatus = sets.map(({ complete }: any) => complete);

  const [checkboxes, setCheckboxes] = useState(checkboxStatus);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#f0f0f0" }}>
          <TableRow>
            <TableCell align="center">Set&nbsp;(qty)</TableCell>
            <TableCell align="center">Weight&nbsp;(kg)</TableCell>
            <TableCell align="center">Rep&nbsp;(qty)</TableCell>
            <TableCell align="center">✔&nbsp;(complete)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sets.map(({ set, kg, rep }: any, index: any) => (
            <TableRow
              key={set}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {set}
              </TableCell>
              <TableCell align="center">
                <Select variant="weight" val={kg} />
              </TableCell>
              <TableCell align="center">
                <Select val={rep} />
              </TableCell>
              <TableCell align="center">
                <input
                  name="complete"
                  type="checkbox"
                  checked={checkboxes[index]}
                  onChange={(event) => {
                    const newCheckboxes = [...checkboxes];
                    newCheckboxes[index] = event.target.checked;
                    setCheckboxes(newCheckboxes);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
