const express = require("express");

const app = express();

var routerUser = require("./routers/router_user")

app.listen(5050, () => console.log("server start"));

app.use("/api/user", routerUser);

