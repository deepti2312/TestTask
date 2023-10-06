import React from "react";
import { useState } from "react";

const initData = [
  { rollnumber: 2, firstname: "bread", lastname: "josif", email: "cupboard@gmail.com" },
  { rollnumber: 1, firstname: "milk", lastname: "joe", email: "fridge@gmail.com" },
  { rollnumber: 8, firstname: "water", lastname: "doe", email: "fridge@gmail.com" },
  { rollnumber: 3, firstname: "water", lastname: "doe", email: "fridge@gmail.com" }
]

function TableData() {
  const [data, setData] = useState(initData);
  const [isPopupVisible, setisPopupVisible] = useState(false)
  const [update, setUpdate] = useState(false)
  const [inputs, setInputs] = useState({
    rollnumber: '', firstname: '', lastname: '', email: ''
  });

  const handleAddClick = () => {
    setisPopupVisible(true)
    setInputs({ rollnumber: '', firstname: '', lastname: '', email: '' })
  }
  const handleUpdateClick = (e, student) => {
    setisPopupVisible(true)
    console.log(student)
    setInputs({ ...student })

  }

  const handleDelete = (e, rollnumber) => {
    const updateData = data.filter((item) => item.rollnumber !== rollnumber)
    setData(updateData)
  }

  const assndng = () => {
    data.sort((a, b) => (a.rollnumber > b.rollnumber) ? 1 : -1)
    setUpdate(!update)
  }

  const descndng = () => {
    data.sort((a, b) => (a.rollnumber < b.rollnumber) ? 1 : -1)
    setUpdate(!update)

  }

  const handleUpdate = (event_update) => {
    const key = event_update.target.name;
    const value = event_update.target.value;

    setInputs(() => ({ ...inputs, [key]: value }))
  }

  const handleSubmit = (event_submit) => {
    event_submit.preventDefault();
    //if (!(inputs.rollnumber in (data.map((item) => (item.rollnumber))))) this also works same for checking.

    if (!data.some(person => person.rollnumber === inputs.rollnumber)) {
      if (inputs.rollnumber && inputs.firstname && inputs.lastname && inputs.email) {
        const newUser = {
          rollnumber: inputs.rollnumber,
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          email: inputs.email,
        };
        setData((prevData) => [...prevData, newUser].sort((a, b) => (a.rollnumber > b.rollnumber) ? 1 : -1));
        setInputs({ rollnumber: '', firstname: '', lastname: '', email: '' });
        console.log(data[0].rollnumber)
      }
    } else {
      const updateData = data.map((student_rollnumber) =>
        student_rollnumber.rollnumber === inputs.rollnumber ? inputs : student_rollnumber)
      setData(updateData)
      setisPopupVisible(false)
      console.log(data.rollnumber)

    }
  }

  return (
    <React.Fragment>
      {isPopupVisible && (<div>
        <form onSubmit={handleSubmit}>
          <label>rollnumber
            <input type="number" name="rollnumber" value={inputs.rollnumber} onChange={handleUpdate} /></label><br></br>
          <label>firstname
            <input type="text" name="firstname" value={inputs.firstname} onChange={handleUpdate} /></label><br></br>
          <label>lastname
            <input type="text" name="lastname" value={inputs.lastname} onChange={handleUpdate} /></label><br></br>
          <label>email
            <input type="text" name="email" value={inputs.email} onChange={handleUpdate} /></label><br></br><br></br>
          <input type="submit" />
        </form>
      </div >)}
      <br></br>
      <br></br>
      <div>
        <button id="assBtn" type="submit" onClick={assndng}>Assending</button>
        <button id="desBtn" type="submit" onClick={descndng}>Descending</button>
        <table border="2px">

          <thead>
            <tr>
              <th>rollnumber</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.rollnumber}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <div>
                  <td><button onClick={event => handleUpdateClick(event, item)}>Update</button></td>
                  <td><button onClick={event => handleDelete(event, item.rollnumber)}>Delete</button></td>
                </div>

              </tr>
            ))}
          </tbody>

        </table>
        <button type="submit" onClick={handleAddClick}>Add Student</button>
      </div>
    </React.Fragment>
  )
}

export default TableData;
