const express = require('express');

const app = express();

// Middleware

app.use(express.json());

// Database

const projects = [
  { id: 1, name: 'Project 1', description: 'Description 1', category: 'Category 1' },
  { id: 2, name: 'Project 2', description: 'Description 2', category: 'Category 2' },
  { id: 3, name: 'Project 3', description: 'Description 3', category: 'Category 1' },
];

// Routes

app.get('/projects', (req, res) => {
  const { category } = req.query;
  const filteredProjects = projects.filter(
    (project) => category === undefined || project.category === category
  );
  res.json(filteredProjects);
});

app.post('/projects', (req, res) => {
  const { id, name, description, category } = req.body;
  projects.push({ id, name, description, category });
  res.json({ id, name, description, category });
}   );