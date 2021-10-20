let express = require("express");
let app = express();

let courses = [
    {id: 1, name:"NodeJS"},
    {id: 2, name:"MongoDB"},
    {id: 3, name:"Heroku"},
];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
    res.send(`List of courses: ${courses}.`);
});

app.get("/api/courses/:id", (req, res) => {
    console.log("Connected!");
    let curCourse = 0;
    for(var i = 0; i < 3; i++){        
        console.log("here");
        if(courses[i].id == parseInt(req.params.id)){
            curCourse = courses[i].name;
        }
    }
    console.log(curCourse);
    if(curCourse == 0){
        res.send(`ERROR 404!`);
    } else {
        res.send(`The course you requested: ${curCourse}`);

    }
});


let portNum = process.env.PORT || 7000;

app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}...`);
});
