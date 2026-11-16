"use strict";

document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");
const navLabel = navToggle.querySelector(".sr-only");
const compact = window.matchMedia("(max-width: 860px)");

function setNavOpen(open) {
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navLabel.textContent = open ? "关闭导航" : "打开导航";
}

function updateNavMode() {
  navToggle.hidden = !compact.matches;
  setNavOpen(false);
}

navToggle.addEventListener("click", () => {
  setNavOpen(navToggle.getAttribute("aria-expanded") === "false");
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setNavOpen(false);
    navToggle.focus();
  }
});
compact.addEventListener("change", updateNavMode);
updateNavMode();

const preview = document.querySelector(".image-dialog");
const previewTitle = document.querySelector("#preview-title");
const previewBody = preview.querySelector(".dialog-body");
const previewImage = preview.querySelector("img");
const figureButton = document.querySelector("[data-open-figure]");
let previewTrigger;

function showImage(link, trigger) {
  previewTrigger = trigger;
  const wideImage = link.hasAttribute("data-wide-preview");
  preview.classList.toggle("is-wide", wideImage);
  previewBody.tabIndex = wideImage && compact.matches ? 0 : -1;
  previewTitle.textContent = link.dataset.preview;
  previewImage.alt = link.querySelector("img").alt;
  previewImage.src = link.href;
  preview.showModal();
  previewBody.scrollLeft = 0;
}

if (typeof preview.showModal === "function") {
  document.querySelectorAll("[data-preview]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      showImage(link, link);
    });
  });
  figureButton.hidden = false;
  figureButton.addEventListener("click", () => {
    const figureLink = figureButton.closest("figure").querySelector("[data-preview]");
    showImage(figureLink, figureButton);
  });
  preview.addEventListener("click", (event) => {
    if (event.target === preview) preview.close();
  });
  preview.addEventListener("close", () => {
    previewImage.removeAttribute("src");
    previewTrigger.focus({ preventScroll: true });
  });
}
