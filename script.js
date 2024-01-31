// scripts/deploy.js
const path = require('path');
const fs = require('fs');
const ghPages = require('gh-pages');

const branch = process.env.GITHUB_REF.split('/')[2];

const buildDir = path.join(__dirname, 'build');
const publicDir = path.join(__dirname, 'public');

fs.copySync(buildDir, publicDir);

ghPages.publish(publicDir, branch);
