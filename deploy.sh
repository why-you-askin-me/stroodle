#!/usr/bin/env bash
npm run clean
npm run build
$(npm bin)/gh-pages -d build
