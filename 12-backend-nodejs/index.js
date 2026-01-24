const express = require("express")
const app = express()
const PORT = 3000

const listings = [
    {id:1,listing:'BlrApt'},
    {id:2,listing:'PubApt'},
    {id:3,listing:'CheApt'},
    {id:4,listing:'MysApt'},
]
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/listings',(req,res)=>{
    const jsonData ={
        message: "Listings successful",
        timestamp: Date.now(),
        success: true,
        data: listings
    }

    res.json(jsonData)
})


app.listen(PORT, ()=>{
    console.log(`Application Listening at ${PORT}`)
})