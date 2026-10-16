const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // environment variable

const currentDir = __dirname;
console.log(`Current directory: ${currentDir}`);
const AccessibleFolder = path.join(currentDir, 'publics');
console.log(`AccessibleFolder: ${AccessibleFolder}`);
app.use(express.static(AccessibleFolder));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
