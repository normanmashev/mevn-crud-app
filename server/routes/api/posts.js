const express = require("express");
const Post = require("../../models/Post");

const router = express.Router();

router.get("/", async (req, res) => {
	const posts = await Post.find({});
	res.send(posts);
});

router.get("/:id", async (req, res) => {
	let id = req.params.id;
	const post = await Post.findOne({ _id: id });
	res.send(post);
});

router.post("/", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
	});
	await post.save();
	res.send({ msg: "Пост создан успешно" });
});

router.delete("/:id", async (req, res) => {
	await Post.deleteOne({ _id: req.params.id });
	res.send({ msg: "Пост удален успешно" });
});

router.put("/:id", async (req, res) => {
	await Post.findOneAndUpdate(
		{ _id: req.params.id },
		{ title: req.body.title, description: req.body.description }
	);
	res.send({ msg: "Пост обновлен успешно" });
});

module.exports = router;
