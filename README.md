# 履见 LUJIAN 官网

深圳技术大学健康与环境工程学院大创团队的智能鞋垫科研原型展示页，工程代号 INSOLE60，省级大创编号 S202614655022。项目内容依据《履见智能鞋垫项目全景与 AI 交接》截至 2026 年 11 月 14 日的快照。

## 预览与部署

在浏览器中打开 [index.html](./index.html) 即可预览。也可在站点目录运行以下命令，再访问 `http://127.0.0.1:8000/`。

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

站点为纯静态页面，资源使用相对路径。GitHub Pages 发布源选择 **Deploy from a branch → main → /(root)**，根目录的 `.nojekyll` 让 GitHub Pages 直接发布静态文件。[GitHub Pages 官方部署说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 图片素材

图片均来自履见工作区的展陈素材、样机实拍、软件演示或评估图。网站副本位于 [assets/images](./assets/images)，源文件名用于团队回查。

| 网站文件 | 项目来源 | 处理与用途 |
| --- | --- | --- |
| `hero-concept.webp` | 易拉宝素材 · 双足鞋垫_产品概念主视觉_v2.png | 首屏概念渲染，标注足底响应示意 |
| `v3-prototype.webp` | V3 鞋垫实物 · 微信图片_20261110140640_550_49.jpg | 双脚样机实拍，裁去桌外环境 |
| `v3-board.webp` | 11 月 8 日同板装配工程 · input_pcb_iso.png | V3 采集板 CAD 局部器件视图 |
| `v3-enclosure.webp` | 11 月 8 日同板左右脚外壳 · fit_review.png | 3D 打印外壳与板卡数字装配 |
| `desktop-heatmap.webp` | 电脑科研端 · 模拟模式修复_界面.png | 双脚 3D 热图，模拟数据，裁去旁侧编号栏 |
| `miniapp-heatmap.webp` | 微信小程序 · 预览.html | 内置演示模式截图，保留演示标识 |
| `model-evaluation.webp` | 11 月 14 日站立步行模型 · 第6页_模型评估图.png | 窗口混淆矩阵与逐段留出预测 |
| `lujian-mark.png` | 易拉宝素材 · 履见_图标_彩色_透明1600.png | 透明品牌标志与网页图标 |
| `xiao-jian.webp` | 易拉宝素材 · 小见_挥手_透明.png | 透明项目 IP 图 |

交流合作入口使用学院官网公示的通用邮箱。[深圳技术大学健康与环境工程学院](https://hsee.sztu.edu.cn/)
