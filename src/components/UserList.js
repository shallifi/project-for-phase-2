import React from 'react'

function UserList() {
    
    
    const onAddUser = (newUser) => {
        setProjects((projects) => [...projects, newProj]);
      };
    
    // /this fetch works to Get data
    // fetch(`http://localhost:3000/users`)
    //   .then((resp) => resp.json())
    //   .then((data) => {console.log(data)})
  return (
    <div>UserList</div>
  )
}

export default UserList