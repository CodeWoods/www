#!/usr/bin/env bash
echo "---
isDraft: true
title: (Draft) WIP
pubDateTime: $(date -u +%Y-%m-%dT%H:%M:%SZ)
---
" > src/content/pages/$(date +%F)-wip.md

code src/content/pages/$(date +%F)-wip.md

echo '✅ Blog post created'

# @links:
# https://github.com/krzysztofzuraw/blog/blob/main/scripts/post.sh
# https://github.com/pickyzz/blog-rebuild/blob/66a772a0c695c1d5a147d2ab3db5418bb8414280/src/scripts/createPost.ts
# https://github.com/reona5/dev/blob/main/src/scripts/create_post.rb
