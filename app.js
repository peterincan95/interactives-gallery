(async function () {
  const site = await fetch("site.json").then(r => r.json());

  // Text (all strings live in site.json)
  document.title = site.siteName;
  document.querySelectorAll("[data-tab]").forEach(el => {
    el.textContent = site.tabs[el.dataset.tab];
    el.dataset.label = site.tabs[el.dataset.tab];
  });

  // Apps grid
  const grid = document.getElementById("app-grid");
  site.apps.forEach(app => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "tile";
    a.href = app.url;
    a.target = "_blank";
    a.rel = "noopener";

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    const img = document.createElement("img");
    img.src = app.screenshot;
    img.alt = "";
    img.loading = "lazy";
    // Zoomed-in crop: focus point (0–100% of the screenshot) and zoom factor
    const crop = app.crop || {};
    img.style.setProperty("--fx", (crop.x ?? 50) + "%");
    img.style.setProperty("--fy", (crop.y ?? 50) + "%");
    img.style.setProperty("--zoom", crop.zoom ?? 1);
    thumb.appendChild(img);

    const h = document.createElement("h2");
    h.className = "tile-title";
    h.textContent = app.title;

    a.append(thumb, h);
    li.appendChild(a);
    grid.appendChild(li);
  });

  // About (rendered from about.md)
  let aboutLoaded = false;
  async function loadAbout() {
    if (aboutLoaded) return;
    aboutLoaded = true;
    const md = await fetch("about.md").then(r => r.text());
    document.getElementById("about-content").innerHTML = marked.parse(md);
  }

  // Tabs via URL hash
  function show() {
    const tab = location.hash === "#about" ? "about" : "apps";
    document.querySelectorAll("[data-tab]").forEach(el => {
      el.setAttribute("aria-selected", String(el.dataset.tab === tab));
    });
    document.getElementById("panel-apps").hidden = tab !== "apps";
    document.getElementById("panel-about").hidden = tab !== "about";
    if (tab === "about") loadAbout();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", show);
  show();
})();
