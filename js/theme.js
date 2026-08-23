// Ngwangwa Digital Systems — Theme Engine
// Handles dark/light mode per page with user override via localStorage.
//
// Usage:
//   1. Add data-page-theme="dark" or data-page-theme="light" to <html>
//   2. Add the anti-flash inline script to <head> (see bottom of this file)
//   3. Add <button id="themeToggle" class="theme-toggle"></button> to the page
//   4. Load this script before </body>

(function () {

  var ROOT      = document.documentElement;
  var STORE_KEY = 'ngwangwa-theme';

  // ── Read active theme ──────────────────────────────────────────────────────
  function getActiveTheme () {
    var pageDefault  = ROOT.getAttribute('data-page-theme') || 'light';
    var userOverride = localStorage.getItem(STORE_KEY);
    return userOverride !== null ? userOverride : pageDefault;
  }

  // ── Apply theme to <html> ──────────────────────────────────────────────────
  function applyTheme (theme) {
    if (theme === 'dark') {
      ROOT.classList.add('dark-mode');
      ROOT.classList.remove('light-mode');
    } else {
      ROOT.classList.remove('dark-mode');
      ROOT.classList.add('light-mode');   // blocks prefers-color-scheme media query
    }
    updateToggleButton(theme === 'dark');
  }

  // ── Update toggle button icon + label ─────────────────────────────────────
  function updateToggleButton (isDark) {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    // Sun = currently dark, click to go light
    // Moon = currently light, click to go dark
    btn.innerHTML     = isDark ? '&#9728;' : '&#9789;';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  // ── Toggle ─────────────────────────────────────────────────────────────────
  function toggle () {
    var isDark = ROOT.classList.toggle('dark-mode');
    if (isDark) {
      ROOT.classList.remove('light-mode');
    } else {
      ROOT.classList.add('light-mode');
    }
    localStorage.setItem(STORE_KEY, isDark ? 'dark' : 'light');
    updateToggleButton(isDark);
  }

  // ── Clear user override (revert to page default) ───────────────────────────
  function clearOverride () {
    localStorage.removeItem(STORE_KEY);
    applyTheme(ROOT.getAttribute('data-page-theme') || 'light');
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init () {
    // Apply correct theme
    applyTheme(getActiveTheme());

    // Wire up toggle button
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', toggle);
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API
  window.NgwaNgwaTheme = {
    toggle:        toggle,
    clearOverride: clearOverride,
    getTheme:      function () { return ROOT.classList.contains('dark-mode') ? 'dark' : 'light'; }
  };

})();

/*
 * ── ANTI-FLASH INLINE SCRIPT ──────────────────────────────────────────────
 * Paste this as the FIRST <script> inside <head> on every page.
 * It runs synchronously before the browser paints, preventing a flash
 * of the wrong theme.
 *
 * <script>
 * !function(){var r=document.documentElement,p=r.getAttribute('data-page-theme')||'light',u=localStorage.getItem('ngwangwa-theme'),a=null!==u?u:p;if(a==='dark'){r.classList.add('dark-mode')}else if(a==='light'){r.classList.add('light-mode')}}();
 * </script>
 */
