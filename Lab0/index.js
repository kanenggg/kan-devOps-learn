import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("I Love You 3000")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000")
})
