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
    
    console.log("userlistagain", employee)
    // function displayEmploy()
    // { employee.map((empBlasted) => {
    //     return <h1 key={empBlasted.id}>{empBlasted.department}</h1>; 
    //   })};
///////////////
    const awesome = employee.map((emplStats) => (
      <li key={emplStats.id}
      emplStats={emplStats}>
      </li>))      

    console.log("trying to get",awesome)

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
         {/* {displayEmp()}  */}
        <h2>
          {awesome}
          {employee.department}
            areas dous
        </h2>
    
     
        <ul className="emp-list">{employee}</ul>
    </div>
  )
}

export default UserList