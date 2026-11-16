"use strict";

(() => {
  const images = "./assets/images/";
  const stages = [
    {
      period: "2026.04—06", title: "从 48 个点，开始记录足底。",
      intro: "以 RX-ES-48P 柔性压阻阵列搭建多路复用扫描原型，跑通串口输出、压力热图、空载基线与 COP 算法原型。",
      delivery: "阵列扫描工程、串口采集与早期可视化",
      next: "双脚接入、有效测点扩展与惯性数据采集",
      image: "evolution-48.webp", width: 549, height: 349,
      caption: "11.0 中期 PPT 第 4 页 · 早期阵列示意",
      alt: "早期 48 点柔性压阻阵列示意"
    },
    {
      period: "2026.08—09", title: "让左右脚，出现在同一份记录里。",
      intro: "推进 DO-P6002 双脚各 60 点平台、自研 PCB 和左右脚固件。nRF52840 同时采集压力与六轴 IMU，电脑端显示双脚响应。",
      delivery: "双脚采集平台、左右脚固件与 HTML 科研端",
      next: "校核基线与增益差异，完善线序、装配与穿戴",
      image: "gallery-early-prototype.webp", width: 1260, height: 945,
      caption: "8 月 iCAN 材料 · 早期双脚平台实拍",
      alt: "早期双脚鞋垫、线束与采集装置实物"
    },
    {
      period: "2026.10—11", title: "把信号链，逐段核对清楚。",
      intro: "右脚 V3 迭代为自研四层采集板。加入缓冲／直通 A/B 路径，复核原理图、传感器接口与实际铜连接。",
      delivery: "V3 电路、铜连接与左右脚接口审查记录",
      next: "逐点映射、轻载响应、装机 BLE 与独立供电",
      image: "pcb-routing.webp", width: 1100, height: 667,
      caption: "11.0 中期 PPT 第 4 页 · PCB 走线审查图",
      alt: "V3 右脚四层采集板走线审查图"
    },
    {
      period: "2026.11.08", title: "从板卡，走向可穿戴的装配。",
      intro: "围绕同型号板卡设计左右脚外壳。扩大 FPC 出线口、增加圆角，交付左右脚各一组上盖与底座，完成数字装配检查。",
      delivery: "4 件 STEP 模型、装配视图与尺寸检查资料",
      next: "实物打印试装、FPC 应力与长时间固定测试",
      image: "assembly-exploded.webp", width: 1100, height: 733,
      caption: "11.0 中期 PPT 第 4 页 · 同板外壳数字装配",
      alt: "同板左右脚外壳与板卡的数字装配爆炸视图"
    },
    {
      period: "2026.11.14", title: "让每一次采集，都能回看与复算。",
      intro: "汇总 69 段双脚压力记录，完成质量筛选、2 秒窗口划分和按采集对象整组留出验证。交付压力与压力＋IMU 两套离线分类模型。",
      delivery: "源数据清单、留出预测、评估图与复现脚本",
      next: "重穿与跨日重复性，新的活动和临床场景验证",
      image: "model-evaluation-1440.webp", full: "model-evaluation.webp", width: 1440, height: 609,
      caption: "11 月 14 日工程数据 · 站立／步行离线分类",
      alt: "站立和步行模型的窗口混淆矩阵与整段留出评估"
    }
  ];
  const versionButtons = [...document.querySelectorAll("[data-version]")];
  const versionPanel = document.querySelector("#version-panel");
  const versionImage = document.querySelector("#version-image");
  const curve = document.querySelector("#evolution-curve");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let selectedVersion = 2;

  function animateContent(element) {
    element.classList.remove("content-enter");
    if (reducedMotion.matches) return;
    void element.offsetWidth;
    element.classList.add("content-enter");
  }

  function setImage(image, link, item) {
    image.width = item.width;
    image.height = item.height;
    image.alt = item.alt;
    image.src = images + item.image;
    link.href = images + (item.full || item.image);
    link.dataset.preview = item.alt;
  }

  function drawCurve() {
    const bounds = curve.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    curve.width = Math.round(bounds.width * ratio);
    curve.height = Math.round(bounds.height * ratio);
    const ctx = curve.getContext("2d");
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    const xs = [.08, .29, .50, .71, .92];
    const ys = [.76, .62, .47, .30, .12];
    const points = xs.map((x, i) => [x * bounds.width, ys[i] * bounds.height]);
    for (let i = 1; i < points.length; i += 1) {
      const [x0, y0] = points[i - 1];
      const [x1, y1] = points[i];
      const midX = (x0 + x1) / 2;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.bezierCurveTo(midX, y0, midX, y1, x1, y1);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = i <= selectedVersion ? "#0284c7" : "#c7dce7";
      ctx.stroke();
    }
    const [selectedX, selectedY] = points[selectedVersion];
    ctx.beginPath();
    ctx.setLineDash([3, 6]);
    ctx.moveTo(selectedX, Math.min(selectedY + 112, bounds.height));
    ctx.lineTo(selectedX, bounds.height);
    ctx.strokeStyle = "#accbdc";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function selectVersion(index, focus = false) {
    selectedVersion = index;
    const stage = stages[index];
    versionButtons.forEach((button, i) => {
      button.setAttribute("aria-selected", String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
    versionPanel.setAttribute("aria-labelledby", "version-" + index);
    document.querySelector("#version-period").textContent = stage.period;
    document.querySelector("#version-count").textContent = String(index + 1).padStart(2, "0") + " / 05";
    document.querySelector("#version-heading").textContent = stage.title;
    document.querySelector("#version-intro").textContent = stage.intro;
    document.querySelector("#version-delivery").textContent = stage.delivery;
    document.querySelector("#version-next").textContent = stage.next;
    document.querySelector("#version-caption").textContent = stage.caption;
    setImage(versionImage, versionImage.closest("a"), stage);
    document.querySelector('[data-version-step="-1"]').disabled = index === 0;
    document.querySelector('[data-version-step="1"]').disabled = index === stages.length - 1;
    const scroller = document.querySelector(".curve-scroll");
    const node = versionButtons[index];
    scroller.scrollTo({
      left: scroller.scrollLeft + node.getBoundingClientRect().left + node.getBoundingClientRect().width / 2 - scroller.getBoundingClientRect().left - scroller.clientWidth / 2,
      behavior: reducedMotion.matches ? "instant" : "smooth"
    });
    if (focus) node.focus({ preventScroll: true });
    animateContent(versionPanel.querySelector(".version-copy"));
    drawCurve();
  }

  function tabKeyboard(event, buttons, select) {
    const index = buttons.indexOf(event.currentTarget);
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
    if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = buttons.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    buttons[next].focus({ preventScroll: true });
  }

  versionButtons.forEach((button, index) => {
    button.addEventListener("click", () => selectVersion(index));
    button.addEventListener("keydown", (event) => tabKeyboard(event, versionButtons, selectVersion));
  });
  document.querySelectorAll("[data-version-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = selectedVersion + Number(button.dataset.versionStep);
      if (next >= 0 && next < stages.length) selectVersion(next);
    });
  });
  new ResizeObserver(drawCurve).observe(curve);
  drawCurve();
  // Keep the initially selected stage visible inside the mobile scroll area.
  const curveScroller = document.querySelector(".curve-scroll");
  const selectedNode = versionButtons[selectedVersion];
  curveScroller.scrollLeft = selectedNode.getBoundingClientRect().left
    + selectedNode.getBoundingClientRect().width / 2
    - curveScroller.getBoundingClientRect().left - curveScroller.clientWidth / 2;

  const engineering = {
    shell: {
      label: "结构交付 · 2026.11.08", heading: "四件模型，服务左右脚穿戴。",
      description: "左右脚沿用同型号采集板，各有上盖与底座。根据 FPC 出线和固定需求修订开口，完成数字装配检查。",
      points: ["扩大 FPC 出线口，增加圆角", "交付左／右上盖与底座四件 STEP", "对应 PCB、接口与穿戴固定方式复核"],
      next: "打印试装、真实排线应力与长时间穿戴固定。",
      views: [
        { name: "装配爆炸", image: "assembly-exploded.webp", width: 1100, height: 733, alt: "同板左右脚外壳数字装配爆炸视图" },
        { name: "左脚上盖", image: "shell-left-top.webp", width: 900, height: 675, alt: "左脚外壳上盖 CAD 等轴视图" },
        { name: "左脚底座", image: "shell-left-base.webp", width: 900, height: 675, alt: "左脚外壳底座 CAD 等轴视图" },
        { name: "右脚上盖", image: "shell-right-top.webp", width: 900, height: 675, alt: "右脚外壳上盖 CAD 等轴视图" },
        { name: "右脚底座", image: "shell-right-base.webp", width: 900, height: 675, alt: "右脚外壳底座 CAD 等轴视图" }
      ]
    },
    pcb: {
      label: "电路与铜连接复核 · 2026.11.07", heading: "沿四层板，追踪信号与电源。",
      description: "从行列选通、模拟缓冲到 ADC，逐段核查压力信号路径，并对照传感器线序和连接器实体针号。",
      points: ["四层铜连接图分别归档复核", "缓冲／直通 A/B 路径支持工程比较", "原理图、接口方向与实际铜连接交叉检查"],
      next: "全点轻载响应、通道独立性、天线环境与装机 BLE 仍需实物复测。",
      views: [
        { name: "顶层", image: "pcb-top.webp", width: 1250, height: 796, alt: "V3 PCB 顶层铜连接审查图" },
        { name: "内层 GND", image: "pcb-ground.webp", width: 1250, height: 796, alt: "V3 PCB 内层 GND 铜连接审查图" },
        { name: "内层 3V3", image: "pcb-power.webp", width: 1250, height: 796, alt: "V3 PCB 内层 3V3 铜连接审查图" },
        { name: "底层", image: "pcb-bottom.webp", width: 1250, height: 796, alt: "V3 PCB 底层铜连接审查图" }
      ]
    },
    software: {
      label: "软件平台 · 采集、质控与回放", heading: "从一次测量，到可追溯的记录。",
      description: "电脑科研端建立受试者、访视、任务与试次记录。压力和 IMU 分别录制，通过热图、回放与质量检查复核采集过程。",
      points: ["2D／3D 压力热图、COP 与相对 PTI", "CSV／JSONL 导出与历史记录回放", "小程序开发双设备 BLE 接入与本地导出"],
      next: "手机与双实物设备联调、重连和长时保存待验收。分类模型目前离线使用。",
      views: [
        { name: "电脑科研端", image: "desktop-heatmap.webp", width: 1000, height: 624, alt: "电脑科研端双脚 3D 热图界面，模拟数据演示" },
        { name: "微信小程序", image: "miniapp-heatmap-360.webp", full: "miniapp-heatmap.webp", width: 360, height: 812, alt: "微信小程序双脚热图界面演示" }
      ]
    }
  };
  let selectedEngineering = "shell";
  const engineeringButtons = [...document.querySelectorAll("[data-engineering]")];
  const engineeringImage = document.querySelector("#engineering-image");
  const viewControls = document.querySelector(".engineering-views");

  function selectView(index) {
    const view = engineering[selectedEngineering].views[index];
    setImage(engineeringImage, document.querySelector("#engineering-zoom"), view);
    viewControls.querySelectorAll("button").forEach((button, i) => {
      button.setAttribute("aria-pressed", String(index === i));
    });
    document.querySelector("#engineering-caption").textContent = view.alt + " · 点击查看大图";
  }

  function selectEngineering(key) {
    selectedEngineering = key;
    const group = engineering[key];
    engineeringButtons.forEach((button) => {
      const selected = button.dataset.engineering === key;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    document.querySelector("#engineering-panel").setAttribute("aria-labelledby", "engineering-" + key);
    document.querySelector("#engineering-label").textContent = group.label;
    const headingParts = group.heading.split("，");
    document.querySelector("#engineering-heading").replaceChildren(
      document.createTextNode(headingParts[0] + "，"), document.createElement("br"),
      document.createTextNode(headingParts.slice(1).join("，"))
    );
    document.querySelector("#engineering-description").textContent = group.description;
    document.querySelector("#engineering-next").textContent = group.next;
    document.querySelector("#engineering-points").replaceChildren(...group.points.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }));
    viewControls.replaceChildren(...group.views.map((view, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.view = String(index);
      button.textContent = view.name;
      button.setAttribute("aria-pressed", String(index === 0));
      return button;
    }));
    selectView(0);
    animateContent(document.querySelector(".engineering-copy"));
  }

  engineeringButtons.forEach((button) => {
    button.addEventListener("click", () => selectEngineering(button.dataset.engineering));
    button.addEventListener("keydown", (event) => tabKeyboard(event, engineeringButtons, (index) => {
      selectEngineering(engineeringButtons[index].dataset.engineering);
    }));
  });
  viewControls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (button) selectView(Number(button.dataset.view));
  });

  const navLinks = [...document.querySelectorAll(".main-nav a")];
  if ("IntersectionObserver" in window) {
    const activeSections = new Map();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => activeSections.set(entry.target.id, entry.isIntersecting));
      const active = navLinks.find((link) => activeSections.get(link.hash.slice(1)));
      navLinks.forEach((link) => {
        if (link === active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-15% 0px -55% 0px" });
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) sectionObserver.observe(section);
    });

    if (!reducedMotion.matches) {
      const reveal = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        });
      }, { threshold: .05 });
      document.querySelectorAll(".section-heading, .effort-layout").forEach((element) => {
        element.classList.add("reveal-ready");
        reveal.observe(element);
      });
    }
  }

  const readingProgress = document.querySelector(".reading-progress");
  let scrollScheduled = false;
  function updateReadingProgress() {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    readingProgress.style.transform = "scaleX(" + (height > 0 ? window.scrollY / height : 0) + ")";
    scrollScheduled = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollScheduled) {
      scrollScheduled = true;
      requestAnimationFrame(updateReadingProgress);
    }
  }, { passive: true });
  updateReadingProgress();
})();
