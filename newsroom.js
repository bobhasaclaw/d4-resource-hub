(() => {
  const articles = Array.isArray(window.D4_NEWS_ARTICLES)
    ? [...window.D4_NEWS_ARTICLES]
    : [];

  if (!articles.length) {
    return;
  }

  articles.sort((a, b) => {
    if ((b.priority || 0) !== (a.priority || 0)) {
      return (b.priority || 0) - (a.priority || 0);
    }
    return (b.date || "").localeCompare(a.date || "");
  });

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderCard(article, featured = false) {
    const footer = featured
      ? `
        <div class="story-card-footer">
          <span>Source: ${escapeHtml(article.sourceName)}</span>
          <span class="story-card-link">Read story →</span>
        </div>
      `
      : `<div class="story-card-link">Read story →</div>`;

    return `
      <a href="${escapeHtml(article.slug)}" class="story-card${featured ? " featured" : ""}">
        <div class="story-card-media">
          <img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.alt)}" loading="lazy" decoding="async">
        </div>
        <div class="story-card-body">
          <div class="story-card-topline">
            <span class="story-chip">${escapeHtml(article.categoryLabel)}</span>
            <span>${escapeHtml(article.dateLabel)}</span>
            ${featured && article.readTime ? `<span>${escapeHtml(article.readTime)}</span>` : ""}
          </div>
          <h3 class="story-card-title">${escapeHtml(featured ? article.headline : article.title)}</h3>
          <p class="story-card-excerpt">${escapeHtml(featured ? article.excerpt : article.archiveExcerpt || article.excerpt)}</p>
          ${footer}
        </div>
      </a>
    `;
  }

  function installHomepageNews() {
    const root = document.querySelector("[data-homepage-news]");
    if (!root) return;

    const featured =
      articles.find((article) => article.homepageFeatured) || articles[0];
    const sideItems = articles
      .filter((article) => article.id !== featured.id)
      .slice(0, 3);

    root.innerHTML = `
      <div class="news-featured">
        ${renderCard(featured, true)}
        <div class="story-side-list">
          ${sideItems.map((article) => renderCard(article)).join("")}
        </div>
      </div>
    `;
  }

  function installNewsroomFeatured() {
    const root = document.querySelector("[data-news-featured]");
    if (!root) return;

    const featured = articles[0];
    const sideItems = articles.slice(1, 3);

    root.innerHTML = `
      <div class="newsroom-layout">
        <div class="news-featured">
          ${renderCard(featured, true)}
          <div class="story-side-list">
            ${sideItems.map((article) => renderCard(article)).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function installEditorsPicks() {
    const root = document.querySelector("[data-news-picks]");
    if (!root) return;

    const seenCategories = new Set();
    const picks = [];

    for (const article of articles) {
      const key = article.category || article.categoryLabel || "Other";
      if (seenCategories.has(key)) continue;
      seenCategories.add(key);
      picks.push(article);
      if (picks.length === 4) break;
    }

    root.innerHTML = `
      <div class="news-picks-grid">
        ${picks.map((article) => renderCard(article)).join("")}
      </div>
    `;
  }

  function installNewsArchive() {
    const grid = document.querySelector("[data-news-archive]");
    const filtersRoot = document.querySelector("[data-news-filters]");
    const searchInput = document.querySelector("[data-news-search]");
    const countNode = document.querySelector("[data-news-count]");
    const loadMoreButton = document.querySelector("[data-news-load-more]");

    if (!grid || !filtersRoot || !searchInput || !countNode || !loadMoreButton)
      return;

    const categories = [
      "All",
      ...new Set(articles.map((article) => article.category)),
    ];
    let activeCategory = document.body.dataset.defaultNewsCategory || "All";
    let activeQuery = "";
    let visibleCount = 6;

    filtersRoot.innerHTML = categories
      .map((category) => {
        const count =
          category === "All"
            ? articles.length
            : articles.filter((article) => article.category === category)
                .length;

        return `
        <button
          type="button"
          class="news-filter-button${category === activeCategory ? " active" : ""}"
          data-news-filter="${escapeHtml(category)}"
          aria-pressed="${category === activeCategory ? "true" : "false"}"
        >
          ${escapeHtml(category)} <span>${count}</span>
        </button>
      `;
      })
      .join("");

    const render = () => {
      const normalizedQuery = activeQuery.trim().toLowerCase();
      const filtered = articles.filter((article) => {
        const categoryMatch =
          activeCategory === "All" || article.category === activeCategory;
        const queryMatch =
          !normalizedQuery ||
          `${article.title} ${article.headline} ${article.excerpt} ${article.archiveExcerpt} ${article.searchText}`
            .toLowerCase()
            .includes(normalizedQuery);
        return categoryMatch && queryMatch;
      });

      const visibleArticles = filtered.slice(0, visibleCount);
      countNode.textContent = `${visibleArticles.length} of ${filtered.length} stor${filtered.length === 1 ? "y" : "ies"} shown`;

      if (!filtered.length) {
        grid.innerHTML = `
          <div class="news-archive-empty">
            <h3>No matching stories</h3>
            <p>Try a broader search term or switch back to another category.</p>
          </div>
        `;
        loadMoreButton.hidden = true;
        return;
      }

      grid.innerHTML = visibleArticles
        .map((article) => renderCard(article))
        .join("");
      loadMoreButton.hidden = visibleArticles.length >= filtered.length;
    };

    filtersRoot.querySelectorAll("[data-news-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.newsFilter || "All";
        visibleCount = 6;
        filtersRoot.querySelectorAll("[data-news-filter]").forEach((node) => {
          const active = node === button;
          node.classList.toggle("active", active);
          node.setAttribute("aria-pressed", String(active));
        });
        render();
      });
    });

    searchInput.addEventListener("input", () => {
      activeQuery = searchInput.value || "";
      visibleCount = 6;
      render();
    });

    loadMoreButton.addEventListener("click", () => {
      visibleCount += 6;
      render();
    });

    render();
  }

  document.addEventListener("DOMContentLoaded", () => {
    installHomepageNews();
    installNewsroomFeatured();
    installEditorsPicks();
    installNewsArchive();
  });
})();
