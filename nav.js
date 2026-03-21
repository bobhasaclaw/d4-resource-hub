(() => {
  const LAST_REVIEWED = "March 21, 2026";
  const SEARCH_INDEX = [
    {
      title: "Home",
      href: "index.html",
      category: "Hub",
      summary: "Start here, featured news, creators, and quick links.",
      keywords: "home launchpad start latest sanctuary",
    },
    {
      title: "All Resources",
      href: "resources.html",
      category: "Directory",
      summary:
        "Searchable directory of build sites, tools, creators, and communities.",
      keywords: "directory search resources source sites",
    },
    {
      title: "Class Comparison",
      href: "classes.html",
      category: "Build Planning",
      summary:
        "Compare every class and use the class finder to choose what to play.",
      keywords:
        "classes compare barbarian druid necromancer paladin rogue sorcerer spiritborn",
    },
    {
      title: "Tier Lists",
      href: "tierlists.html",
      category: "Build Planning",
      summary:
        "Season 12 rankings from Maxroll, Icy Veins, D4Builds, and Mobalytics.",
      keywords: "tier list rankings best builds meta",
    },
    {
      title: "Endgame Builds",
      href: "endgame-builds.html",
      category: "Builds",
      summary:
        "Best builds for Nightmare Dungeons, the Pit, and endgame progression.",
      keywords: "endgame pit nightmare dungeons best builds",
    },
    {
      title: "Leveling Builds",
      href: "leveling-builds.html",
      category: "Builds",
      summary: "Fastest and easiest builds for getting to endgame.",
      keywords: "leveling early game starter builds",
    },
    {
      title: "Speed Farming Builds",
      href: "speed-farming.html",
      category: "Builds",
      summary: "Fast clears for XP, gold, and efficient route farming.",
      keywords: "speed farm xp gold loot efficient",
    },
    {
      title: "Boss Builds",
      href: "boss-builds.html",
      category: "Builds",
      summary: "Best single-target setups for bosses and tough encounters.",
      keywords: "bossing boss killer world boss lair boss",
    },
    {
      title: "New Player Guide",
      href: "new-player.html",
      category: "Guide",
      summary: "A structured path for getting started in Season 12.",
      keywords: "beginner new player leveling path basics",
    },
    {
      title: "Dungeons & Activities",
      href: "dungeons.html",
      category: "Guide",
      summary: "Overview of endgame activities and what to run first.",
      keywords: "dungeons helltide pit infernal hordes world boss activities",
    },
    {
      title: "Crafting & Gear Guide",
      href: "crafting.html",
      category: "Guide",
      summary:
        "Tempering, masterworking, gem priorities, and gear progression.",
      keywords: "crafting gear masterworking tempering gems materials",
    },
    {
      title: "Season Timeline",
      href: "timeline.html",
      category: "Guide",
      summary: "Chronological season roadmap and major milestones.",
      keywords: "timeline roadmap seasons schedule",
    },
    {
      title: "Season Info",
      href: "season.html",
      category: "Season",
      summary: "Season of Slaughter mechanics, roadmap, and what is confirmed.",
      keywords: "season 12 slaughter roadmap bloodied items butcher",
    },
    {
      title: "Newsroom",
      href: "news.html",
      category: "News",
      summary:
        "Featured stories, patch notes, and blog-style Diablo 4 articles.",
      keywords: "news articles blog newsroom patch notes expansion",
    },
    {
      title: "Newsroom Desk",
      href: "newsroom-desk.html",
      category: "News",
      summary:
        "Meet the editorial desk, methodology, and how the newsroom is curated.",
      keywords: "editorial desk newsroom author methodology standards",
    },
    {
      title: "Season of Slaughter Story",
      href: "news-season-of-slaughter.html",
      category: "News Article",
      summary: "What changed with Season 12 and what players should do next.",
      keywords: "season of slaughter article butcher paladin trial",
    },
    {
      title: "Warlock Reveal Summary",
      href: "news-warlock.html",
      category: "News Article",
      summary: "Official Warlock details and what is confirmed so far.",
      keywords: "warlock article lord of hatred class reveal",
    },
    {
      title: "Lord of Hatred Summary",
      href: "news-lord-of-hatred.html",
      category: "News Article",
      summary: "Expansion overview and officially confirmed features.",
      keywords: "expansion lord of hatred skovos mephisto",
    },
    {
      title: "Patch 2.5 Summary",
      href: "news-patch-2-5.html",
      category: "News Article",
      summary: "A practical read of Patch 2.5 and why it still matters.",
      keywords: "patch 2.5 balance systems article",
    },
    {
      title: "Video Library",
      href: "videos.html",
      category: "Media",
      summary:
        "Embedded build guides, season updates, deep dives, and hidden gems.",
      keywords: "videos embeds youtube guide library",
    },
    {
      title: "Creator Directory",
      href: "creators.html",
      category: "Creators",
      summary:
        "YouTube and Twitch creators with thumbnails and best-for labels.",
      keywords: "creators youtubers twitch streamers rob rhykker",
    },
    {
      title: "Communities",
      href: "communities.html",
      category: "Community",
      summary: "Discords, Reddit, and places to get help or discuss the game.",
      keywords: "discord reddit community help discussion",
    },
    {
      title: "Tools",
      href: "tools.html",
      category: "Tools",
      summary: "Maps, planners, databases, and utility tools for Diablo 4.",
      keywords: "tools planner map database calculator",
    },
    {
      title: "Helltides.com",
      href: "https://helltides.com/",
      category: "Specialist Source",
      summary:
        "Live event tracker for Helltides, world bosses, and Pit-focused utility.",
      keywords: "helltides world boss tracker timers pit specialist source",
    },
    {
      title: "Diablo4.life Trackers",
      href: "https://diablo4.life/trackers/helltide",
      category: "Specialist Source",
      summary:
        "Community tracker lane for Helltides, world bosses, and target-farming tools.",
      keywords: "diablo4.life trackers helltide world boss target farming",
    },
    {
      title: "D4Planner.io",
      href: "https://d4planner.io/",
      category: "Specialist Source",
      summary:
        "Backup planner, map, and database source for players who want another toolset.",
      keywords: "d4planner planner map database backup source",
    },
    {
      title: "Stash from Hell",
      href: "https://stashfromhell.com/",
      category: "Specialist Source",
      summary:
        "A niche but useful stash organizer for players who hoard gear and collections.",
      keywords: "stash from hell stash organizer inventory source",
    },
    {
      title: "Diablo.trade",
      href: "https://diablo.trade/",
      category: "Specialist Source",
      summary:
        "Trading marketplace for players who care about item listings and economy tools.",
      keywords: "diablo.trade trading marketplace economy listings",
    },
    {
      title: "PureDiablo",
      href: "https://www.purediablo.com/",
      category: "Specialist Source",
      summary:
        "Long-running Diablo community and editorial source for broader franchise context.",
      keywords: "purediablo community editorial franchise guides",
    },
  ];

  const NAV_HTML = `
      <a href="index.html" class="navbar-logo">
        <span class="brand-mark-wrap">
          <img src="assets/brand/d4rh-mark.svg" alt="" class="brand-mark" />
        </span>
        <span class="brand-name">D4 Resource Hub</span>
      </a>
      <ul class="navbar-links">
        <li class="nav-item">
          <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="resources.html" class="nav-link">Builds <span class="nav-arrow">▾</span></a>
          <div class="nav-dropdown nav-dropdown-sources">
            <a href="resources.html" class="dropdown-item">All Build Resources</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-source-group">
              <a href="resources.html" class="dropdown-source-name">Build Pages</a>
              <div class="dropdown-source-links">
                <a href="endgame-builds.html" class="dropdown-source-link">Endgame</a>
                <a href="leveling-builds.html" class="dropdown-source-link">Leveling</a>
                <a href="speed-farming.html" class="dropdown-source-link">Speed Farming</a>
                <a href="boss-builds.html" class="dropdown-source-link">Bossing</a>
              </div>
            </div>
            <div class="dropdown-source-group">
              <a href="resources.html" class="dropdown-source-name">Source Sites</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a href="tierlists.html" class="nav-link">Tier Lists</a>
        </li>
        <li class="nav-item">
          <a href="classes.html" class="nav-link">Classes <span class="nav-arrow">▾</span></a>
          <div class="nav-dropdown nav-dropdown-classes">
            <a href="classes.html" class="dropdown-item">Class Overview</a>
            <div class="dropdown-divider"></div>
            <span class="dropdown-source-name">Class Pages</span>
            <div class="dropdown-class-group">
              <a href="classes.html#barbarian" class="dropdown-class-name">⚔️ Barbarian</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/barbarian/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/barbarian/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/barbarian" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#druid" class="dropdown-class-name">🐺 Druid</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/druid/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/druid/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/druid" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#necromancer" class="dropdown-class-name">💀 Necromancer</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/necromancer/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/necromancer/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/necromancer" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#paladin" class="dropdown-class-name">⚔️ Paladin</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/paladin/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/paladin/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/paladin" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#rogue" class="dropdown-class-name">🗡️ Rogue</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/rogue/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/rogue/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/rogue" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#sorcerer" class="dropdown-class-name">🔥 Sorcerer</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/sorcerer/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/sorcerer/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/sorcerer" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-class-group">
              <a href="classes.html#spiritborn" class="dropdown-class-name">🦅 Spiritborn</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/spiritborn/builds/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/spiritborn/builds/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds/spiritborn" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="classes.html" class="dropdown-item" style="color: var(--gold-light); font-weight: 700;">⚔️ Class Overview</a>
            <div class="dropdown-divider"></div>
            <span class="dropdown-item disabled">Warlock — Coming in Lord of Hatred</span>
          </div>
        </li>
        <li class="nav-item">
          <a href="dungeons.html" class="nav-link">Guides <span class="nav-arrow">▾</span></a>
          <div class="nav-dropdown nav-dropdown-sources">
            <a href="dungeons.html" class="dropdown-item">Guide Overview</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-source-group">
              <span class="dropdown-source-name">Guide Pages</span>
              <div class="dropdown-source-links">
                <a href="dungeons.html" class="dropdown-source-link">Dungeons &amp; Activities</a>
                <a href="timeline.html" class="dropdown-source-link">Season Timeline</a>
                <a href="crafting.html" class="dropdown-source-link">Crafting &amp; Gear Guide</a>
                <a href="creators.html" class="dropdown-source-link">Creator Directory</a>
              </div>
            </div>
            <div class="dropdown-source-group">
              <a href="resources.html" class="dropdown-source-name">Source Sites</a>
              <div class="dropdown-source-links">
                <a href="https://maxroll.gg/d4" class="dropdown-source-link" target="_blank" rel="noopener">Maxroll</a>
                <a href="https://www.icy-veins.com/d4/" class="dropdown-source-link" target="_blank" rel="noopener">Icy Veins</a>
                <a href="https://d4builds.gg/" class="dropdown-source-link" target="_blank" rel="noopener">D4Builds</a>
                <a href="https://mobalytics.gg/diablo-4/builds" class="dropdown-source-link" target="_blank" rel="noopener">Mobalytics</a>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <a href="https://www.icy-veins.com/d4/guides/capstone-dungeons-guide/" class="dropdown-item dropdown-external" target="_blank" rel="noopener">Capstone Dungeons</a>
            <a href="https://www.icy-veins.com/d4/guides/the-butchers-lair/" class="dropdown-item dropdown-external" target="_blank" rel="noopener">Butcher's Lair</a>
            <a href="https://www.icy-veins.com/d4/guides/vessel-of-hatred-overview/" class="dropdown-item dropdown-external" target="_blank" rel="noopener">Vessel of Hatred</a>
            <a href="https://news.blizzard.com/en-us/article/24140808/diablo-iv-patch-notes" class="dropdown-item dropdown-external" target="_blank" rel="noopener">Official Patch Notes</a>
          </div>
        </li>
        <li class="nav-item">
          <a href="tools.html" class="nav-link">Tools <span class="nav-arrow">▾</span></a>
          <div class="nav-dropdown nav-dropdown-sources">
            <a href="tools.html" class="dropdown-item">Tool Overview</a>
            <div class="dropdown-divider"></div>
            <div class="dropdown-source-group">
              <a href="tools.html" class="dropdown-source-name">Tool Pages</a>
              <div class="dropdown-source-links">
                <a href="tools.html#build-planners" class="dropdown-source-link">Build Planners</a>
                <a href="tools.html#interactive-maps" class="dropdown-source-link">Maps &amp; Trackers</a>
                <a href="tools.html#specialist-utilities" class="dropdown-source-link">Specialist Utilities</a>
                <a href="resources.html#tools" class="dropdown-source-link">All Tool Sources</a>
              </div>
            </div>
            <div class="dropdown-source-group">
              <a href="resources.html#tools" class="dropdown-source-name">Specialist Sources</a>
              <div class="dropdown-source-links">
                <a href="https://helltides.com/" class="dropdown-source-link" target="_blank" rel="noopener">Helltides.com</a>
                <a href="https://diablo4.life/trackers/helltide" class="dropdown-source-link" target="_blank" rel="noopener">Diablo4.life</a>
                <a href="https://d4planner.io/" class="dropdown-source-link" target="_blank" rel="noopener">D4Planner.io</a>
                <a href="https://stashfromhell.com/" class="dropdown-source-link" target="_blank" rel="noopener">Stash from Hell</a>
                <a href="https://diablo.trade/" class="dropdown-source-link" target="_blank" rel="noopener">Diablo.trade</a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <a href="season.html" class="nav-link">Season</a>
        </li>
        <li class="nav-item">
          <a href="news.html" class="nav-link">News</a>
        </li>
        <li class="nav-item">
          <a href="creators.html" class="nav-link">Creators</a>
        </li>
        <li class="nav-item">
          <a href="videos.html" class="nav-link">Videos</a>
        </li>
        <li class="nav-item">
          <a href="communities.html" class="nav-link">Community</a>
        </li>
        <li class="nav-item">
          <a href="resources.html" class="nav-link">Resources</a>
        </li>
      </ul>
      <div class="navbar-right">
        <button class="nav-search-trigger" type="button" data-open-site-search aria-label="Open quick search">
          <span class="nav-search-icon">⌕</span>
          <span class="nav-search-text">Quick Find</span>
          <span class="nav-search-shortcut">/</span>
        </button>
        <div class="season-badge">
          <span class="season-dot"></span>
          Season 12 LIVE
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
  `;

  const MOBILE_HTML = `
    <div class="mobile-menu-header">
      <a href="index.html" class="mobile-menu-logo">
        <span class="brand-mark-wrap">
          <img src="assets/brand/d4rh-mark.svg" alt="" class="brand-mark" />
        </span>
        <span class="brand-name">D4 Resource Hub</span>
      </a>
      <button class="mobile-close" id="mobile-close" aria-label="Close menu">✕</button>
    </div>
    <button class="mobile-search-trigger" type="button" data-open-site-search onclick="closeMobileMenu()">
      Quick Find anything on the hub
    </button>
    <ul class="mobile-nav-links">
      <li>
        <a href="index.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Home</a>
      </li>
      <li>
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)" data-target="mobile-builds">
          Builds <span class="nav-arrow">▾</span>
        </div>
        <div class="mobile-dropdown" id="mobile-builds">
          <a href="resources.html" class="mobile-dropdown-item" onclick="closeMobileMenu()">All Build Resources</a>
          <div class="mobile-source-group">
            <a href="resources.html" class="mobile-source-name" onclick="closeMobileMenu()">Build Pages</a>
            <div class="mobile-source-links">
              <a href="endgame-builds.html" class="mobile-source-link" onclick="closeMobileMenu()">Endgame</a>
              <a href="leveling-builds.html" class="mobile-source-link" onclick="closeMobileMenu()">Leveling</a>
              <a href="speed-farming.html" class="mobile-source-link" onclick="closeMobileMenu()">Speed Farming</a>
              <a href="boss-builds.html" class="mobile-source-link" onclick="closeMobileMenu()">Bossing</a>
            </div>
          </div>
          <div class="mobile-source-group">
            <a href="resources.html" class="mobile-source-name" onclick="closeMobileMenu()">Source Sites</a>
            <div class="mobile-source-links">
              <a href="https://maxroll.gg/d4" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="tierlists.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Tier Lists</a>
      </li>
      <li>
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)" data-target="mobile-classes">
          Classes <span class="nav-arrow">▾</span>
        </div>
        <div class="mobile-dropdown" id="mobile-classes">
          <a href="classes.html" class="mobile-dropdown-item" onclick="closeMobileMenu()">Class Overview</a>
          <span class="mobile-source-name">Class Pages</span>
          <div class="mobile-class-group">
            <a href="classes.html#barbarian" class="mobile-class-name" onclick="closeMobileMenu()">⚔️ Barbarian</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/barbarian/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/barbarian/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/barbarian" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#druid" class="mobile-class-name" onclick="closeMobileMenu()">🐺 Druid</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/druid/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/druid/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/druid" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#necromancer" class="mobile-class-name" onclick="closeMobileMenu()">💀 Necromancer</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/necromancer/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/necromancer/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/necromancer" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#paladin" class="mobile-class-name" onclick="closeMobileMenu()">⚔️ Paladin</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/paladin/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/paladin/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/paladin" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#rogue" class="mobile-class-name" onclick="closeMobileMenu()">🗡️ Rogue</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/rogue/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/rogue/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/rogue" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#sorcerer" class="mobile-class-name" onclick="closeMobileMenu()">🔥 Sorcerer</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/sorcerer/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/sorcerer/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/sorcerer" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <div class="mobile-class-group">
            <a href="classes.html#spiritborn" class="mobile-class-name" onclick="closeMobileMenu()">🦅 Spiritborn</a>
            <div class="mobile-class-links">
              <a href="https://maxroll.gg/d4" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/spiritborn/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/spiritborn/builds/" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds/spiritborn" class="mobile-class-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <a href="classes.html" class="mobile-dropdown-item" style="color: var(--gold-light); font-weight: 700;" onclick="closeMobileMenu()">⚔️ Class Overview</a>
          <span class="mobile-dropdown-item disabled">Warlock — Coming in Lord of Hatred</span>
        </div>
      </li>
      <li>
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)" data-target="mobile-guides">
          Guides <span class="nav-arrow">▾</span>
        </div>
        <div class="mobile-dropdown" id="mobile-guides">
          <a href="dungeons.html" class="mobile-dropdown-item" onclick="closeMobileMenu()">Guide Overview</a>
          <div class="mobile-source-group">
            <span class="mobile-source-name">Guide Pages</span>
            <div class="mobile-source-links">
              <a href="dungeons.html" class="mobile-source-link" onclick="closeMobileMenu()">Dungeons &amp; Activities</a>
              <a href="timeline.html" class="mobile-source-link" onclick="closeMobileMenu()">Season Timeline</a>
              <a href="crafting.html" class="mobile-source-link" onclick="closeMobileMenu()">Crafting &amp; Gear Guide</a>
              <a href="creators.html" class="mobile-source-link" onclick="closeMobileMenu()">Creator Directory</a>
            </div>
          </div>
          <div class="mobile-source-group">
            <a href="resources.html" class="mobile-source-name" onclick="closeMobileMenu()">Source Sites</a>
            <div class="mobile-source-links">
              <a href="https://maxroll.gg/d4" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Maxroll</a>
              <a href="https://www.icy-veins.com/d4/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Icy Veins</a>
              <a href="https://d4builds.gg/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Builds</a>
              <a href="https://mobalytics.gg/diablo-4/builds" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Mobalytics</a>
            </div>
          </div>
          <a href="https://www.icy-veins.com/d4/guides/capstone-dungeons-guide/" class="mobile-dropdown-item" target="_blank" rel="noopener">Capstone Dungeons</a>
          <a href="https://www.icy-veins.com/d4/guides/the-butchers-lair/" class="mobile-dropdown-item" target="_blank" rel="noopener">Butcher's Lair</a>
          <a href="https://www.icy-veins.com/d4/guides/vessel-of-hatred-overview/" class="mobile-dropdown-item" target="_blank" rel="noopener">Vessel of Hatred</a>
          <a href="https://news.blizzard.com/en-us/article/24140808/diablo-iv-patch-notes" class="mobile-dropdown-item" target="_blank" rel="noopener">Official Patch Notes</a>
        </div>
      </li>
      <li>
        <div class="mobile-nav-link" onclick="toggleMobileDropdown(this)" data-target="mobile-tools">
          Tools <span class="nav-arrow">▾</span>
        </div>
        <div class="mobile-dropdown" id="mobile-tools">
          <a href="tools.html" class="mobile-dropdown-item" onclick="closeMobileMenu()">Tool Overview</a>
          <div class="mobile-source-group">
            <span class="mobile-source-name">Tool Pages</span>
            <div class="mobile-source-links">
              <a href="tools.html#build-planners" class="mobile-source-link" onclick="closeMobileMenu()">Build Planners</a>
              <a href="tools.html#interactive-maps" class="mobile-source-link" onclick="closeMobileMenu()">Maps &amp; Trackers</a>
              <a href="tools.html#specialist-utilities" class="mobile-source-link" onclick="closeMobileMenu()">Specialist Utilities</a>
              <a href="resources.html#tools" class="mobile-source-link" onclick="closeMobileMenu()">All Tool Sources</a>
            </div>
          </div>
          <div class="mobile-source-group">
            <a href="resources.html#tools" class="mobile-source-name" onclick="closeMobileMenu()">Specialist Sources</a>
            <div class="mobile-source-links">
              <a href="https://helltides.com/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Helltides.com</a>
              <a href="https://diablo4.life/trackers/helltide" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Diablo4.life</a>
              <a href="https://d4planner.io/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">D4Planner.io</a>
              <a href="https://stashfromhell.com/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Stash from Hell</a>
              <a href="https://diablo.trade/" class="mobile-source-link" target="_blank" rel="noopener" onclick="closeMobileMenu()">Diablo.trade</a>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a href="season.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Season Info</a>
      </li>
      <li>
        <a href="news.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">News</a>
      </li>
      <li>
        <a href="creators.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Creators</a>
      </li>
      <li>
        <a href="videos.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Videos</a>
      </li>
      <li>
        <a href="communities.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Community</a>
      </li>
      <li>
        <a href="resources.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">All Resources</a>
      </li>
    </ul>
    <div class="mobile-season-badge">
      <span class="season-dot"></span>
      Season 12: Season of Slaughter — LIVE
    </div>
  `;

  const FOOTER_HTML = `
    <div class="container">
      <div class="footer-content footer-content-rich">
        <div class="footer-top-row">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="brand-mark-wrap footer-brand-mark">
                <img src="assets/brand/d4rh-mark.svg" alt="" class="brand-mark" />
              </span>
              <span class="brand-name">D4 Resource Hub</span>
            </div>
            <p class="footer-tagline">A cleaner Diablo 4 hub for builds, tier lists, season updates, creators, tools, and fast decision-making.</p>
            <div class="footer-status-row">
              <span class="footer-status-pill">Season 12 Live</span>
              <span class="footer-status-pill">Newsroom Active</span>
              <span class="footer-status-pill">20 Creator Picks</span>
            </div>
          </div>

          <div class="footer-feature-card">
            <span class="footer-feature-kicker">Need A Fast Answer?</span>
            <h3>Start with class choice, then move into builds and the newsroom.</h3>
            <p>
              The shortest path through the site is class comparison first,
              builds second, and current news third when the meta feels unclear.
            </p>
            <div class="footer-feature-links">
              <a href="classes.html">Compare Classes</a>
              <a href="endgame-builds.html">Open Builds</a>
              <a href="news.html">Read Newsroom</a>
            </div>
          </div>
        </div>

        <div class="footer-grid">
          <div class="footer-column">
            <h3>Start Here</h3>
            <a href="index.html">Home</a>
            <a href="new-player.html">New Player Guide</a>
            <a href="classes.html">Class Comparison</a>
            <a href="resources.html">All Resources</a>
          </div>

          <div class="footer-column">
            <h3>Build Paths</h3>
            <a href="endgame-builds.html">Endgame Builds</a>
            <a href="leveling-builds.html">Leveling Builds</a>
            <a href="speed-farming.html">Speed Farming</a>
            <a href="boss-builds.html">Boss Builds</a>
          </div>

          <div class="footer-column">
            <h3>Explore</h3>
            <a href="news.html">Newsroom</a>
            <a href="videos.html">Videos</a>
            <a href="creators.html">Creators</a>
            <a href="communities.html">Community</a>
          </div>

          <div class="footer-column">
            <h3>Top Sources</h3>
            <a href="https://maxroll.gg/d4" target="_blank" rel="noopener">Maxroll</a>
            <a href="https://www.icy-veins.com/d4/" target="_blank" rel="noopener">Icy Veins</a>
            <a href="https://d4builds.gg/" target="_blank" rel="noopener">D4Builds</a>
            <a href="https://mobalytics.gg/diablo-4/builds" target="_blank" rel="noopener">Mobalytics</a>
          </div>
        </div>

        <p class="footer-disclaimer">Not affiliated with Blizzard Entertainment. Diablo IV and all related names, images, and marks belong to Blizzard Entertainment, Inc. This is an independently curated fan resource.</p>
        <p class="footer-updated">Reviewed sitewide: ${LAST_REVIEWED}</p>
      </div>
    </div>
  `;

  function openMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.add("open");
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburger = document.getElementById("hamburger");
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function toggleMobileDropdown(trigger) {
    const targetId = trigger.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (!target) return;

    const isOpen = target.classList.contains("open");
    document.querySelectorAll(".mobile-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
    document
      .querySelectorAll(".mobile-nav-link[data-target]")
      .forEach((link) => {
        const arrow = link.querySelector(".nav-arrow");
        if (arrow) arrow.style.transform = "";
      });

    if (!isOpen) {
      target.classList.add("open");
      const arrow = trigger.querySelector(".nav-arrow");
      if (arrow) arrow.style.transform = "rotate(180deg)";
    }
  }

  function bindDesktopDropdowns() {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const dropdown = item.querySelector(".nav-dropdown");
        if (!dropdown) return;
        const topLink = item.querySelector(":scope > .nav-link");
        if (!topLink) return;
        if (event.target.closest(".nav-dropdown")) return;
        if (event.target.closest(".nav-link") !== topLink) return;
        event.preventDefault();

        const isOpen = dropdown.classList.contains("open");
        document.querySelectorAll(".nav-item .nav-dropdown").forEach((menu) => {
          menu.classList.remove("open");
        });

        if (!isOpen) {
          dropdown.classList.add("open");
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nav-item")) {
        document.querySelectorAll(".nav-item .nav-dropdown").forEach((menu) => {
          menu.classList.remove("open");
        });
      }
    });
  }

  function normalizePathname() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path.toLowerCase();
  }

  function getPrimaryNavHref(pathname) {
    if (pathname === "index.html" || pathname === "") return "index.html";
    if (pathname.startsWith("news")) return "news.html";
    if (
      [
        "resources.html",
        "endgame-builds.html",
        "leveling-builds.html",
        "speed-farming.html",
        "boss-builds.html",
      ].includes(pathname)
    ) {
      return "resources.html";
    }
    if (pathname === "tierlists.html") return "tierlists.html";
    if (pathname === "classes.html") return "classes.html";
    if (
      ["dungeons.html", "timeline.html", "crafting.html"].includes(pathname)
    ) {
      return "dungeons.html";
    }
    if (pathname === "tools.html") return "tools.html";
    if (pathname === "season.html") return "season.html";
    if (pathname === "creators.html") return "creators.html";
    if (pathname === "videos.html") return "videos.html";
    if (pathname === "communities.html") return "communities.html";
    return pathname;
  }

  function setActiveNavState() {
    const pathname = normalizePathname();
    const activeHref = getPrimaryNavHref(pathname);

    document.querySelectorAll(".nav-link").forEach((link) => {
      const isActive = link.getAttribute("href") === activeHref;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    document.querySelectorAll(".mobile-nav-link.no-arrow").forEach((link) => {
      const isActive = link.getAttribute("href") === activeHref;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const mobileParentMap = new Map([
      ["resources.html", "mobile-builds"],
      ["classes.html", "mobile-classes"],
      ["dungeons.html", "mobile-guides"],
    ]);

    document
      .querySelectorAll(".mobile-nav-link[data-target]")
      .forEach((link) => {
        const targetId = link.getAttribute("data-target");
        const isActive = mobileParentMap.get(activeHref) === targetId;
        link.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
  }

  function installSkipLink() {
    if (document.querySelector(".skip-link")) return;

    const target =
      document.querySelector("main") ||
      document.querySelector("section") ||
      document.querySelector("header");

    if (!target) return;

    if (!target.id) {
      target.id = "main-content";
    }
    target.setAttribute("tabindex", "-1");

    const link = document.createElement("a");
    link.className = "skip-link";
    link.href = `#${target.id}`;
    link.textContent = "Skip to content";

    document.body.insertBefore(link, document.body.firstChild);
  }

  function installFooter() {
    let footer = document.querySelector(".footer");
    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "footer";
      const firstScript = document.body.querySelector("script");
      if (firstScript) {
        document.body.insertBefore(footer, firstScript);
      } else {
        document.body.appendChild(footer);
      }
    }

    footer.innerHTML = FOOTER_HTML;
  }

  function scoreSearchResult(entry, query) {
    const haystack =
      `${entry.title} ${entry.category} ${entry.summary} ${entry.keywords}`.toLowerCase();
    let score = 0;

    if (entry.title.toLowerCase().includes(query)) score += 8;
    if (entry.category.toLowerCase().includes(query)) score += 4;
    if (haystack.includes(query)) score += 2;
    query
      .split(/\s+/)
      .filter(Boolean)
      .forEach((part) => {
        if (entry.title.toLowerCase().includes(part)) score += 4;
        if (haystack.includes(part)) score += 1;
      });

    return score;
  }

  function installSearchOverlay() {
    if (document.querySelector(".site-search-overlay")) return;

    const overlay = document.createElement("div");
    overlay.className = "site-search-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="site-search-panel" role="dialog" aria-modal="true" aria-label="Quick site search">
        <div class="site-search-head">
          <div>
            <div class="site-search-kicker">Quick Search</div>
            <h2>Find the right page faster</h2>
          </div>
          <button type="button" class="site-search-close" aria-label="Close quick search">✕</button>
        </div>
        <div class="site-search-input-wrap">
          <input type="search" class="site-search-input" placeholder="Search builds, guides, news, creators, tools..." autocomplete="off">
        </div>
        <div class="site-search-results" aria-live="polite"></div>
      </div>
    `;

    document.body.appendChild(overlay);

    const input = overlay.querySelector(".site-search-input");
    const results = overlay.querySelector(".site-search-results");
    const closeButton = overlay.querySelector(".site-search-close");

    const render = (query = "") => {
      const normalized = query.trim().toLowerCase();
      const matches = normalized
        ? SEARCH_INDEX.map((entry) => ({
            entry,
            score: scoreSearchResult(entry, normalized),
          }))
            .filter((item) => item.score > 0)
            .sort(
              (a, b) =>
                b.score - a.score || a.entry.title.localeCompare(b.entry.title),
            )
            .slice(0, 8)
            .map((item) => item.entry)
        : SEARCH_INDEX.slice(0, 8);

      results.innerHTML = matches.length
        ? matches
            .map(
              (entry) => `
            <a href="${entry.href}" class="site-search-result">
              <span class="site-search-result-category">${entry.category}</span>
              <strong>${entry.title}</strong>
              <span>${entry.summary}</span>
            </a>
          `,
            )
            .join("")
        : '<div class="site-search-empty">No matching pages yet. Try a class, page name, or feature like “tier list” or “creator”.</div>';
    };

    const open = () => {
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("search-open");
      render(input.value);
      window.setTimeout(() => input.focus(), 20);
    };

    const close = () => {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("search-open");
    };

    document.querySelectorAll("[data-open-site-search]").forEach((button) => {
      button.addEventListener("click", open);
    });

    input.addEventListener("input", () => render(input.value));
    closeButton.addEventListener("click", close);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });

    document.addEventListener("keydown", (event) => {
      const tagName = document.activeElement?.tagName || "";
      const isTypingContext =
        /INPUT|TEXTAREA|SELECT/.test(tagName) ||
        document.activeElement?.isContentEditable;

      if (
        (event.key === "/" && !isTypingContext) ||
        ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k")
      ) {
        event.preventDefault();
        open();
      }

      if (event.key === "Escape") {
        close();
      }
    });

    render("");
  }

  function bindGlobalKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll(".nav-item .nav-dropdown").forEach((menu) => {
        menu.classList.remove("open");
      });
      closeMobileMenu();
    });
  }

  function bindMobileControls() {
    const hamburger = document.getElementById("hamburger");
    const mobileClose = document.getElementById("mobile-close");

    if (hamburger) {
      hamburger.addEventListener("click", () => {
        const mobileMenu = document.getElementById("mobile-menu");
        if (!mobileMenu) return;
        if (mobileMenu.classList.contains("open")) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener("click", closeMobileMenu);
    }
  }

  function getJumpSections() {
    return Array.from(document.querySelectorAll("section[id]")).filter(
      (section) => {
        if (section.id === "top") return false;
        return true;
      },
    );
  }

  function getSectionLabel(section) {
    const explicitLabel = section.getAttribute("data-jump-label");
    if (explicitLabel) return explicitLabel;

    const heading = section.querySelector("h1, h2, h3");
    if (heading) {
      return heading.textContent.replace(/\s+/g, " ").trim();
    }

    return section.id
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function installPageJumpNav() {
    const sections = getJumpSections();
    if (sections.length < 3 || document.querySelector(".page-jump-nav")) return;

    const pageJump = document.createElement("nav");
    pageJump.className = "page-jump-nav";
    pageJump.setAttribute("aria-label", "Page sections");

    pageJump.innerHTML = `
      <div class="container">
        <div class="page-jump-inner">
          <span class="page-jump-label">Jump to</span>
          <ul class="page-jump-list">
            ${sections
              .map(
                (section) => `
              <li class="page-jump-item" data-section-id="${section.id}">
                <a class="page-jump-link" href="#${section.id}">${getSectionLabel(section)}</a>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </div>
    `;

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && mobileMenu.parentElement) {
      mobileMenu.insertAdjacentElement("afterend", pageJump);
    } else {
      document.body.insertBefore(pageJump, document.body.firstChild);
    }

    const linksById = new Map();
    pageJump.querySelectorAll(".page-jump-link").forEach((link) => {
      const targetId = link.getAttribute("href").slice(1);
      linksById.set(targetId, link);
    });

    const setActive = (id) => {
      linksById.forEach((link, targetId) => {
        const item = link.closest(".page-jump-item");
        const isActive = targetId === id;
        link.classList.toggle("active", isActive);
        if (item) item.classList.toggle("active", isActive);
      });
    };

    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible.length) {
            setActive(visible[0].target.id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: [0.15, 0.25, 0.4],
        },
      );

      sections.forEach((section) => observer.observe(section));
    } else {
      const updateActiveFromScroll = () => {
        const offset = window.scrollY + 180;
        let activeSection = sections[0];

        sections.forEach((section) => {
          if (section.offsetTop <= offset) {
            activeSection = section;
          }
        });

        if (activeSection) {
          setActive(activeSection.id);
        }
      };

      window.addEventListener("scroll", updateActiveFromScroll, {
        passive: true,
      });
      updateActiveFromScroll();
    }

    setActive(sections[0].id);
  }

  function installBackToTop() {
    if (document.getElementById("back-to-top")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.id = "back-to-top";
    button.className = "back-to-top";
    button.setAttribute("aria-label", "Back to top");
    button.textContent = "↑";
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.body.appendChild(button);

    const updateVisibility = () => {
      button.classList.toggle("visible", window.scrollY > 600);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
  }

  function installToolbar() {
    const nav = document.getElementById("main-nav");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!nav || !mobileMenu) return;

    installSkipLink();

    const navInner = nav.querySelector(".navbar-inner");
    if (navInner) {
      navInner.innerHTML = NAV_HTML;
    } else {
      nav.innerHTML = `<div class="navbar-inner">${NAV_HTML}</div>`;
    }

    mobileMenu.innerHTML = MOBILE_HTML;

    window.openMobileMenu = openMobileMenu;
    window.closeMobileMenu = closeMobileMenu;
    window.toggleMobileDropdown = toggleMobileDropdown;

    bindDesktopDropdowns();
    bindMobileControls();
    bindGlobalKeyboardShortcuts();
    setActiveNavState();
    installPageJumpNav();
    installBackToTop();
    installFooter();
    installSearchOverlay();
  }

  installToolbar();
})();
