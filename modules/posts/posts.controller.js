const Post = require("./post.model");

const verifyAuthor = async (req, user) => {
    let post = await Post.findById(postId);
    if (post._id.toString() != user.req.id) {
        return res.status(406)
        .json({error: "You are not permitted to perform this operation"});
    }
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json({posts});
};

exports.getPostsByUser = async (req, res) => {
    const posts = await Post.find({auth: req.user.id});
    res.status(200).json({posts});
};

exports.createPost = async (req,res) => {
    const {title, body, published} = req.body;

    const post = await Post.create({
        title,
        body,
        published,
        author: req.user.id
    });

    res.status(201).json({post})
};

exports.getPost = async (req, res) => {
    const {postId} = req.params;
    const post = await Post.findById(postId);
    res.status(200).json({post})
};

exports.updatePost = async (req, res) => {
    const {postId} = req.params;

    await verifyAuthor ()

    post = await Post.findByIdAndUpdate(postId, {...req.body}, {new: true});
    res.status(200).json({post})
};

exports.deletePost = async (req, res) => {
    const {postId} = req.params;

    await verifyAuthor ()

    await Post.findByIdAndDelete(postId);
    res.status(200).json({msg: "Post Deleted Successfully."});
};
