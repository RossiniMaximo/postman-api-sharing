import * as express from "express"
const port = process.env.PORT || 3000
const app = express()


app.get("/users", (req, res) => {
    console.log("Entre aca");
    res.json({
        users: []
    })
});

app.get("/users/:userId/products", (req, res) => {
    res.json({
        products: []
    })
})

app.post("/users", (req, res) => {
    res.status(201).json({
        message: "Okay macay",
        id: 1234
    })
});


app.listen(port, () => {
    console.log("Hola muchaches , la API esta corriendo.", port);

})