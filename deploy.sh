#!/usr/bin/env bash

# Delete if branch exists
git push --delete origin gh-pages

# Fail on any errors
set -e

$(npm bin)/gh-pages -d build/client
