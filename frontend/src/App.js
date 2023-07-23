// import logo from './logo.svg';
// import './App.css';

import { useState} from 'react';
import axios from "axios";

function App() {

  const [data, setState] = useState("");

  const handleClick = async (e) => {
    const response = await axios.get("http://localhost:4000/api/getdata")
    console.log(response)
    setState(response.data) 
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>

  );
}

export default App;
