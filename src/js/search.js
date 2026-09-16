/**
 * Homepage Destinations Search and Render Logic
 */
document.addEventListener('DOMContentLoaded', async () => {
  const gridContainer = document.getElementById('destinations-grid');
  const searchInput = document.getElementById('search-input');

  if (!gridContainer) return;

  let destinations = [];

  try {
    const response = await fetch('./data/destinations.json');
    if (response.ok) {
      destinations = await response.json();
      renderDestinations(destinations);
    }
  } catch (error) {
    console.error('Failed to load destinations data:', error);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = destinations.filter(d => {
        const nameMatch = d.name.toLowerCase().includes(query);
        const countryMatch = d.country.toLowerCase().includes(query);
        const tagMatch = d.tags && d.tags.some(t => t.toLowerCase().includes(query));
        return nameMatch || countryMatch || tagMatch;
      });
      renderDestinations(filtered);
    });
  }

  function renderDestinations(items) {
    gridContainer.innerHTML = '';

    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--steel);">
          <p style="font-size: 1.2rem;">Nessuna destinazione trovata per la tua ricerca.</p>
        </div>
      `;
      return;
    }

    items.forEach(item => {
      const isPublished = item.status === 'published';
      const linkHref = isPublished ? `./destinations/${item.slug}/index.html` : '#';
      const statusText = isPublished ? 'Guida Completa' : 'In Arrivo';
      const statusClass = isPublished ? 'published' : 'coming-soon';

      const tagsHtml = (item.tags || []).map(t => `<span class="dest-tag">#${t}</span>`).join('');

      const cardHtml = `
        <a href="${linkHref}" class="dest-card reveal ${!isPublished ? 'disabled' : ''}">
          <div class="dest-card-image">
            <img src="${item.coverImage}" alt="${item.name}" loading="lazy">
            <div class="dest-card-overlay"></div>
            <span class="dest-card-country">${item.country}</span>
            <span class="dest-card-status ${statusClass}">${statusText}</span>
          </div>
          <div class="dest-card-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="dest-card-tags">
              ${tagsHtml}
            </div>
          </div>
        </a>
      `;

      gridContainer.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Trigger reveal class check for dynamically inserted elements
    setTimeout(() => {
      document.querySelectorAll('#destinations-grid .reveal').forEach(el => el.classList.add('visible'));
    }, 50);
  }
});
