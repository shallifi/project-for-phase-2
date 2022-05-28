import { useState,useEffect } from "react";
import AddEmployee from "react";



function UserList() {
  const [employee, setEmployee] = useState([])
  
  // const {name, department, manager, title, phone } = employee;
    // console.log("userList",formData)

    //useEffect renders once per loading the page
    useEffect(() => {
        fetch(`http://localhost:3000/users`)
          .then((res) => res.json())
          .then((data) => setEmployee(data));
      }, []);
    
    // const [newUserListItem, setNewUserListItem] = useState({})
        
    // const onAddUser = (newUser) => {
    //     setNewUserListItem((newUserListItem) => [...newUserListItem, newUser]);
    //   };  
    
    console.log("useEffect working", employee)
    const displayEmploy = employee.map((empBlasted) => {
        return <h3 key={empBlasted.department}>{empBlasted.department}</h3>; 
      });
      console.log("displayEmploy",displayEmploy)
///////////////
    // const awesome = employee.map((emplStats) => (
    //   <li key={emplStats.id}
    //   emplStats={emplStats}>
    //   </li>))      

    // console.log("trying to get",awesome)

    //  function displayEmp() {
    //    return employee.map((emplStats) => (
    //    <li key={emplStats.id}
    //    emplStats={emplStats}>
    //    </li>              
    //    ))
    //  } 

return (
    <div className="emp-list">

        <h1>UserList</h1>
         
        <h2>
          {displayEmploy}
          {/* {awesome} */}
          {/* {employee.department.map((dept)=>
          <li key={dept}>{dept}</li>)} */}
            areas dous
        </h2>
    
     
        {/* <ul className="emp-list">{employee}</ul> */}
    </div>
  )
}

export default UserList