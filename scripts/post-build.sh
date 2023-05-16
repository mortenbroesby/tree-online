#!/bin/bash

echo 'Injecting variables into the build output...'

TIMESTAMP=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
SHORT_SHA=$(echo ${GITHUB_SHA} | cut -c1-7)
PROJECT_URL="https://github.com/${GITHUB_REPOSITORY}"

grep -rl '%%%GITLAB_CI_TIMESTAMP%%%' build | xargs sed -i'.original' -e "s~%%%GITLAB_CI_TIMESTAMP%%%~$TIMESTAMP~g"
grep -rl '%%%CI_COMMIT_SHORT_SHA%%%' build | xargs sed -i'.original' -e "s~%%%CI_COMMIT_SHORT_SHA%%%~$SHORT_SHA~g"
grep -rl '%%%CI_PROJECT_URL%%%' build | xargs sed -i'.original' -e "s~%%%CI_PROJECT_URL%%%~$PROJECT_URL~g"
