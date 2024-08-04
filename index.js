import express from "express";


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/', (req, res) => {
    res.send("server is Get")
})

app.listen(8080, () => {
    console.log("server is running.....")
})