import express from "express"


const app = express()
const os = require(os)

app.use("/", async(req, res) =>{
  res.json({message: "I LOVE YOU 3000 from", hostname: `${os.hostname}`})
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000")
})