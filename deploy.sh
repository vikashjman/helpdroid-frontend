#!/bin/bash

# Variables
image_name="frontend-helpdroid-react-app"
image_tag="latest"
docker_username="vikashraj1825" # Replace this with your Docker Hub username
repository_name="frontend-helpdroid-react-app" # This can be customized to your preferred repository name on Docker Hub

# Ensures the script exits if a command fails
set -e

# Docker login check
echo "Checking if logged in to Docker Hub..."
if ! docker info | grep -q "Username: $docker_username"; then
    echo "Not logged in or not logged in as $docker_username."
    echo "Logging in to Docker Hub..."
    docker login
fi

# Tag the image
echo "Tagging the image..."
docker tag "$image_name:$image_tag" "$docker_username/$repository_name:$image_tag"

# Push the image
echo "Pushing the image to Docker Hub..."
docker push "$docker_username/$repository_name:$image_tag"

echo "Image pushed successfully to Docker Hub!"
