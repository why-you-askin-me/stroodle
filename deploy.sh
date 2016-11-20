#!/usr/bin/env bash

# Fail on any errors
set -e

npm run clean
npm run build
$(npm bin)/gh-pages -d build
