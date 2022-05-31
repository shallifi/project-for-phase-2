import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';



function Computer({onAddTicket}) {

  ///setting a controlled form by using useState
  const [tickData,setTickData] = useState({

    device:"",
    problem:"" ,
    description:"" ,
    tech:"" ,
    solution:"" ,
    status: ""

  })
  // console.log(tickData)

  //history to navigate to TicketList
  const history = useHistory();

  const handleChange =(e) => {
    const {name, value} = e.target;
    setTickData((tickData) => ({...tickData, [name]: value   }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...tickData }),
    };
      fetch(`http://localhost:3000/tickets`, configObj)
        .then((resp) => resp.json())
        .then((tickInfo) => {
          onAddTicket(tickInfo);
          setTickData({
            name:"",
            device: "" ,
            problem:"" ,
            description:"" ,
            tech:"" ,
            solution:"" ,
            status: ""
        });
      });
      history.push(`ticketlist`)
    }
    console.log("addticket", tickData)



  return (
    <section>
      <form className='ticket-form'  onSubmit={handleSubmit} >

      <label style={formStyle}>Name</label>
        <input type="text"
        style={formStyle} 
         name="name" 
        placeholder="First and Last Name"
        onChange={handleChange}
        value={tickData.name}
        />
      
       <h2 style={formStyle}>Common Issues</h2>
       <select className='drop-menu' style={formStyle}>
        <option selected value="problem">Password</option>
        <option value="problem">Printer</option>
        <option value="problem">Connection</option>
        <option value="problem">Lost File</option>
        <option value="problem">Unlisted</option>

      </select>

       <h2 style={formStyle}>Devices</h2>
       <select className='drop-menu' style={formStyle}>
        <option selected value="device">Computer</option>
        <option value="device">Cell Phone</option>
        <option value="device">Printer</option>
      </select>

      {/* <label 
      style={formStyle}>Device</label>
        <input type="text"
        style={formStyle} 
         name="device" 
        placeholder="PC / Cell Phone / Printer"
        onChange={handleChange}
        value={tickData.name}
        />       */}
      <label 
      style={formStyle}>Description</label>
        <input type="text"
        style={formStyle} 
        name="description" 
        placeholder="A brief description"
        onChange={handleChange}
        value={tickData.name}
        />


      <button type='submit' >Submit Ticket to Help Desk</button>

      </form>
    </section>
  )
}

export default Computer;

const formStyle = {
  display: "flex",
  flex : "column",
  width: "500px",
  margin: "0 auto",
  border: "2px solid var(--dark-turquoise)",
  padding: "1.75rem",
  margintop: "0.25rem",
  marginbottom: "1rem",
  padding: "0.5rem",
  border: "none",
  fontsize: "1.25rem",
  fontweight: "bold",
  transition: "all 0.3s",
  border: "2px solid var(--color)",
}

const submitButton = {

}
