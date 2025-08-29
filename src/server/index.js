const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/resources', (req, res) => {
  // Exemple - Retourner des ressources fictives
  res.json([ { id: 1, name: 'EC2 Instance' }, { id: 2, name: 'S3 Bucket' } ]);
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});