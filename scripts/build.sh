#!/bin/bash
set -ev

if [ "${GITHUB_API_TOKEN}" ]; then
  npm install
  npm run lint

  # Build only from `dev` branch
  if [ "${TRAVIS_BRANCH}" = 'dev' -a "${TRAVIS_PULL_REQUEST}" = 'false' ]; then
    npm run build
    cp README.md dist/
    cd dist
    ls -l -a
  fi
fi