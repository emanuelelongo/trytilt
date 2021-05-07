const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log(`request ${req.path} from ${req.ip}`);
    res.send(`Hello from ${process.env["HOSTNAME"]}`);
    res.end();
});

app.listen(8000);