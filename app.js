const express = require('express') 
const app = express()

app.get("/", (req, res) => {
    res.send("Hey, I'm the first router")
})

app.get("/secondPage/", (req, res) => {
    res.send("I'm the second router")
})

app.get("/secondPage/:article?", (req, res) => {
    let article = req.params.article
    res.send(`Here I'm getting the ${article} value after the slash.`)
})

app.listen(3000, (error) => {
    error ? console.log(error) : console.log("This Server is working...")
})
