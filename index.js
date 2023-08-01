import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const tasks = [];

app.get("/", (req, res) => {
    res.render("index.ejs", { tasks: tasks }); 
});

app.post("/addTask", (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    res.redirect("/");
})

app.listen(port, () => {
    console.log("Listening on port");
})


