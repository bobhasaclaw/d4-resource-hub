(() => {
  const sections = Array.from(document.querySelectorAll('.resource-category'));
  const searchInput = document.getElementById('resource-search');
  const filterButtons = Array.from(document.querySelectorAll('.resource-filter'));
  const resultsLabel = document.getElementById('resource-results');

  if (!sections.length || !searchInput || !filterButtons.length) return;

  const jumpItems = Array.from(document.querySelectorAll('.page-jump-item[data-section-id]'));

  let activeFilter = 'all';

  function normalize(value) {
    return value.trim().toLowerCase();
  }

  function updateJumpNav() {
    if (!jumpItems.length) return;

    jumpItems.forEach((item) => {
      const section = document.getElementById(item.getAttribute('data-section-id'));
      item.hidden = !!section && section.hidden;
    });
  }

  function setActiveButton(filter) {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  function applyFilters() {
    const query = normalize(searchInput.value);
    let visibleSections = 0;
    let visibleRows = 0;

    sections.forEach((section) => {
      const isSectionMatch = activeFilter === 'all' || section.id === activeFilter;
      const rows = Array.from(section.querySelectorAll('tbody tr'));
      let matchedRows = 0;

      rows.forEach((row) => {
        const rowMatch = !query || normalize(row.textContent).includes(query);
        row.classList.toggle('is-hidden', !rowMatch || !isSectionMatch);
        if (rowMatch && isSectionMatch) matchedRows += 1;
      });

      const sectionVisible = isSectionMatch && (query === '' || matchedRows > 0);
      section.classList.toggle('is-hidden', !sectionVisible);
      section.hidden = !sectionVisible;

      if (sectionVisible) {
        visibleSections += 1;
        visibleRows += rows.filter((row) => !row.classList.contains('is-hidden')).length;
      }
    });

    updateJumpNav();

    if (resultsLabel) {
      if (visibleRows === 0) {
        resultsLabel.textContent = 'No matching resources found. Clear the search or choose All to see every section.';
      } else if (activeFilter === 'all' && query === '') {
        resultsLabel.textContent = 'Showing all sections.';
      } else {
        const sectionWord = visibleSections === 1 ? 'section' : 'sections';
        const rowWord = visibleRows === 1 ? 'result' : 'results';
        resultsLabel.textContent = `Showing ${visibleSections} ${sectionWord} and ${visibleRows} ${rowWord}.`;
      }
    }
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      setActiveButton(activeFilter);
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      searchInput.value = '';
      applyFilters();
      searchInput.blur();
    }
  });

  setActiveButton(activeFilter);
  applyFilters();
})();
