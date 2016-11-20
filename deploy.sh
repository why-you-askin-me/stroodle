#!/usr/bin/env bash

# Fail on any errors
set -e

git fetch
git push --delete gh-pages
$(npm bin)/gh-pages -d build
