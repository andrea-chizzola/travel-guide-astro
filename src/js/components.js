/**
 * Dynamic HTML Component Injector for Static Navigation and Footer
 */
document.addEventListener('DOMContentLoaded', async () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  // Detect relative root path based on depth
  const isSubdir = window.location.pathname.includes('/destinations/');
  const basePath = isSubdir ? '../../' : './';

  // Inject Navigation
  if (navPlaceholder) {
    try {
      const res = await fetch(`${basePath}components/nav.html`);
      if (res.ok) {
        let html = await res.text();
        // Adjust relative hrefs if in a subdirectory
        if (isSubdir) {
          html = html.replace(/href="\.\//g, 'href="../../');
        }
        navPlaceholder.innerHTML = html;
      }
    } catch (e) {
      console.error('Error loading navigation:', e);
    }
  }

  // Inject Footer
  if (footerPlaceholder) {
    try {
      const res = await fetch(`${basePath}components/footer.html`);
      if (res.ok) {
        let html = await res.text();
        if (isSubdir) {
          html = html.replace(/href="\.\//g, 'href="../../');
        }
        footerPlaceholder.innerHTML = html;
      }
    } catch (e) {
      console.error('Error loading footer:', e);
    }
  }
});
