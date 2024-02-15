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
  import React, { useState,useEffect } from "react";
  import { editUsers, getUser } from "../service/api";
  import { useNavigate,useParams } from "react-router-dom";
  
  const Contaier = styled(FormGroup)`
    width: 50%;
    margin: 1% auto 0 auto;
    & > div {
      margin-top: 10px;
    }
  `;
  const Edituser = () => {
    const [user, setUser] = useState({
      name: "",
      surname: "",
      email: "",
      phone: "",
    });
    const naviagte=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
      loadUserdetails();
    },[])
    
    // let temp;
    const loadUserdetails= async()=>{
      console.log(id,"fgfgf");
      // temp= await getUser(id)
      const responce= await getUser(id)
    // console.log(responce,'success');
    setUser(responce.data)

   
  }
  // console.log(temp,"tempo")
    const handlechange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    // console.log(user);
  
    const edithandleClick = async (e) => {
      await editUsers(user,id);
      alert("user has been Updated");
      setUser({
        name: "",
        surname: "",
        email: "",
        phone: "",
      });
      naviagte('/all')
    };
    return (
      <>
        <Box>
          <Typography> Edit your Task </Typography>
        </Box>
        <Contaier>
          <FormControl>
            <InputLabel> Name</InputLabel>
            <Input name="name" onChange={handlechange} value={user.name} />
          </FormControl>
        </Contaier>
        <Contaier>
          <FormControl>
            <InputLabel> surname</InputLabel>
            <Input name="surname" onChange={handlechange} value={user.surname} />
          </FormControl>
        </Contaier>
        <Contaier>
          <FormControl>
            <InputLabel> email</InputLabel>
            <Input name="email" onChange={handlechange} value={user.email} />
          </FormControl>
        </Contaier>
        <Contaier>
          <FormControl>
            <InputLabel> Phone no</InputLabel>
            <Input name="phone" onChange={handlechange} value={user.phone}/>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={() => edithandleClick()}>
              edit
            </Button>
          </FormControl>
        </Contaier>
      </>
    );
  };
  
  export default Edituser;
  