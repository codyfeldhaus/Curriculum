import express from 'express';
const app = express();

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

// Importing route modules
import postsRoutes from './routes/postsRoutes';
import usersRoutes from './routes/usersRoutes';
import commentsRoutes from './routes/commentsRoutes';

// Using route modules
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);
app.use('/comments', commentsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
