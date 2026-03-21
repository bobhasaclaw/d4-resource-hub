(() => {
  const articles = Array.isArray(window.D4_NEWS_ARTICLES)
    ? window.D4_NEWS_ARTICLES
    : [];
  if (!articles.length) return;

  const currentPath = window.location.pathname.split("/").pop() || "";
  const currentArticle = articles.find(
    (article) => article.slug === currentPath,
  );
  if (!currentArticle) return;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderCard(article) {
    return `
      <a href="${escapeHtml(article.slug)}" class="story-card">
        <div class="story-card-media">
          <img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.alt)}" loading="lazy" decoding="async">
        </div>
        <div class="story-card-body">
          <div class="story-card-topline">
            <span class="story-chip">${escapeHtml(article.categoryLabel)}</span>
            <span>${escapeHtml(article.dateLabel)}</span>
          </div>
          <h3 class="story-card-title">${escapeHtml(article.title)}</h3>
          <p class="story-card-excerpt">${escapeHtml(article.archiveExcerpt || article.excerpt)}</p>
          <div class="story-card-link">Read story →</div>
        </div>
      </a>
    `;
  }

  function deskRole() {
    const category = currentArticle.category || "";
    if (category === "Patch Notes") return "Systems Desk";
    if (category === "Expansion" || category === "Classes")
      return "Expansion Desk";
    if (category === "Events" || category === "Season") return "Sanctuary Desk";
    if (category === "PTR" || category === "Roadmap") return "Preview Desk";
    return "Editorial Desk";
  }

  function themeClass() {
    const category = currentArticle.category || "";
    if (category === "Patch Notes" || category === "PTR") {
      return "article-theme-systems";
    }
    if (category === "Expansion" || category === "Classes") {
      return "article-theme-expansion";
    }
    if (category === "Events" || category === "Season") {
      return "article-theme-season";
    }
    if (category === "Roadmap") {
      return "article-theme-roadmap";
    }
    return "article-theme-editorial";
  }

  function installArticleTheme() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const cls = themeClass();
    document.body.classList.add(cls);
    hero.classList.add(cls);
  }

  function installHeroBrandRibbon() {
    const hero = document.querySelector(".hero");
    if (!hero || hero.querySelector(".article-brand-ribbon")) return;

    const badge = hero.querySelector(".hero-badge");
    const ribbon = document.createElement("div");
    ribbon.className = "article-brand-ribbon";
    ribbon.innerHTML = `
      <span class="brand-mark-wrap article-brand-mark" aria-hidden="true">
        <img src="assets/brand/d4rh-mark.svg" alt="" class="brand-mark" />
      </span>
      <div class="article-brand-copy">
        <span class="article-brand-kicker">D4 Resource Hub Editorial</span>
        <strong>${escapeHtml(currentArticle.categoryLabel)} Desk</strong>
        <span>Official-source reporting with practical next steps for players.</span>
      </div>
      <div class="article-brand-links">
        <a href="news.html">Newsroom</a>
        <a href="newsroom-desk.html">Meet the Desk</a>
      </div>
    `;

    if (badge) {
      badge.insertAdjacentElement("afterend", ribbon);
    } else {
      hero.insertAdjacentElement("afterbegin", ribbon);
    }
  }

  function installByline() {
    if (document.querySelector(".article-meta-section")) return;

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const section = document.createElement("section");
    section.className = "article-meta-section";
    section.innerHTML = `
      <div class="container">
        <div class="article-meta-band">
          <div class="article-meta-group">
            <span class="article-meta-label">Byline</span>
            <div class="article-author-card">
              <span class="article-author-avatar" aria-hidden="true">
                <img src="assets/brand/d4rh-avatar.svg" alt="" />
              </span>
              <div class="article-author-copy">
                <strong>D4 Resource Hub Editorial</strong>
                <span>${escapeHtml(deskRole())}</span>
              </div>
            </div>
            <a href="editorial.html">Built from official Blizzard sources</a>
          </div>
          <div class="article-meta-group">
            <span class="article-meta-label">Category</span>
            <strong>${escapeHtml(currentArticle.categoryLabel)}</strong>
            <span>${escapeHtml(currentArticle.readTime || "News summary")}</span>
          </div>
          <div class="article-meta-group">
            <span class="article-meta-label">Published</span>
            <strong>${escapeHtml(currentArticle.dateLabel)}</strong>
            <a href="${escapeHtml(currentArticle.sourceUrl)}" target="_blank" rel="noopener">Open official source →</a>
          </div>
        </div>
      </div>
    `;

    hero.insertAdjacentElement("afterend", section);
  }

  function installEditorialModules() {
    const summaryCard = document.querySelector(".article-summary-card");
    if (!summaryCard || document.querySelector(".article-signal-grid")) return;

    const signalGrid = document.createElement("div");
    signalGrid.className = "article-signal-grid";
    signalGrid.innerHTML = `
      <div class="article-signal-card article-pullquote-card">
        <span class="article-meta-label">Editor&#39;s Pullquote</span>
        <blockquote class="article-pullquote">${escapeHtml(currentArticle.headline || currentArticle.title)}</blockquote>
      </div>
      <div class="article-signal-card article-keyfacts-card">
        <span class="article-meta-label">Quick Facts</span>
        <ul class="article-keyfacts-list">
          <li><strong>Published:</strong> ${escapeHtml(currentArticle.dateLabel)}</li>
          <li><strong>Read time:</strong> ${escapeHtml(currentArticle.readTime || "News summary")}</li>
          <li><strong>Source:</strong> ${escapeHtml(currentArticle.sourceName || "Blizzard Entertainment")}</li>
        </ul>
      </div>
    `;

    summaryCard.insertAdjacentElement("afterend", signalGrid);
  }

  function installRelatedStories() {
    let grid = document.querySelector(".article-related-grid");
    let section = grid?.closest("section");

    if (!grid) {
      section = document.createElement("section");
      section.innerHTML = `
        <div class="container">
          <div class="section-header">
            <p class="section-label">Related Stories</p>
            <h2>Keep Reading</h2>
          </div>
          <div class="article-related-grid"></div>
        </div>
      `;
      const firstScript = document.body.querySelector("script");
      if (firstScript) {
        document.body.insertBefore(section, firstScript);
      } else {
        document.body.appendChild(section);
      }
      grid = section.querySelector(".article-related-grid");
    }

    const related = articles
      .filter((article) => article.slug !== currentArticle.slug)
      .sort((a, b) => {
        const sameCategoryA = a.category === currentArticle.category ? 1 : 0;
        const sameCategoryB = b.category === currentArticle.category ? 1 : 0;
        if (sameCategoryB !== sameCategoryA)
          return sameCategoryB - sameCategoryA;
        return (b.priority || 0) - (a.priority || 0);
      })
      .slice(0, 3);

    grid.innerHTML = related.map(renderCard).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    installArticleTheme();
    installHeroBrandRibbon();
    installByline();
    installEditorialModules();
    installRelatedStories();
  });
})();
