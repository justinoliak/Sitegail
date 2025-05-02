#!/bin/bash

# Configure Git to use macOS keychain for credential storage
git config --global credential.helper osxkeychain

# Set up the repository for pushing
cd /Users/justinoliak/Documents/gail/Sitegail

# Add all changes
git add .

# Commit the changes
git commit -m "Update website with modern design elements" --allow-empty

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "Push attempted - check if it succeeded!" 