#!/bin/env bash

yarn docs
rm -rf docs/static
git add docs/*
git commit -m "docs(文档)：更新文档"
git push