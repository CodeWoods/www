---
external: false
title: "Init"
description: "新手備忘"
date: 2023-02-15
---
## 域名信箱
- Email Forwarding & Email SMTP Server（開啟 2FA 才能設定 [app pw](https://myaccount.google.com/apppasswords) ）
- 域名後綴： https://tld-list.com/
- WHOIS 域名資料搜尋: https://whois.gandi.net/zh-hant

## GitHub
### 使用SSH連線登入GitHub
- [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```sh
# Test the SSH key:
ssh -T git@github.com
```

### Create a repo
- https://github.com/new（內容空白）

```git
git init
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git add --all
git commit -m "initial commit"
git push origin main
```