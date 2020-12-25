module.exports = app => {

    app.post("/post/create", (req, res) => {
        res.send("Create a post");
    });

    app.put("/post/:id(\\d+)/update", (req, res) => {
        res.send("Update a post");
    });

    app.delete("/post/:id(\\d+)/delete", (req, res) => {
        res.send("Delete a post");
    });

    app.get("/post/:id(\\d+)", (req, res) => {
        res.send("Get a post");
    });

    app.get("/posts", (req, res) => {
        res.send("Get posts");
    });
};