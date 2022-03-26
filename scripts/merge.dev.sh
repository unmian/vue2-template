#!/usr/bin/env bash
# encoding: utf-8.0

name=`git config user.name`

git checkout -b "dev-$name"
git merge origin/dev