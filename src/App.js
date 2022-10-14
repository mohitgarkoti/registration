import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    SchooLName: "",
    Address: ""
  })
  let name, value
  const handleInput = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, mobileNumber, SchooLName, Address } = user;

    const res = fetch("http://localhost:5000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        mobileNumber: mobileNumber,
        SchooLName: SchooLName,
        Address: Address
      })
    });
    const resJson = await res.json;
    if (resJson.status === 200) {
      window.alert("restration succefully")
    } else {
      window.alert("failed")
    }

  }

  return (
    <>

      <div class="sign_up_container">

        <div class="sign_up_label">Registration</div>
        <form method='POST'>
          <div class="input_container">

            <label for="username">Name</label>
            <br />
            <input type="text" name="name" class="input" value={user.name} onChange={handleInput} />
            <br />
            <span id="username-label" class="red-color-label"></span>
          </div>


          <div class="input_container">

            <label for="email">Email</label>
            <br />
            <input type="email" name="email" class="input" value={user.email} onChange={handleInput} />
            <br />
            <span id="email-label" class="red-color-label" ></span>

          </div>


          <div class="input_container">

            <label for="mobileNumber">Phone No.</label>
            <br />
            <input type="text" name="mobileNumber" class="input" value={user.mobileNumber} onChange={handleInput} />
            <br />
            <span id="password-label" class="red-color-label"></span>

          </div>

          <div class="input_container">

            <label for="SchooLName">School Name</label>
            <br />
            <input type="text" name="SchooLName" class="input" value={user.SchooLName} onChange={handleInput} />
            <br />
            <span id="password-label" class="red-color-label"></span>

          </div>
          <div class="input_container">

            <label for="Address">Address</label>
            <br />
            <input type="text" name="Address" class="input" value={user.Address} onChange={handleInput} />
            <br />
            <span id="password-label" class="red-color-label"></span>

          </div>


          <button type="submit" class="sign_up_button" onClick={postData}>Registration</button>

        </form>

      </div>

    </>
  );
}

export default App;
