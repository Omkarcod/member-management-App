import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Addusers, getUsers } from "../service/api";
import { useNavigate } from "react-router-dom";

const Contaier = styled(FormGroup)`
  width: 50%;
  margin: 1% auto 0 auto;
  & > div {
    margin-top: 10px;
  }
`;
const Formuser = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const naviagte = useNavigate();

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // console.log(user);

  const handleClick = async () => {
    const temp = await getUsers();

    if (user.name === "" || user.surname=== "" || user.email === ""|| user.phone === "") {
      alert("Please enter all fields");
    } else {
      let userExists = false; 

      for (let i = 0; i < temp.data.length; i++) {
        if (user.email === temp.data[i].email) {
          userExists = true; // Set the flag to true if the user email already exists
          break; // No need to continue checking once a match is found
        }
      }

      if (userExists) {
        alert("Member already exists");
      } else {
        await Addusers(user);
        alert("Member has been added");
      }
      setUser({
        name: "",
        surname: "",
        email: "",
        phone: "",
      });
      naviagte("/all");
    }
  };
  return (
    <>
      <Box>
        <Typography fontSize="35px" fontWeight="700" marginTop="55px">
          ADD Members
        </Typography>
      </Box>
      <Contaier>
        <FormControl>
          <InputLabel> Name</InputLabel>
          <Input
            name="name"
            onChange={handlechange}
            value={user.name}
            required
          />
        </FormControl>
      </Contaier>
      <Contaier>
        <FormControl>
          <InputLabel> surname</InputLabel>
          <Input
            name="surname"
            onChange={handlechange}
            value={user.surname}
            required
          />
        </FormControl>
      </Contaier>
      <Contaier>
        <FormControl>
          <InputLabel> email</InputLabel>
          <Input
            name="email"
            onChange={handlechange}
            value={user.email}
            required
          />
        </FormControl>
      </Contaier>
      <Contaier>
        <FormControl>
          <InputLabel> Phone no</InputLabel>
          <Input
            name="phone"
            onChange={handlechange}
            value={user.phone}
            required
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => handleClick()}>
            ADD
          </Button>
        </FormControl>
      </Contaier>
    </>
  );
};

export default Formuser;
