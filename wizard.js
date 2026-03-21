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

  const PATH_UI = {
    nextStep: {
      eyebrow: "Best place to start",
      outcome: "Get one clear next page, source, and tool.",
      bullets: ["New players", "Returning players", "Anyone feeling stuck"],
      primaryLabel: "Start here first",
    },
    chooseClass: {
      eyebrow: "Best if you are picking a character",
      outcome: "Get a class recommendation with a backup option.",
      bullets: ["Class fantasy", "Skill comfort", "Main activity"],
      primaryLabel: "Use this first",
    },
    findResource: {
      eyebrow: "Best if you already know the problem",
      outcome: "Get the right source, tool, or page quickly.",
      bullets: ["Fast answer", "Detailed guide", "Tool or tracker"],
      primaryLabel: "Use this when you need a source",
    },
  };

  const QUESTION_HELP = {
    stage:
      "Choose the stage that is closest to where your character is right now.",
    problem:
      "Pick the main thing slowing you down. The wizard will build around that problem first.",
    "help-style":
      "Choose the kind of answer you want, not the source you think you need.",
    "play-style":
      "This helps the wizard bias solo-safe, group-friendly, or flexible recommendations.",
    experience:
      "Think about your comfort level with Diablo 4 right now, not your long-term skill ceiling.",
    grouping:
      "Pick the way you play most often. It helps the wizard avoid recommending the wrong class fit.",
    role: "Choose the combat fantasy that sounds most fun. The wizard will match that to the strongest class fit.",
    goal: "Pick the activity you care about most. This is the biggest driver behind the final class recommendation.",
    complexity:
      "This helps the wizard separate easy, low-stress picks from higher-execution choices.",
    need: "Choose the exact kind of help you want first.",
    format:
      "Pick how you want to receive the answer so the wizard can send you to the right type of source.",
    specialization:
      "Use this to narrow broad help, niche tools, and specialist sources.",
  };

  const OPTION_ICONS = {
    "brand-new": "🌱",
    leveling: "⬆️",
    "returning-break": "🔁",
    "alt-character": "🧪",
    "fresh-60": "⚡",
    "early-endgame": "🏹",
    farming: "💰",
    bossing: "👹",
    "dont-know-first": "🧭",
    "feel-weak": "🛡️",
    "better-build": "🧱",
    "better-gear": "🎯",
    "faster-xp": "🏃",
    "simple-checklist": "📝",
    "seasonal-clarity": "📣",
    "fast-answer": "⚡",
    "detailed-guide": "📖",
    "tool-tracker": "🗺️",
    checklist: "✅",
    "video-help": "▶️",
    "community-help": "💬",
    new: "🌱",
    returning: "🔁",
    experienced: "🧠",
    alt: "🧪",
    solo: "🧍",
    group: "👥",
    flexible: "🌀",
    melee: "⚔️",
    ranged: "🏹",
    caster: "✨",
    summons: "💀",
    holy: "☀️",
    agile: "🗡️",
    tanky: "🛡️",
    hybrid: "🔄",
    endgame: "🏁",
    boss: "👺",
    speed: "💨",
    allround: "🧩",
    chill: "🌙",
    easy: "🙂",
    medium: "🎯",
    "high-skill": "🔥",
    "low-apm": "🪶",
    "build-guide": "🧱",
    "tier-list": "📊",
    "class-comparison": "⚖️",
    "leveling-route": "🪜",
    tracker: "🕒",
    "planner-tool": "🛠️",
    "loot-lookup": "💎",
    "season-patch": "📰",
    "trade-stash": "📦",
    "community-help": "🎥",
    "detailed-writeup": "📚",
    video: "🎬",
    official: "🏛️",
    "visual-comparison": "🖼️",
    general: "🧭",
    "class-specific": "🧬",
    "activity-specific": "🎮",
    "season-start": "🚩",
    "lore-reference": "📜",
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

  function getOptionIcon(optionId) {
    return OPTION_ICONS[optionId] || "✦";
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
            <span class="wizard-path-kicker">${PATH_UI[id]?.eyebrow || "Sanctuary Wizard"}</span>
            <strong>${path.label}</strong>
            <span>${path.description}</span>
            <div class="wizard-path-meta">${PATH_UI[id]?.outcome || ""}</div>
            <div class="wizard-path-tags">
              ${(PATH_UI[id]?.bullets || [])
                .map((item) => `<span class="wizard-path-tag">${item}</span>`)
                .join("")}
            </div>
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
      QUESTION_HELP[question.id] ||
      "Pick the answer that feels closest. You do not need a perfect match, and you can go back at any time.";

    elements.optionGrid.innerHTML = question.options
      .map(
        (option) => `
          <button type="button" class="wizard-option-card" data-option-select="${option.id}">
            <div class="wizard-option-head">
              <span class="wizard-option-icon" aria-hidden="true">${getOptionIcon(option.id)}</span>
              <div class="wizard-option-copy">
                <strong>${option.label}</strong>
                <span>${option.description}</span>
              </div>
              <span class="wizard-option-action">Choose</span>
            </div>
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
    const primaryClick = result.nextClicks[0] || null;
    const followUps = result.nextClicks.slice(1);
    const followUpMarkup = followUps
      .map(
        (item, index) => `
          <a href="${item.href}" class="wizard-step-card"${item.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
            <span class="wizard-step-number">${index + 2}</span>
            <div class="wizard-step-copy">
              <strong>${item.label}</strong>
              <span>${item.href.startsWith("http") ? "Open supporting source" : "Open supporting page"}</span>
            </div>
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
        ${
          primaryClick
            ? `
          <div class="wizard-primary-actions">
            <a href="${primaryClick.href}" class="hero-cta wizard-primary-cta"${primaryClick.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
              Start Here: ${primaryClick.label} <span>→</span>
            </a>
          </div>
        `
            : ""
        }
      </div>
      <div class="wizard-next-steps">
        <div class="section-header wizard-result-section">
          <p class="section-label">What To Do Next</p>
          <h2>Follow These Steps In Order</h2>
          <p class="section-desc">
            Start with the main recommendation first, then use the supporting links if you want more depth or a second lane.
          </p>
        </div>
        <div class="wizard-step-list">
          ${
            primaryClick
              ? `
            <a href="${primaryClick.href}" class="wizard-step-card wizard-step-card-primary"${primaryClick.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>
              <span class="wizard-step-number">1</span>
              <div class="wizard-step-copy">
                <strong>${primaryClick.label}</strong>
                <span>${primaryClick.href.startsWith("http") ? "Open the main source first" : "Open the main page first"}</span>
              </div>
            </a>
          `
              : ""
          }
          ${followUpMarkup}
        </div>
      </div>
      <div class="class-finder-result-links">${nextClicksMarkup}</div>
      <div class="section-header wizard-result-section">
        <p class="section-label">Helpful Follow-Ups</p>
        <h2>If You Want More Than One Source</h2>
        <p class="section-desc">
          These are the strongest supporting pages, sources, and tools around the main recommendation.
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
