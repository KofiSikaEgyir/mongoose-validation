const router = require("express").Router;

const {createPost,getPosts} =  require("./posts.controller");

const postsRouter = router();

postsRouter.route("/").get(getPosts).post(createPost);

module.exports = postsRouter;