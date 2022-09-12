const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postsRouter = require("./modules/posts/posts.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Server. use /posts to get all post")
});

app.use("/posts", postsRouter);

async function start () {
    await dbConnect();
    app.listen(4000, () => {
        console.log("Server is running on hhtp://localhost:4000");
    });
}

start();
