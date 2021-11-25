import React, { useState } from "react";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const emailArea = (e) => {
    setEmail(e.target.value);
  };
  const createAdmin = (event) => {
    const user ={email}
    console.log(user);
    fetch("https://polar-thicket-32932.herokuapp.com/users/admin", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.modifiedCount){
        // setEmail("")
        Swal.fire('New Admin Created successfully')
    }
    })
    event.preventDefault();
  };
  return (
    <div style={{paddingTop:"30px"}}>
      <h3>you can make a new admin</h3>
      <form onSubmit={createAdmin} action="">
        <input style={{margin:"10px"}} onBlur={emailArea} type="email" placeholder="enter email" />
        <br />
        <input type="submit" value="Create New Admin" />
      </form>
    </div>
  );
};

export default MakeAdmin;
