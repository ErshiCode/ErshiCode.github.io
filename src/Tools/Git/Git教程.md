---
order: 1
title: Git教程
date: 2025.12.22
category:
  - git
---

## Git动画在线学习

通过该网页可快速可视化学习Git [Git](https://learngitbranching.js.org/?demo=&locale=zh_CN)

## 常用命令
1. `git commit`: 提交记录
2. `git branch <branch-name>`: 创建分支
3. `git checkout <branch-name>`: 切换分支
4. `git checkout -b <branch-name>`: 创建分支并切换到当前分支
5. `git merge <merger-name>`: 将目标分支合并到当前分支
6. `git rebase <branch-name>`: 将当前分支合并到目标分支
7. `git checkout <branch-name> ^ ^^`: 单 ^ 向上一个节点，^^ 两个节点
8. `git checkout ~[num]`: 切换到当前分支前 num 个节点
9. `git branch -f main HEAD~3`: -f 强制切换
10. `git reset HEAD^`: 回滚到本地的上一个节点
11. `git revert HEAD`: 新建一个节点作为当前节点的上一个节点完成回滚
12. `git cherry-pick <Node>`: 把 Node 复制到当前节点下面
13. `git rebase -i <Node>`: 把当前节点和 Node 节点中的节点进行位置变更