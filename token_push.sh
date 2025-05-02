#!/bin/bash

# Replace these with your actual values
USERNAME="your_github_username"
TOKEN="your_personal_access_token"

echo "Starting GitHub push with token..."
git add .
git commit -m "Update website with modern design elements" --allow-empty
git push https://$USERNAME:$TOKEN@github.com/justinoliak/Sitegail.git main
echo "Push completed!"

# Note: Edit this file to add your GitHub username and personal access token
# After using it, consider deleting this file to protect your token 