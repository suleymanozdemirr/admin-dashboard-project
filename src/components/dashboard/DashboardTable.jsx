import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"

const rows = [
  {
    age: 27,
    status: "current",
    date: "09/27/2018",
    name: "Sally Quinn",
    salary: "$19586.23",
    email: "eebsworth2m@sbwire.com",
    designation: "Human Resources Assistant",
  },
  {
    age: 61,
    date: "09/23/2016",
    salary: "$23896.35",
    status: "professional",
    name: "Margaret Bowers",
    email: "kocrevy0@thetimes.co.uk",
    designation: "Nuclear Power Engineer",
  },
  {
    age: 59,
    date: "10/15/2017",
    name: "Minnie Roy",
    status: "rejected",
    salary: "$18991.67",
    email: "ediehn6@163.com",
    designation: "Environmental Specialist",
  },
  {
    age: 30,
    date: "06/12/2018",
    status: "resigned",
    salary: "$19252.12",
    name: "Ralph Leonard",
    email: "dfalloona@ifeng.com",
    designation: "Sales Representative",
  },
  {
    age: 66,
    status: "applied",
    date: "03/24/2018",
    salary: "$13076.28",
    name: "Annie Martin",
    designation: "Operator",
    email: "sganderton2@tuttocitta.it",
  },
  {
    age: 33,
    date: "08/25/2017",
    salary: "$10909.52",
    name: "Adeline Day",
    status: "professional",
    email: "hnisius4@gnu.org",
    designation: "Senior Cost Accountant",
  },
  {
    age: 61,
    status: "current",
    date: "06/01/2017",
    salary: "$17803.80",
    name: "Lora Jackson",
    designation: "Geologist",
    email: "ghoneywood5@narod.ru",
  },
  {
    age: 22,
    date: "12/03/2017",
    salary: "$12336.17",
    name: "Rodney Sharp",
    status: "professional",
    designation: "Cost Accountant",
    email: "dcrossman3@google.co.jp",
  },
]
const styles = {
  row: {
    fontFamily: "Poppins",
    fontSize: "0.9rem",
    fontWeight: 600,
  },
  col: {
    fontFamily: "Poppins",
    fontSize: "0.875rem",
    fontWeight: 500,
  },
}

export default function DashboardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell style={styles.row}>Name</TableCell>
            <TableCell style={styles.row}>Email</TableCell>
            <TableCell style={styles.row}>Date</TableCell>
            <TableCell style={styles.row}>Salary</TableCell>
            <TableCell style={styles.row}>Age</TableCell>
            <TableCell style={styles.row}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={styles.col}>{row.name}</TableCell>
              <TableCell style={styles.col}>{row.email}</TableCell>
              <TableCell style={styles.col}>{row.date}</TableCell>
              <TableCell style={styles.col}>{row.salary}</TableCell>
              <TableCell style={styles.col}>{row.age}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  sx={{
                    height: 30,
                    backgroundColor:
                      row.status === "current"
                        ? "#563D7C"
                        : row.status === "professional"
                        ? "#56CA00"
                        : row.status === "rejected"
                        ? "#DC3545"
                        : row.status === "resigned"
                        ? "#FFB400"
                        : row.status === "applied"
                        ? "#17A2B8"
                        : "#56CA00",
                    color: "white",
                    fontFamily: "Poppins",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
