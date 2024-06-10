import { Router } from 'express';
import Blog from '../models/blog';

import express from 'express';

const router = Router();

// Use express.json() middleware to parse JSON bodies
router.use(express.json());

router.get('/blogs', async (req, res) => {
    try {
      const blogs = await Blog.findAll();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
});

router.post('/blogs', async (req, res) => {
    console.log(req);
    try {
      const blog = await Blog.create(req.body);
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error: error });
    }
  });
  

router.put('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.delete('/blogs/:id', async (req, res) => {
  try {
    await Blog.destroy({
      where: { id: req.params.id },
    });
    res.status(204).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;