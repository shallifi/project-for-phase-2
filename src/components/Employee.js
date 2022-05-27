import { useState } from "react";



 const formStyle = {
  display: "flex",
  flex : "column",
  width: "500px",
  margin: "0 auto",
  border: "2px solid var(--dark-turquoise)",
  padding: "1.75rem"
}

const textArea = {
  margintop: "0.25rem",
  marginbottom: "1rem",
  padding: "0.5rem",
  border: "none",
  fontsize: "1.25rem",
  fontweight: "bold",
  transition: "all 0.3s",
  border: "2px solid var(--color)",
}


function Employee({users}) {
  
  const [formData, setFormData] = useState ({
    
    name:"",
    department:"", 
    manager: "",
    title: "",
    phone: ""
  })
  
  ///onChange on every input

  ///handleChange 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

//value property on every input = formData.------

  console.log(formData) 

  const handleSubmit = (e) => {
    e.preventDefault();
  }
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData }),
    };
    fetch(`http://localhost:3000/users`, configObj)
      .then((resp) => resp.json())
      .then((data) => {console.log(data)})
    
        onAddUser(project);
        setFormData({
          name: "",
          about: "",
          phase: "",
          link: "",
          image: "",
        })
        
      
  


  

  return (
    <form style={formStyle}  onSubmit={handleSubmit}>
    <div>
      Employee Name
      <input type="text" 
      style={textArea} 
      name="name" 
      placeholder="First and Last Name"
      onChange={handleChange}
      />

      Department
      <input type="text" style={textArea} name="department" placeholder="dept"/>
      Manager
      <input type="text" style={textArea} name="manager" placeholder="direct supervisor"/>      
      Title
      <input type="text" style={textArea} name="title" placeholder="position / title"/>
      Phone#
      <input type="text" style={textArea} name="phone" placeholder="###-###-####"/>
      <button type="submit">Submit New Employee Information</button>

      </div>
    </form>
  )
}

export default Employee