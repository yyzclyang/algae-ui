#!/bin/env bash

rm -rf docs
yarn doc
git add docs/*
git commit -m "docs(文档)：更新文档"
git push