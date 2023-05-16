#!/bin/bash

# Replaces a placeholder in the build output with a string value
populate_placeholder() {
  echo "Replacing all occurrences of '$1' with '$2'..."
  grep -rl $1 build | xargs sed -i'.original' -e "s~$1~$2~g"
}

echo 'Injecting variables into the build output...'

populate_placeholder '%%%GITHUB_CI_TIMESTAMP%%%' `date -u +'%Y-%m-%dT%H:%M:%SZ'`
populate_placeholder '%%%CI_COMMIT_SHORT_SHA%%%' $(echo ${GITHUB_SHA} | cut -c1-7)
populate_placeholder '%%%CI_PROJECT_URL%%%' "https://github.com/${GITHUB_REPOSITORY}"
