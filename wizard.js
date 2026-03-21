(() => {
  const data = window.WIZARD_DATA;
  const root = document.querySelector("[data-sanctuary-guide]");

  if (!data || !root) return;

  const state = {
    pathId: null,
    stepIndex: 0,
    answers: {},
  };

  const elements = {
    intro: root.querySelector("[data-wizard-intro]"),
    flow: root.querySelector("[data-wizard-flow]"),
    result: root.querySelector("[data-wizard-result]"),
    pathGrid: root.querySelector("[data-wizard-path-grid]"),
    progress: root.querySelector("[data-wizard-progress]"),
    pathLabel: root.querySelector("[data-wizard-path-label]"),
    questionTitle: root.querySelector("[data-wizard-question-title]"),
    questionHelp: root.querySelector("[data-wizard-question-help]"),
    optionGrid: root.querySelector("[data-wizard-option-grid]"),
    backButton: root.querySelector("[data-wizard-back]"),
    restartButtons: Array.from(root.querySelectorAll("[data-wizard-restart]")),
    resultBody: root.querySelector("[data-wizard-result-body]"),
  };

  function getPath(pathId = state.pathId) {
    return data.paths[pathId] || null;
  }

  function getCurrentQuestion() {
    const path = getPath();
    if (!path) return null;
    return path.questions[state.stepIndex] || null;
  }

  function getEntity(type, id) {
    return data.entities[type]?.[id] || null;
  }

  function getOption(questionId, optionId) {
    const path = getPath();
    const question = path?.questions.find((item) => item.id === questionId);
    return question?.options.find((item) => item.id === optionId) || null;
  }

  function getAnswerLabel(questionId) {
    const option = getOption(questionId, state.answers[questionId]);
    return option?.label || "";
  }

  function getAnswerLabels() {
    const path = getPath();
    if (!path) return [];
    return path.questions
      .map((question) => getAnswerLabel(question.id))
      .filter(Boolean);
  }

  function createScoreboard() {
    return {
      classes: {},
      pages: {},
      sources: {},
      tools: {},
      creators: {},
    };
  }

  function addWeight(bucket, id, value) {
    if (!id || typeof value !== "number") return;
    bucket[id] = (bucket[id] || 0) + value;
  }

  function buildScores() {
    const scoreboard = createScoreboard();
    const path = getPath();
    if (!path) return scoreboard;

    path.questions.forEach((question) => {
      const option = getOption(question.id, state.answers[question.id]);
      if (!option?.weights) return;

      Object.entries(option.weights).forEach(([type, entries]) => {
        if (!scoreboard[type] || !entries) return;
        Object.entries(entries).forEach(([id, value]) => {
          addWeight(scoreboard[type], id, value);
        });
      });
    });

    return scoreboard;
  }

  function rankEntities(type, scoreBucket, fallbackIds = []) {
    const entities = data.entities[type] || {};
    const ranked = Object.entries(entities)
      .map(([id, entity]) => ({
        id,
        score: scoreBucket[id] || 0,
        entity,
      }))
      .filter((entry) => {
        if (type === "classes" && entry.entity.available === false)
          return false;
        return entry.score > 0;
      })
      .sort((a, b) => b.score - a.score);

    fallbackIds.forEach((id) => {
      if (!ranked.find((entry) => entry.id === id) && entities[id]) {
        ranked.push({ id, score: 0, entity: entities[id] });
      }
    });

    return ranked;
  }

  function formatBecauseYouSaid() {
    const labels = getAnswerLabels();
    return labels.slice(0, 3);
  }

  function resolveClassRecommendation(classId, goalId) {
    const classEntity = getEntity("classes", classId);
    if (!classEntity) return null;
    return (
      classEntity.recommendations?.[goalId] ||
      classEntity.recommendations?.default ||
      null
    );
  }

  function getLinkedEntity(type, id) {
    if (!id) return null;
    const entity = getEntity(type, id);
    if (!entity) return null;
    return { type, id, ...entity };
  }

  function buildNextStepResult(scores) {
    const path = getPath();
    const pages = rankEntities("pages", scores.pages, path.defaults.pages);
    const sources = rankEntities(
      "sources",
      scores.sources,
      path.defaults.sources,
    );
    const tools = rankEntities("tools", scores.tools, path.defaults.tools);
    const creators = rankEntities(
      "creators",
      scores.creators,
      path.defaults.creators,
    );
    const classes = rankEntities(
      "classes",
      scores.classes,
      path.defaults.classes,
    );

    return {
      kicker: "Best Next Step",
      title: pages[0].entity.label,
      summary: pages[0].entity.summary,
      backup: pages[1]?.entity?.label || null,
      because: formatBecauseYouSaid(),
      why: [
        `Your stage points most strongly toward ${pages[0].entity.label.toLowerCase()}.`,
        sources[0]
          ? `${sources[0].entity.label} is the best source fit for the way you want help.`
          : "A broad guide source is still the safest place to start.",
        classes[0]
          ? `If class fit matters here, ${classes[0].entity.label} is the cleanest profile.`
          : "The next step matters more than class specificity right now.",
      ],
      cards: [
        {
          label: "Best page on the hub",
          item: getLinkedEntity("pages", pages[0].id),
        },
        {
          label: "Best external source",
          item: sources[0] ? getLinkedEntity("sources", sources[0].id) : null,
        },
        {
          label: "Best supporting tool",
          item: tools[0] ? getLinkedEntity("tools", tools[0].id) : null,
        },
        {
          label: "Optional creator follow-up",
          item: creators[0]
            ? getLinkedEntity("creators", creators[0].id)
            : null,
        },
      ].filter((card) => card.item),
      nextClicks: [
        getLinkedEntity("pages", pages[0].id),
        sources[0] ? getLinkedEntity("sources", sources[0].id) : null,
        tools[0] ? getLinkedEntity("tools", tools[0].id) : null,
      ].filter(Boolean),
    };
  }

  function buildChooseClassResult(scores) {
    const path = getPath();
    const goalId = state.answers.goal || "allround";
    const classes = rankEntities(
      "classes",
      scores.classes,
      path.defaults.classes,
    );
    const primary = classes[0];
    const backup = classes[1] || null;
    const mapping = resolveClassRecommendation(primary.id, goalId);

    const page = getLinkedEntity("pages", mapping?.page || "classes");
    const source = getLinkedEntity("sources", mapping?.source || "maxroll");
    const tool = getLinkedEntity("tools", mapping?.tool || "planner");
    const creator = getLinkedEntity("creators", mapping?.creator || "rob2628");

    return {
      kicker: "Class Recommendation",
      title: `${primary.entity.emoji} ${primary.entity.label}`,
      summary: primary.entity.summary,
      backup: backup ? `${backup.entity.emoji} ${backup.entity.label}` : null,
      because: formatBecauseYouSaid(),
      why: [
        ...primary.entity.strengths.slice(0, 2),
        `This recommendation is tuned for ${getAnswerLabel("goal").toLowerCase()} and a ${getAnswerLabel("complexity").toLowerCase()} difficulty preference.`,
      ],
      cards: [
        {
          label: "Best page on the hub",
          item: page,
        },
        {
          label: "Best external source",
          item: source,
        },
        {
          label: "Best supporting tool",
          item: tool,
        },
        {
          label: "Best creator follow-up",
          item: creator,
        },
      ],
      nextClicks: [page, source, tool].filter(Boolean),
    };
  }

  function buildFindResourceResult(scores) {
    const path = getPath();
    const pages = rankEntities("pages", scores.pages, path.defaults.pages);
    const sources = rankEntities(
      "sources",
      scores.sources,
      path.defaults.sources,
    );
    const tools = rankEntities("tools", scores.tools, path.defaults.tools);
    const creators = rankEntities(
      "creators",
      scores.creators,
      path.defaults.creators,
    );
    const topTool =
      tools[0] && tools[0].score > 0
        ? getLinkedEntity("tools", tools[0].id)
        : null;

    return {
      kicker: "Best Resource Match",
      title: sources[0].entity.label,
      summary: sources[0].entity.summary,
      backup: sources[1]?.entity?.label || null,
      because: formatBecauseYouSaid(),
      why: [
        `${sources[0].entity.label} best matches the kind of answer you asked for.`,
        pages[0]
          ? `${pages[0].entity.label} is the strongest internal page to pair with it.`
          : "The resource matrix is the best internal follow-up.",
        topTool
          ? `${topTool.label} is the best supporting tool for this problem.`
          : "A specialist tool is optional for this answer.",
      ],
      cards: [
        {
          label: "Best source",
          item: getLinkedEntity("sources", sources[0].id),
        },
        {
          label: "Best backup source",
          item: sources[1] ? getLinkedEntity("sources", sources[1].id) : null,
        },
        {
          label: "Best page on the hub",
          item: pages[0] ? getLinkedEntity("pages", pages[0].id) : null,
        },
        {
          label: "Best supporting tool",
          item: topTool,
        },
        {
          label: "Optional creator follow-up",
          item: creators[0]
            ? getLinkedEntity("creators", creators[0].id)
            : null,
        },
      ].filter((card) => card.item),
      nextClicks: [
        getLinkedEntity("sources", sources[0].id),
        pages[0] ? getLinkedEntity("pages", pages[0].id) : null,
        topTool,
      ].filter(Boolean),
    };
  }

  function buildResult() {
    const path = getPath();
    const scores = buildScores();
    if (!path) return null;

    if (path.resultType === "class") return buildChooseClassResult(scores);
    if (path.resultType === "source") return buildFindResourceResult(scores);
    return buildNextStepResult(scores);
  }

  function renderIntro() {
    elements.intro.hidden = false;
    elements.flow.hidden = true;
    elements.result.hidden = true;

    elements.pathGrid.innerHTML = Object.entries(data.paths)
      .map(
        ([id, path]) => `
          <button type="button" class="wizard-path-card" data-path-select="${id}">
            <span class="wizard-path-kicker">Sanctuary Guide</span>
            <strong>${path.label}</strong>
            <span>${path.description}</span>
          </button>
        `,
      )
      .join("");

    elements.pathGrid
      .querySelectorAll("[data-path-select]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          state.pathId = button.dataset.pathSelect;
          state.stepIndex = 0;
          state.answers = {};
          render();
        });
      });
  }

  function renderQuestion() {
    const path = getPath();
    const question = getCurrentQuestion();
    if (!path || !question) return;

    elements.intro.hidden = true;
    elements.flow.hidden = false;
    elements.result.hidden = true;

    elements.pathLabel.textContent = path.label;
    elements.progress.textContent = `Step ${state.stepIndex + 1} of ${path.questions.length}`;
    elements.questionTitle.textContent = question.title;
    elements.questionHelp.textContent =
      "Pick the answer that feels closest. You can go back at any time.";

    elements.optionGrid.innerHTML = question.options
      .map(
        (option) => `
          <button type="button" class="wizard-option-card" data-option-select="${option.id}">
            <strong>${option.label}</strong>
            <span>${option.description}</span>
          </button>
        `,
      )
      .join("");

    elements.optionGrid
      .querySelectorAll("[data-option-select]")
      .forEach((button) => {
        button.addEventListener("click", () => {
          state.answers[question.id] = button.dataset.optionSelect;
          if (state.stepIndex >= path.questions.length - 1) {
            renderResult();
          } else {
            state.stepIndex += 1;
            render();
          }
        });
      });

    elements.backButton.textContent =
      state.stepIndex === 0 ? "Back To Paths" : "Back One Step";
  }

  function renderCard(item, label) {
    if (!item) return "";
    return `
      <a href="${item.href}" class="resource-card"${item.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
        <div class="wizard-result-card-kicker">${label}</div>
        <div class="resource-card-title">${item.label}</div>
        <p class="resource-card-desc">${item.summary}</p>
        <span class="resource-card-link">${item.href.startsWith("http") ? "Open external source" : "Open page"} →</span>
      </a>
    `;
  }

  function renderResult() {
    const result = buildResult();
    if (!result) return;

    elements.intro.hidden = true;
    elements.flow.hidden = true;
    elements.result.hidden = false;

    const becauseMarkup = result.because
      .map((item) => `<span class="finder-pill">${item}</span>`)
      .join("");
    const whyMarkup = result.why.map((item) => `<li>${item}</li>`).join("");
    const cardsMarkup = result.cards
      .map((card) => renderCard(card.item, card.label))
      .join("");
    const nextClicksMarkup = result.nextClicks
      .map(
        (item) => `
          <a href="${item.href}" class="class-finder-link"${item.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
            ${item.label}
          </a>
        `,
      )
      .join("");

    elements.resultBody.innerHTML = `
      <div class="class-finder-result wizard-result-summary">
        <div class="class-finder-result-head">
          <div>
            <div class="class-finder-result-kicker">${result.kicker}</div>
            <h3>${result.title}</h3>
          </div>
          ${result.backup ? `<div class="wizard-backup-note">Backup: ${result.backup}</div>` : ""}
        </div>
        <p>${result.summary}</p>
        <div class="class-finder-result-meta">${becauseMarkup}</div>
        <ul class="class-finder-result-list">${whyMarkup}</ul>
        <div class="class-finder-result-links">${nextClicksMarkup}</div>
      </div>
      <div class="section-header wizard-result-section">
        <p class="section-label">Recommended Path</p>
        <h2>Your Best Next Clicks</h2>
        <p class="section-desc">
          Use these links in order if you want the fastest route from your answers into the rest of the hub.
        </p>
      </div>
      <div class="resource-grid wizard-result-grid">${cardsMarkup}</div>
      <p class="wizard-site-note">${data.seasonConfig.siteFocusNote}</p>
    `;
  }

  function render() {
    if (!state.pathId) {
      renderIntro();
      return;
    }
    renderQuestion();
  }

  elements.backButton.addEventListener("click", () => {
    if (!state.pathId) return;
    if (state.stepIndex === 0) {
      state.pathId = null;
      state.answers = {};
      render();
      return;
    }

    const path = getPath();
    const previousQuestion = path.questions[state.stepIndex];
    if (previousQuestion) {
      delete state.answers[previousQuestion.id];
    }
    state.stepIndex -= 1;
    render();
  });

  elements.restartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.pathId = null;
      state.stepIndex = 0;
      state.answers = {};
      render();
    });
  });

  render();
})();
