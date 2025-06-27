#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site should be available at:"
echo "https://erimu1.github.io/portofolio-2025"
