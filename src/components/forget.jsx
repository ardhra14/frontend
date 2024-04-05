import axios from "axios";
import { useEffect, useState } from "react";

function Forget() {
    const[email, setEmail] = useState('')
    const[newPassword, setPassword] = useState('');
    useEffect(() => {
        console.log('email is',email);
        console.log('password is',newPassword);
    } , [email,newPassword])

    const handleSubmit =  async () => {
        const response = await axios.post('http://localhost:2000/forget', {          
         email, newPassword 
    })
    if(response.data){
      console.log(response.data);
          }  
    }
    return(
        <div style={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',backgroundColor:'lightblue',height:'787px'}}>
          <input type="text" name="email" style={{width:'500px',padding: '10px'}}placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" name="newPassword" style={{width:'500px',padding:'10px'}}placeholder="Enter your new password" onChange={(e) => setPassword(e.target.value)}/>
          <button style={{width:'500px'}} onClick={handleSubmit}>Update Password</button>
        </div>
    )
 }
 export default Forget; 
