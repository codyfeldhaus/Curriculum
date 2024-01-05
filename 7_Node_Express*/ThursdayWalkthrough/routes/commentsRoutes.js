import { Router } from 'express';
const router = Router();

// Add a comment to a post
router.post('/:postId', (req, res) => {
    res.send(`Add a comment to post with id ${req.params.postId}`);
});

export default router;
