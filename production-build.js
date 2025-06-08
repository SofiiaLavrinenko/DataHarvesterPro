#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building production version...');

// Clean dist directory
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}
fs.mkdirSync('dist');

// Build client
console.log('Building client...');
execSync('npx vite build --outDir dist/public', { stdio: 'inherit' });

// Build server
console.log('Building server...');
execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/server.js', { stdio: 'inherit' });

// Copy necessary files
const filesToCopy = [
  'package.json',
  'package-lock.json'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('dist', file));
  }
});

// Copy server files
const serverFiles = ['notifications.ts', 'routes.ts', 'storage.ts', 'vite.ts'];
fs.mkdirSync('dist/server', { recursive: true });
serverFiles.forEach(file => {
  const srcPath = path.join('server', file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join('dist/server', file));
  }
});

// Copy shared
if (fs.existsSync('shared')) {
  fs.cpSync('shared', 'dist/shared', { recursive: true });
}

console.log('Production build complete!');
console.log('Files are ready in /dist directory');