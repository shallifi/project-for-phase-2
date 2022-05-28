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

  //history to navigate to TicketList
  const history = useHistory();



  return (
    <section>
      <form className='ticket-form' style={formStyle}>

      <label className='computer' style={textArea}>Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          name="name"
          // onChange={handleChange}
          // value={formData.name}
        />
      
      
      
       Common Issues<select className='drop-menu'>
        <option value="password">Password</option>
        <option value="printer">Printer</option>
        <option selected value="connection">Connection</option>
        <option value="lost-file">Lost File</option>
      </select>
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
