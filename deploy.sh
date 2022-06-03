#!/bin/sh
npm run docs:build && scp -i ~/.ssh/ls2b.pem -r docs/.vitepress/dist/* ubuntu@datagrovecr.com://home/ubuntu/datagrovecr
