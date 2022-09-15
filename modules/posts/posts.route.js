const router = require("express").Router;

const {authRequired} = require("../middlewares/authRequired")

const {createPost, getPosts, deletePost, getPost, updatePost} =  require("./posts.controller");

const postRouter = router();

postRouter.route("/").all(authRequired).get(getPosts).post(createPost);
postRouter.route("/:postId").all(authRequired).get(getPost).patch(updatePost).delete(deletePost)

module.exports = {postRouter};