import { useState } from "react";



function UserList() {

    const [newUserListItem, setNewUserListItem] = useState({})
    
    
    const onAddUser = (newUser) => {
        setNewUserListItem((newUserListItem) => [...newUserListItem, newUser]);
      };
    
    // /this fetch works to Get data
    // fetch(`http://localhost:3000/users`)
    //   .then((resp) => resp.json())
    //   .then((data) => {console.log(data)})
  return (
    <div>
        UserList
        
    </div>
  )
}

export default UserList