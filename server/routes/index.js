const user = require("./user.route");
const group = require("./group.route");
const plan = require("./plan.route");

module.exports = (app) => {
    app.use("/user", user);
    app.use("/group", group);
    app.use("/plan", plan);
}