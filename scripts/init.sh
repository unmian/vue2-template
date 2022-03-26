#!/usr/bin/env bash
# encoding: utf-8.0

# ncu 安装检查
if [ ! `command -v ncu` ]; then
  npm install -g npm-check-updates
else
  npm update -g npm-check-updates
fi
# yarn 安装检查
if [ ! `command -v yarn` ]; then
  npm install -g yarn
else
  npm update -g yarn
fi

# 清理和安装依赖
rm *.lock
rm yarn-*.log
rm -rf node_modules
yarn autoclean
yarn install

# 配置 git hooks
git config core.hooksPath hooks

# 设置权限
chmod +x ./hooks/*
chmod +x ./scripts/*.sh