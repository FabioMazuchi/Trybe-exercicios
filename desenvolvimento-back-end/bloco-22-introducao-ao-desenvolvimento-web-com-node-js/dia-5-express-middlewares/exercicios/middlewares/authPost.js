const posts = require('../posts');

const authPost = (req, res, next) => {
	const { id } = req.params;

	const post = posts.find(p => p.id === parseInt(id));

	if(!post) return res.status(404).json({ message: 'post not found' });
	next();
};

module.exports = authPost;