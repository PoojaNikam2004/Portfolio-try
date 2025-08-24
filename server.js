const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// middleware
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// contact form route
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body
    console.log("New Contact:", name, email, message)

    res.json({ success: true, message: "Form submitted successfully!" })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
