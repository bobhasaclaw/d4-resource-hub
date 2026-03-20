(() => {
  const CLASS_FINDER_DATA = {
    new: {
      label: 'Best for new players',
      className: 'Spiritborn',
      emoji: '🦅',
      tier: 'S Tier',
      style: 'Easy start',
      summary: 'Spiritborn is the cleanest first pick if you want strong power, fast movement, and a forgiving path into Season 12.',
      reasons: [
        'Fast clearing and simple momentum-based gameplay',
        'Excellent for leveling, farming, and general progression',
        'Pairs well with the strongest early season build recommendations',
      ],
      linkLabel: 'Open Spiritborn card',
      linkHref: 'classes.html#spiritborn',
    },
    solo: {
      label: 'Best for solo play',
      className: 'Necromancer',
      emoji: '💀',
      tier: 'A Tier',
      style: 'Safe solo',
      summary: 'Necromancer gives you the safest solo path with minions, corpse synergy, and reliable damage from multiple angles.',
      reasons: [
        'Very forgiving when you are learning the game',
        'Minions and ranged damage make solo content easier',
        'Strong mix of safety, burst, and consistency',
      ],
      linkLabel: 'Open Necromancer card',
      linkHref: 'classes.html#necromancer',
    },
    group: {
      label: 'Best for groups',
      className: 'Paladin',
      emoji: '⚔️',
      tier: 'S Tier',
      style: 'Party carry',
      summary: 'Paladin is the strongest all-round party pick if you want big buffs, high burst, and a build that helps every group session feel smoother.',
      reasons: [
        'Top-end boss damage and strong party utility',
        'Fits both damage and support-minded group play',
        'The strongest general-purpose recommendation on the page',
      ],
      linkLabel: 'Open Paladin card',
      linkHref: 'classes.html#paladin',
    },
    speed: {
      label: 'Best for speed farming',
      className: 'Rogue',
      emoji: '🗡️',
      tier: 'A Tier',
      style: 'Fast clears',
      summary: 'Rogue is the fastest-feeling farming class if your priority is movement, clean resets, and deleting small packs quickly.',
      reasons: [
        'Exceptional mobility and quick rotations',
        'Great for short sessions and repeat farm routes',
        'Best choice when efficiency matters more than tankiness',
      ],
      linkLabel: 'Open Rogue card',
      linkHref: 'classes.html#rogue',
    },
    boss: {
      label: 'Best for bossing',
      className: 'Paladin',
      emoji: '⚔️',
      tier: 'S Tier',
      style: 'Single-target',
      summary: 'Paladin and Barbarian both hit hard into bosses, but Paladin is the cleanest recommendation if you want the most reliable single-target setup.',
      reasons: [
        'Huge burst potential for world bosses and lair bosses',
        'Strong survivability while staying on target',
        'Easy to swap into boss-focused gear paths later',
      ],
      linkLabel: 'Open Boss focus',
      linkHref: 'boss-builds.html',
    },
    allround: {
      label: 'Best all-rounder',
      className: 'Paladin',
      emoji: '⚔️',
      tier: 'S Tier',
      style: 'Most complete',
      summary: 'Paladin is the best all-rounder if you want one class that handles leveling, farming, group content, and bossing without much compromise.',
      reasons: [
        'Strong across every major activity type',
        'Works well as a first main character',
        'Has the broadest “just play and win” profile',
      ],
      linkLabel: 'Open Class Overview',
      linkHref: 'classes.html',
    },
  };

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise((resolve, reject) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'true');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (success) {
          resolve();
        } else {
          reject(new Error('Copy failed'));
        }
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function setButtonState(button, feedback, state, message) {
    if (button) {
      button.classList.toggle('is-success', state === 'success');
      button.classList.toggle('is-error', state === 'error');
    }

    if (feedback) {
      feedback.textContent = message || '';
      feedback.classList.toggle('is-success', state === 'success');
      feedback.classList.toggle('is-error', state === 'error');
    }
  }

  function flashButton(button, feedback, message, state = 'success') {
    setButtonState(button, feedback, state, message);
    window.setTimeout(() => setButtonState(button, feedback, null, ''), 1800);
  }

  function initPageActions() {
    const copyButtons = Array.from(document.querySelectorAll('[data-copy-page-link]'));
    const shareButtons = Array.from(document.querySelectorAll('[data-share-page]'));
    const summaryButtons = Array.from(document.querySelectorAll('[data-copy-summary]'));

    copyButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const feedback = button.closest('.page-actions-bar')?.querySelector('.page-action-feedback');
        try {
          await copyToClipboard(window.location.href);
          flashButton(button, feedback, 'Page link copied');
        } catch (error) {
          flashButton(button, feedback, 'Copy failed', 'error');
        }
      });
    });

    shareButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const feedback = button.closest('.page-actions-bar')?.querySelector('.page-action-feedback');
        const shareData = {
          title: document.title,
          text: button.dataset.shareText || document.querySelector('meta[name="description"]')?.content || document.title,
          url: window.location.href,
        };

        try {
          if (navigator.share) {
            await navigator.share(shareData);
            flashButton(button, feedback, 'Share opened');
          } else {
            await copyToClipboard(window.location.href);
            flashButton(button, feedback, 'Link copied for sharing');
          }
        } catch (error) {
          flashButton(button, feedback, 'Share unavailable', 'error');
        }
      });
    });

    summaryButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const feedback = button.closest('.page-actions-bar')?.querySelector('.page-action-feedback');
        const text = button.dataset.copySummary || document.title;
        try {
          await copyToClipboard(text);
          flashButton(button, feedback, 'Summary copied');
        } catch (error) {
          flashButton(button, feedback, 'Copy failed', 'error');
        }
      });
    });
  }

  function initClassFinder() {
    const root = document.querySelector('[data-class-finder]');
    if (!root) return;

    const buttons = Array.from(root.querySelectorAll('[data-finder-option]'));
    const title = root.querySelector('[data-finder-title]');
    const meta = root.querySelector('[data-finder-meta]');
    const summary = root.querySelector('[data-finder-summary]');
    const reasons = root.querySelector('[data-finder-reasons]');
    const copyButton = root.querySelector('[data-copy-finder-summary]');
    const linkButton = root.querySelector('[data-finder-link]');
    const status = root.querySelector('[data-finder-status]');

    const render = (key) => {
      const data = CLASS_FINDER_DATA[key] || CLASS_FINDER_DATA.allround;
      buttons.forEach((button) => {
        const active = button.dataset.finderOption === key;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });

      if (title) title.textContent = `${data.emoji} ${data.className}`;
      if (meta) {
        meta.innerHTML = `
          <span class="finder-pill">${data.label}</span>
          <span class="finder-pill">${data.tier}</span>
          <span class="finder-pill">${data.style}</span>
        `;
      }
      if (summary) summary.textContent = data.summary;
      if (reasons) {
        reasons.innerHTML = data.reasons.map((item) => `<li>${item}</li>`).join('');
      }
      if (copyButton) {
        copyButton.dataset.copySummary = `${data.label}: ${data.className} - ${data.summary}`;
      }
      if (linkButton) {
        linkButton.href = data.linkHref;
        linkButton.textContent = data.linkLabel;
      }
      if (status) {
        status.textContent = `Updated recommendation: ${data.className}`;
      }
    };

    if (copyButton) {
      copyButton.addEventListener('click', async () => {
        const currentTitle = title?.textContent || 'Class recommendation';
        const currentSummary = summary?.textContent || '';
        try {
          await copyToClipboard(`${currentTitle} - ${currentSummary}`);
          flashButton(copyButton, status, 'Recommendation copied');
        } catch (error) {
          flashButton(copyButton, status, 'Copy failed', 'error');
        }
      });
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => render(button.dataset.finderOption || 'allround'));
    });

    render(root.dataset.defaultFinder || 'allround');
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPageActions();
    initClassFinder();
  });
})();
