#!/usr/bin/env bash
# encoding: utf-8.0

ncu -u -f "vue vuex vue-router" -t minor
ncu -u -x "vue vuex vue-router" -t latest
yarn upgrade