// NgwaNgwa Digital — Homepage Orbit Hero
// Mouse parallax + orbit 3D tilt + scroll fade for the hero-orbit section.
(function () {
  'use strict';

  var mx = 0, my = 0, px = 0, py = 0;
  var scrollY = 0;
  var scene = null;      // orbit scene    (index.html)
  var surface = null;    // grid surface   (contact.html)
  var layers = null;     // layered depth  (services.html)
  var editorial = null;
  var heroSection = null;

  // Work showcase spotlight
  var workSection  = null;
  var workSpotlight = null;
  var wsMx = 0.5, wsMy = 0.5; // target (normalised 0-1 within section)
  var wsPx = 0.5, wsPy = 0.5; // lerped position

  // Normalise mouse to -0.5 … +0.5
  document.addEventListener('mousemove', function (e) {
    mx = e.clientX / window.innerWidth  - 0.5;
    my = e.clientY / window.innerHeight - 0.5;
  });

  // Scroll: fade editorial text out, track Y for parallax
  window.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
    if (!heroSection || !editorial) return;
    var progress = Math.min(scrollY / heroSection.offsetHeight, 1);
    editorial.style.opacity = String(Math.max(0, 1 - progress * 2.5));
  }, { passive: true });

  // RAF loop with lerp smoothing
  function tick () {
    px += (mx - px) * 0.07;
    py += (my - py) * 0.07;

    if (scene) {
      scene.style.transform =
        'rotateX(' + (-py * 22) + 'deg) rotateY(' + (px * 22) + 'deg)';
    }

    if (surface) {
      surface.style.transform =
        'rotateX(' + (42 + py * 16) + 'deg) rotateY(' + (px * 10) + 'deg)';
    }

    if (layers && layers.length) {
      for (var i = 0; i < layers.length; i++) {
        var d = parseFloat(layers[i].dataset.depth);
        layers[i].style.transform =
          'translate(' + (px * d) + 'px,' + (py * d - scrollY * d * 0.01) + 'px)';
      }
    }

    // Work showcase spotlight — lerp towards mouse within section
    if (workSpotlight) {
      wsPx += (wsMx - wsPx) * 0.055;
      wsPy += (wsMy - wsPy) * 0.055;
      workSpotlight.style.left = (wsPx * 100) + '%';
      workSpotlight.style.top  = (wsPy * 100) + '%';
    }

    requestAnimationFrame(tick);
  }

  function initMobileNav () {
    var navEl        = document.getElementById('heroNav');
    var hamburgerEl  = document.getElementById('heroNavHamburger');
    var mobileMenuEl = document.getElementById('heroNavMobileMenu');
    if (!hamburgerEl || !mobileMenuEl) return;

    function setOpen (open) {
      navEl.classList.toggle('nav-open', open);
      mobileMenuEl.classList.toggle('open', open);
      hamburgerEl.setAttribute('aria-expanded', String(open));
      mobileMenuEl.setAttribute('aria-hidden', String(!open));
    }

    hamburgerEl.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!navEl.classList.contains('nav-open'));
    });

    mobileMenuEl.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('click', function (e) {
      if (!navEl.contains(e.target) && !mobileMenuEl.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  function init () {
    scene       = document.getElementById('orbitScene');
    surface     = document.getElementById('gridSurface');
    layers      = document.querySelectorAll('.layer-kola[data-depth]');
    editorial   = document.getElementById('heroEditorial');
    heroSection = document.getElementById('heroSection');
    workSection  = document.getElementById('workSection');
    workSpotlight = document.getElementById('workSpotlight');

    // Track mouse inside work section for spotlight
    if (workSection) {
      workSection.addEventListener('mousemove', function (e) {
        var r = workSection.getBoundingClientRect();
        wsMx = (e.clientX - r.left) / r.width;
        wsMy = (e.clientY - r.top)  / r.height;
      });
    }

    if (scene || surface || (layers && layers.length) || workSpotlight) {
      requestAnimationFrame(tick);
    }
    initMobileNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
