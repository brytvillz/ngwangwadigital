# Quick Reference Guide — NgwaNgwa Digital Website

## 🎨 Brand Colors (Copy & Paste)

```
Off-white:     #F7F7F2
Sage green:    #7A8C68
Dark olive:    #3D4F2E
Near black:    #1A1A1A
Orange accent: #FF6B35
```

---

## 📞 Contact Info to Update

**Find and replace these throughout all HTML files:**

| Placeholder                 | Replace With          |
| --------------------------- | --------------------- |
| `hello@ngwangwadigital.com` | Your email            |
| `+234 800 000 0000`         | Your phone number     |
| `@ngwangwa.digital`         | Your Instagram handle |
| `Anambra, Nigeria`          | Your location         |

**In `js/main.js` line 75:**

```javascript
const phoneNumber = "2348000000000"; // ← Update WhatsApp number here
```

---

## 🔗 Important Links to Update

| Item                  | Current Link                             | Update To              |
| --------------------- | ---------------------------------------- | ---------------------- |
| Virtual Waitress Demo | `https://kdr-menu.netlify.app`           | Your live demo URL     |
| Instagram             | `https://instagram.com/ngwangwa.digital` | Your Instagram profile |
| Email                 | `mailto:hello@ngwangwadigital.com`       | Your email             |

---

## 📄 File Structure Quick Reference

```
/
├── index.html          → Home page
├── services.html       → Services
├── portfolio.html      → Portfolio
├── products.html       → Virtual Waitress
├── contact.html        → Contact form
├── css/
│   ├── main.css        → All main styles
│   └── animations.css  → Scroll animations
├── js/
│   ├── main.js         → Navigation, forms, utilities
│   └── animations.js   → Intersection Observer animations
└── components/
    ├── nav.html        → Reusable navigation (reference)
    └── footer.html     → Reusable footer (reference)
```

---

## 🎯 Adding New Portfolio Items

**Copy this block in `portfolio.html`:**

```html
<div class="portfolio-item animate-on-scroll fade-up" data-category="websites">
  <div
    class="portfolio-image"
    style="background: linear-gradient(135deg, #7A8C68, #3D4F2E);"
  >
    <span>🏭</span>
    <!-- Replace with emoji or image -->
  </div>
  <div class="portfolio-content">
    <span class="portfolio-category">Website</span>
    <h3>Project Name</h3>
    <p>Brief description of the project.</p>
    <a href="#" class="portfolio-link">View Project →</a>
  </div>
</div>
```

**Categories:** `websites`, `seo`, `products`, `systems`

---

## 📝 Common Tasks

### Change Navigation Links

Edit in each HTML file or update `components/nav.html` as reference:

```html
<ul class="nav-links">
  <li><a href="services.html">Services</a></li>
  <li><a href="portfolio.html">Portfolio</a></li>
  <li><a href="products.html">Products</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
```

### Update Footer Copyright Year

Search for: `© 2025` → Replace with current year

### Change Button Colors

In `css/main.css`, update button classes:

```css
.btn-primary {
  background: var(--orange-accent);
  color: var(--off-white);
}
```

### Add New Service

In `services.html`, duplicate a service section and update content.

---

## 🚀 Deployment Commands

### Test Locally

```bash
# Simple HTTP server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Deploy to Netlify

1. **Drag & Drop:** Drag entire folder to netlify.com/drop
2. **Or via Git:** Connect GitHub repo in Netlify dashboard

### Check Form Submissions

- Go to: Netlify Dashboard → Forms tab
- All submissions appear there

---

## 🔍 SEO Quick Wins

**Every page should have:**

```html
<title>Page Title | NgwaNgwa Digital</title>
<meta name="description" content="Page description under 160 chars" />
```

**Test your meta tags:**

- https://metatags.io/
- https://cards-dev.twitter.com/validator

---

## 🐛 Quick Fixes

### Mobile menu not working?

Check `js/main.js` is loaded after HTML

### Forms not submitting?

- Only works on live Netlify site (not localhost)
- Check `netlify` attribute is on `<form>` tag

### Animations not triggering?

- Check `js/animations.js` loads before `js/main.js`
- Clear browser cache

### Styles not applying?

- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

## 📊 Performance Checklist

- [ ] Compress images (TinyPNG.com)
- [ ] Images under 200KB each
- [ ] Lazy loading enabled (`loading="lazy"`)
- [ ] No console errors
- [ ] Lighthouse score 90+

**Test Performance:**

- https://pagespeed.web.dev/

---

## 🎨 Animation Classes

Add these classes to elements for scroll animations:

| Class                            | Effect                       |
| -------------------------------- | ---------------------------- |
| `.animate-on-scroll.fade-up`     | Fades in from below          |
| `.animate-on-scroll.fade-in`     | Simple fade in               |
| `.animate-on-scroll.slide-right` | Slides from right            |
| `.animate-on-scroll.slide-left`  | Slides from left             |
| `.stagger-container`             | Children animate in sequence |

**Example:**

```html
<div class="animate-on-scroll fade-up">This will animate on scroll</div>
```

---

## 📱 Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 768px) {
  /* Desktop styles */
}
```

---

## 🔑 Netlify Environment

**Forms work only when deployed to Netlify**

Required form attributes:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields -->
</form>
```

---

## 💡 Pro Tips

1. **Always backup** before making big changes
2. **Test on mobile** first (80% of Nigerian traffic)
3. **Keep it fast** — Nigerian networks are slow
4. **Answer inquiries fast** — NgwaNgwa = Quick Quick!
5. **Update portfolio** regularly with new work
6. **Monitor forms** daily for new leads

---

## 📞 Need Help?

**Resources:**

- Netlify Docs: https://docs.netlify.com/
- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Reference: https://developer.mozilla.org/en-US/docs/Web/CSS

**Community:**

- Web design Twitter/X
- Nigerian developer communities
- Netlify Discord

---

**Built with ❤️ in Nigeria 🇳🇬**

_NgwaNgwa means Quick Quick in Igbo — speed is in our DNA_ ⚡
