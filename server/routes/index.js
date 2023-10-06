const user = require("./user.route");
const group = require("./group.route");
const plan = require("./plan.route");

module.exports = (app) => {
    app.use("/users", user);
    app.use("/groups", group);
    app.use("/plans", plan);
}