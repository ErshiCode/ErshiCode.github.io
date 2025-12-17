---
collapsible: true
index: true
order: number
date: 2025-12-12
category: 
  - Git
---

# Blog部署
<!-- more -->

## Github仓库
1. 创建Github仓库，命名为'Github用户名.github.io' (访问权限默认为public)
2. 使用Git将源文件推送到创建好的仓库中
3. 进入仓库Settings选项，点击Action -> General中 Workflow permissions 下的 Read and write permissions 按钮， save 保存
4. 同样在Settings中，点击 Pages 在 Branch 中选择 gh-pages 分支 root 文件，save 保存
5. 等待部署成功后，部署到 Vercel 或 Gitee 进行双平台部署（解决Github访问慢问题） 


## Git推送
1. 清理旧的 Git 记录 (彻底变成新项目)
rm -rf .git

2. 初始化新仓库
git init

3. 把文件加入暂存区 (这也是为了确保下一步有东西可提交)
git add .

4. 提交到本地仓库 (先存好档案)
git commit -m "First commit"

5. 重命名分支为 main (紧跟在 commit 之后，确保分支存在)
git branch -M main

6. 关联远程仓库 (记得替换 URL)
git remote add origin https://github.com/你的用户名/新仓库名.git

7. 强制推送到远程 (覆盖远程可能存在的冲突)
git push -u -f origin main

## Vercel部署
1. 进入 Vercel 官网 github 登陆后，选择要部署的 github 仓库，import 到 Vercel 中
2. import 后只需在 Build and Output Settings 中添加两条内容
3. Build Command：pnpm run docs：dev
4. Output Directory：src/.vuepress/dist
5. 点击 Deploy 进行部署
6. 部署成功到项目仓库 Settings 设置里面点击 Domains 添加域名进行解析（github、vercel访问都会定向到该域名）
7. 在云服务器厂商上进行DNS解析（域名指向 Vercel 服务器）