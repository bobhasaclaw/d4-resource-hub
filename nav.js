(() => {
  const NAV_HTML = `
      <a href="index.html" class="navbar-logo">⚔️ D4 Resource Hub</a>
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
          <a href="tools.html" class="nav-link">Tools</a>
        </li>
        <li class="nav-item">
          <a href="season.html" class="nav-link">Season Info</a>
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
          <a href="resources.html" class="nav-link">All Resources</a>
        </li>
      </ul>
      <div class="navbar-right">
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
      <a href="index.html" class="mobile-menu-logo">⚔️ D4 Resource Hub</a>
      <button class="mobile-close" id="mobile-close" aria-label="Close menu">✕</button>
    </div>
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
        <a href="tools.html" class="mobile-nav-link no-arrow" onclick="closeMobileMenu()">Tools</a>
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

  function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    if (!mobileMenu || !hamburger) return;
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMobileDropdown(trigger) {
    const targetId = trigger.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (!target) return;

    const isOpen = target.classList.contains('open');
    document.querySelectorAll('.mobile-dropdown').forEach((dropdown) => {
      dropdown.classList.remove('open');
    });
    document.querySelectorAll('.mobile-nav-link[data-target]').forEach((link) => {
      const arrow = link.querySelector('.nav-arrow');
      if (arrow) arrow.style.transform = '';
    });

    if (!isOpen) {
      target.classList.add('open');
      const arrow = trigger.querySelector('.nav-arrow');
      if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
  }

  function bindDesktopDropdowns() {
    document.querySelectorAll('.nav-item').forEach((item) => {
      item.addEventListener('click', (event) => {
        const dropdown = item.querySelector('.nav-dropdown');
        if (!dropdown) return;
        const topLink = item.querySelector(':scope > .nav-link');
        if (!topLink) return;
        if (event.target.closest('.nav-dropdown')) return;
        if (event.target.closest('.nav-link') !== topLink) return;
        event.preventDefault();

        const isOpen = dropdown.classList.contains('open');
        document.querySelectorAll('.nav-item .nav-dropdown').forEach((menu) => {
          menu.classList.remove('open');
        });

        if (!isOpen) {
          dropdown.classList.add('open');
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item .nav-dropdown').forEach((menu) => {
          menu.classList.remove('open');
        });
      }
    });
  }

  function bindMobileControls() {
    const hamburger = document.getElementById('hamburger');
    const mobileClose = document.getElementById('mobile-close');

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) return;
        if (mobileMenu.classList.contains('open')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileMenu);
    }
  }

  function getJumpSections() {
    return Array.from(document.querySelectorAll('section[id]')).filter((section) => {
      if (section.id === 'top') return false;
      return true;
    });
  }

  function getSectionLabel(section) {
    const explicitLabel = section.getAttribute('data-jump-label');
    if (explicitLabel) return explicitLabel;

    const heading = section.querySelector('h1, h2, h3');
    if (heading) {
      return heading.textContent.replace(/\s+/g, ' ').trim();
    }

    return section.id
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function installPageJumpNav() {
    const sections = getJumpSections();
    if (sections.length < 3 || document.querySelector('.page-jump-nav')) return;

    const pageJump = document.createElement('nav');
    pageJump.className = 'page-jump-nav';
    pageJump.setAttribute('aria-label', 'Page sections');

    pageJump.innerHTML = `
      <div class="container">
        <div class="page-jump-inner">
          <span class="page-jump-label">Jump to</span>
          <ul class="page-jump-list">
            ${sections.map((section) => `
              <li class="page-jump-item" data-section-id="${section.id}">
                <a class="page-jump-link" href="#${section.id}">${getSectionLabel(section)}</a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.parentElement) {
      mobileMenu.insertAdjacentElement('afterend', pageJump);
    } else {
      document.body.insertBefore(pageJump, document.body.firstChild);
    }

    const linksById = new Map();
    pageJump.querySelectorAll('.page-jump-link').forEach((link) => {
      const targetId = link.getAttribute('href').slice(1);
      linksById.set(targetId, link);
    });

    const setActive = (id) => {
      linksById.forEach((link, targetId) => {
        const item = link.closest('.page-jump-item');
        const isActive = targetId === id;
        link.classList.toggle('active', isActive);
        if (item) item.classList.toggle('active', isActive);
      });
    };

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      }, {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.25, 0.4],
      });

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

      window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
      updateActiveFromScroll();
    }

    setActive(sections[0].id);
  }

  function installBackToTop() {
    if (document.getElementById('back-to-top')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'back-to-top';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = '↑';
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    const updateVisibility = () => {
      button.classList.toggle('visible', window.scrollY > 600);
    };

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
  }

  function installToolbar() {
    const nav = document.getElementById('main-nav');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!nav || !mobileMenu) return;

    const navInner = nav.querySelector('.navbar-inner');
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
    installPageJumpNav();
    installBackToTop();
  }

  installToolbar();
})();
