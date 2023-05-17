---
pubDateTime: '2023-02-15 13:00'
title: Init
---

## 域名信箱

- Email Forwarding & Email SMTP Server（開啟 2FA 才能設定 [app pw](https://accounts.google.com/v3/signin/identifier?dsh=S-1693505938%3A1682523339194670&continue=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords&followup=https%3A%2F%2Fmyaccount.google.com%2Fapppasswords&ifkv=AQMjQ7Q6HXAnTrya9fcBye1r5Zq0WDnLIF4Zg8ZrxmoyfanLqpFRbeZwXhSXNhQi5Tgy3BFAWYrB&osid=1&passive=1209600&rart=ANgoxceMm-UY1VHrr6IDVzFeFv_7TJWlsf39rDf4TyhD_x8rWIMl3nH2rL0AlnN6ssj0DKtaooQce3DJsKuzJqsEll477FX8sA&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin)）
- 域名後綴： <https://tld-list.com/>
- WHOIS 域名資料搜尋: <https://whois.gandi.net/zh-hant>

## GitHub

### 使用 SSH 連線登入 GitHub

- [Generating a new SSH key and adding it to the ssh-agent - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```sh
# Test the SSH key:
ssh -T git@github.com
```

### Create a repo

- <https://github.com/new（內容空白>）

```git
git init
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git add --all
git commit -m "initial commit"
git push -u origin main
```
