const express = require('express');
const app = express();
app.use(express.json());

// Data dummy (in-memory)
let items = [];

// CREATE
app.post('/items', (req, res) => {
  const { name } = req.body;
  items.push({ id: items.length + 1, name });
  res.status(201).json({ message: 'Item created' });
});

// READ
app.get('/items', (req, res) => {
  res.json(items);
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const item = items.find(it => it.id === id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  item.name = name;
  res.json({ message: 'Updated' });
});

// DELETE
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(it => it.id !== id);
  res.json({ message: 'Deleted' });
});

app.listen(3000, () => console.log('API running on port 3000'));
