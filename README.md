# 履见 LUJIAN 官网

深圳技术大学健康与环境工程学院大创团队的智能鞋垫科研原型展示页，工程代号 INSOLE60，省级大创编号 S202614655022。工程与模型数据依据《履见智能鞋垫项目全景与 AI 交接》截至 2026 年 11 月 14 日的快照，结合《11.0 鞋垫中期检查 PPT》第 4、6、11、13 页补充迭代、模型、团队登记工时及后续计划。获奖口径和阶段成果另核对中期 PPT 第 9–10 页及对应竞赛原件。

[官网](https://heavytypefac.github.io/lujian-site/) · [代码仓库](https://github.com/heavytypefac/lujian-site)

## 工程记录与交互

- 五阶段交互曲线：48 点原型、双脚 120 点平台、V3 四层板、同板左右脚外壳、数据与离线模型。曲线仅表达工程阶段递进，不量化性能或临床疗效；资料没有正式命名的阶段不另造 V1/V2 版本号。
- 工程视图：按外壳装配、PCB 四层、科研软件切换，支持图片放大。所有图均有来源与状态说明，数字装配图不作为打印试装已通过的证据。
- 团队记录：216.5 小时为 PPT 第 11 页五位成员登记值之和（33、70.5、26、59、28），仅覆盖该页阶段范围；各成员条目列明工作、产出依据与后续任务。
- 两套模型的样本范围分别标注。当前配对样本不足以证明融合 IMU 的额外收益，患者及自由活动泛化尚待验证。
- 新增交互位于 `assets/engineering.js`，配套样式位于 `assets/engineering.css`。键盘方向键可切换标签，支持系统减少动态效果设置；图片按需加载，无外部运行依赖。

## 预览与部署

在浏览器中打开 [index.html](./index.html) 即可预览。也可在站点目录运行以下命令，再访问 `http://127.0.0.1:8000/`。

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

站点为纯静态页面，资源使用相对路径。GitHub Pages 发布源选择 **Deploy from a branch → main → /(root)**，根目录的 `.nojekyll` 让 GitHub Pages 直接发布静态文件。[GitHub Pages 官方部署说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

页面样式、交互和图标均由站点自身提供。图标使用 Font Awesome 4.7.0 的本地五字形子集。[图标许可](./assets/fonts/lujian-icons-ofl.txt)

## 图片素材

图片均来自履见工作区的展陈素材、样机实拍、软件演示或评估图。网站副本位于 [assets/images](./assets/images)，源文件名用于团队回查。

文件名末尾的数字表示页面用图的像素宽度。首图会按屏幕选择尺寸，图集、模型图和证书可点击查看高清版本。

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
| `gallery-v3-wear.webp` | 易拉宝素材 · 双足穿戴样机_实拍.jpg | 双脚工程样机穿戴照片 |
| `gallery-v3-case.webp` | V3 鞋垫实物 · 548_49.jpg | 踝侧采集盒近照 |
| `gallery-v3-strap.webp` | V3 鞋垫实物 · 549_49.jpg | 壳体侧面与绑带近照 |
| `gallery-early-prototype.webp` | 8 月 iCAN 提交材料 · 产品实物图.png | 早期双脚样机 |
| `gallery-wear-concept.webp` | 易拉宝素材 · 踝部穿戴_产品概念图_v2.png | 踝侧采集盒穿戴概念图 |
| `gallery-clinical-exchange.webp` | 中期/图片素材 · 555_480.jpg | 医工讨论场景，裁去人脸并遮蔽资料文字 |
| `evidence-bme.webp` | 易拉宝素材 · 全国大学生生物医学工程创新设计竞赛三等奖证书 | 全国三等奖证书节选 |
| `evidence-ican.webp` | 9.0 中期 PPT 第 9 页 | iCAN 大湾区赛区三等奖证书节选 |
| `evidence-spring.webp` | 易拉宝素材 · 医疗器械创新创业大赛类别赛入围邀请函 | 「春雨杯」赛事标题与入围段落节选 |
| `evidence-science.webp` | 9.0 中期 PPT 第 10 页 | 陕西乾县科普现场的手持鞋垫画面 |
| `gallery-maker-event.webp` | 中期报告/创客节 · 545_480.jpg | 展位和履见展陈物料 |
| `evidence-exhibit.webp` | 9.0 中期 PPT 第 10 页 | 创客节展陈海报节选 |
| `evolution-48.webp` | 11.0 中期 PPT 第 4 页 | 早期 48 点阵列示意，非实物拍摄 |
| `pcb-routing.webp` | 11.0 中期 PPT 第 4 页 | V3 右脚 PCB 走线审查图 |
| `assembly-exploded.webp` | 11.0 中期 PPT 第 4 页 | 同板外壳、板卡数字装配爆炸视图 |
| `pcb-top.webp` | 最新版V3完整审查_20261107/layout/top.png | 顶层铜连接图 |
| `pcb-ground.webp` | 最新版V3完整审查_20261107/layout/inner1_GND.png | 内层地平面图 |
| `pcb-power.webp` | 最新版V3完整审查_20261107/layout/inner2_3V3.png | 内层电源平面图 |
| `pcb-bottom.webp` | 最新版V3完整审查_20261107/layout/bottom.png | 底层铜连接图 |
| `shell-left-top.webp`、`shell-left-base.webp` | 固件优化版本（带温湿度和姿态）/3D外壳/同板左右脚外壳_20261108/分析/left_top_iso.png、left_bot_iso.png | 左脚上盖、底座等轴视图 |
| `shell-right-top.webp`、`shell-right-base.webp` | 同上目录/right_top_iso.png、right_bot_iso.png | 右脚上盖、底座等轴视图 |

交流合作入口使用学院官网公示的通用邮箱。[深圳技术大学健康与环境工程学院](https://hsee.sztu.edu.cn/)
