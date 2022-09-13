const router = require("express").Router;

const {createPost, getPosts, deletePost, getPost, updatePost} =  require("./posts.controller");

const postRouter = router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost)

module.exports = {postRouter};