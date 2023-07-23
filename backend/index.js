const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express()
const PORT = 4000

app.use(cors()) //middleware

app.get("/",(req,res) => {
    res.send("Hello, world!")
})

app.get("/api/getdata",(req,res) => {
    res.send("Hello, world!")
})

app.use(bodyParser.json());

// app.post('/api/register', (req, res) => {
//     const { name, email, password,e_balance } = req.body;
//     // You can perform registration logic here, like saving data to a database
//     console.log('Received registration data:', name, email, password,e_balance);
//     res.status(200).send('Registration successful!');
//   });
  

app.post("/api/register", (req, res) => {
  const { name, email, password, balance } = req.body;

  if (!name || !email || !password || !balance) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  saveUserToDatabase(name, email, password, balance)
    .then(() => {
      return res.status(201).json({ message: "User registration successful." });
    })
    .catch(error => {
      console.error("Error:", error);
      return res.status(500).json({ error: "Registration failed. Please try again later." });
    });
});


app.listen(PORT,()=>{
    console.log("My Server is listening on PORT ${PORT}")
})