
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


function Employee() {
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // const configObj = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify({ ...formData, }),
    // };
    fetch(`http://localhost:3000/users`)
      .then((resp) => resp.json())
      .then((data) => {console.log(data)})
        // onAddProject(project);
        // setFormData({
        //   name: "",
        //   about: "",
        //   phase: "",
        //   link: "",
        //   image: "",
        
      
  


  }

  return (
    <form style={formStyle} onSubmit={handleSubmit} >
    <div>
      Employee Name
      <input type="text" style={textArea} name="Name of New Employee" placeholder="First and Last Name"/>
      Department
      <input type="text" style={textArea} name="department" placeholder="dept"/>
      Manager
      <input type="text" style={textArea} name="manager" placeholder="direct supervisor"/>      
      Title
      <input type="text" style={textArea} name="title" placeholder="position / title"/>
      Phone#
      <input type="text" style={textArea} name="phone#" placeholder="###-###-####"/>
      <button type="submit">Submit New Employee Information</button>

      </div>
    </form>
  )
}

export default Employee