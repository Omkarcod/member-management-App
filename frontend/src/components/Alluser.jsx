import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers, Deluser } from "../service/api";
import { Link } from "react-router-dom";

const Namerow = styled(TableCell)`
  font-size: 20px;
  font-weight: 700;
  text-align: start;
`;
const Usertable = styled(Table)`
  width: 88%;
  margin: auto;
  border: 3px solid gray;
  
`;
const Alluser = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const responce = await getUsers();

    setuser(responce.data);
  };
  const handleDelete = async (id) => {
    await Deluser(id);
    getAllUsers();
  };

  return (
    <Box>
      <Typography
        color="purple"
        fontSize="40px"
        fontWeight="700"
        marginTop="30px"
        fontFamily="serif"
        marginBottom="30px"
      >
        All Members
      </Typography>
      <Usertable>
        <TableHead>
          <TableRow>
            <Namerow>Name</Namerow>
            <Namerow>Username</Namerow>
            <Namerow>Email</Namerow>
            <Namerow>Phone</Namerow>
            <Namerow>Actions</Namerow>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => {
            return (
              <TableRow key={user._id}>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "revert",
                    textAlign:'start',
                  }}
                >
                  {user.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "revert",
                  }}
                >
                  {user.surname}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "revert",
                  }}
                >
                  {user.email}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "revert",
                  }}
                >
                  {user.phone}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    style={{ marginLeft: "10px" }}
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>{" "}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Usertable>
    </Box>
  );
};

export default Alluser;
