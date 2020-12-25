module.exports = app => {

    app.get("/user/:id(\\d+)", (req, res) => {
        res.send("Get a user");
    });

    app.get("/user/:id(\\d+)/friends", (req, res) => {
        res.send("Get user's friends");
    });

    app.put("/user/:id(\\d+)/update", (req, res) => {
        res.send("Update user's profile");
    });

    app.delete("/user/:id(\\d+)/delete", (req, res) => {
        res.send("Delete user's profile");
    });
};