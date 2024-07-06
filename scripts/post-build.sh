#!/bin/bash

# Function to replace a placeholder in the build output with a string value
populate_placeholder() {
  echo "Replacing all occurrences of '$1' with '$2'..."
  grep -rl "$1" dist | xargs sed -i'.original' -e "s~$1~$2~g"
}

# Get the latest commit SHA dynamically
GITHUB_SHA_SHORT=$(git rev-parse --short HEAD)
GITHUB_REPOSITORY=$(git config --get remote.origin.url | sed 's/.*github.com[/:]\(.*\)\.git/\1/')

#
echo "GITHUB_SHA_SHORT: $GITHUB_SHA_SHORT"
echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"

# Check if the values are correctly set
if [[ -z "$GITHUB_SHA_SHORT" || -z "$GITHUB_REPOSITORY" ]]; then
  echo "Failed to retrieve GITHUB_SHA_SHORT or GITHUB_REPOSITORY."
  exit 1
fi

echo 'Injecting variables into the build output...'

# Replace placeholders with appropriate values
populate_placeholder '%%%GITHUB_CI_TIMESTAMP%%%' "$(date -u +'%Y-%m-%dT%H:%M:%SZ')"
populate_placeholder '%%%CI_COMMIT_SHORT_SHA%%%' "$(echo ${GITHUB_SHA} | cut -c1-7)"
populate_placeholder '%%%CI_PROJECT_URL%%%' "https://github.com/${GITHUB_REPOSITORY}"
