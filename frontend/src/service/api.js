import axios from 'axios'


const URL='http://localhost:8000';

export const  Addusers= async(data)=>{
try {
    return await axios.post(`${URL}/add`,data)
    
} catch (error) {
    console.log('error while calling adduser',error);

}

}

export const getUsers= async()=>{
 try {
    return await axios.get(`${URL}/all`)
    
 } catch (error) {
    console.log('error while calling allusers',error);
    
 }
}

 export const getUser= async(id)=>{
    try {
   
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('error while calling getUser',error);
    }
 }

  export const editUsers = async(user,id)=>{
    try {
        return await axios.put(`${URL}/${id}`,user)
    } catch (error) {

        console.log("error while calling  editUsers",error)
        
    }

  }
  export const Deluser= async(id)=>{
      try {
  
        return await axios.delete(`${URL}/${id}`);
       
    } catch (error) {
        console.log("error while calling delUser",error)
    }
  }