const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));

app.get('*', (req, res) => {
  let requestPath = decodeURIComponent(req.path);

  if (requestPath === '/' || requestPath === '') {
    return res.sendFile(path.join(publicDir, 'index.html'));
  }

  if (requestPath === '/ru' || requestPath === '/ru/') {
    return res.sendFile(path.join(publicDir, 'ru', 'index.html'));
  }

  const cleanPath = requestPath.replace(/^\//, '').replace(/\/$/, '');
  const htmlPath = path.join(publicDir, `${cleanPath}.html`);

  if (fs.existsSync(htmlPath)) {
    return res.sendFile(htmlPath);
  }

  res.status(404).sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`TrustBridge site running at http://localhost:${PORT}`);
});
