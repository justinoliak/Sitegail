#!/bin/bash
echo "Starting GitHub push process..."
git status
echo "Adding all files..."
git add .
echo "Committing changes..."
git commit -m "Update website with modern design elements" --allow-empty
echo "Pushing to GitHub..."
git push origin main
echo "Push process completed." 