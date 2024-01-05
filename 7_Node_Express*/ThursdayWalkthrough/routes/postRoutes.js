import { Router } from 'express';
const router = Router();

// Get all posts
router.get('/', (req, res) => {
    res.send('List of blog posts');
});

// Create a new post
router.post('/', (req, res) => {
    res.send('Create a new blog post');
});

// Update a post
router.put('/:id', (req, res) => {
    res.send(`Update blog post with id ${req.params.id}`);
});

// Delete a post
router.delete('/:id', (req, res) => {
    res.send(`Delete blog post with id ${req.params.id}`);
});

export default router;
