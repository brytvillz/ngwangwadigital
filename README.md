# NgwaNgwa Digital — Official Website

> **"We Build Business Systems That Win Clients"**

This is the official website for **NgwaNgwa Digital**, a Nigerian digital agency that builds professional websites, SEO solutions, and digital products for African businesses competing internationally.

---

## 🌍 About NgwaNgwa Digital

**NgwaNgwa** means "Quick Quick" in Igbo. We deliver fast, we deliver quality, and we understand the Nigerian market from the inside out.

**Target Market:**

- Nigerian B2B businesses dealing with foreign clients (suppliers, manufacturers, industrial equipment dealers, import/export companies, commodity traders)
- Small and medium local businesses

**Positioning:**
Built by Nigerians. Built for Nigeria. Premium international quality at local prices.

---

## 🎨 Brand Identity

### Colors

```css
--off-white: #f7f7f2 /* Backgrounds */ --sage-green: #7a8c68
  /* Primary brand color */ --dark-olive: #3d4f2e /* Text, headings */
  --near-black: #1a1a1a /* Dark sections, body text */ --orange-accent: #ff6b35
  /* CTA buttons, highlights */;
```

### Typography

- **Poppins** — Hero headlines, section titles, all headers (from Google Fonts)
- **DM Sans** — All body text, navigation, buttons (from Google Fonts)

---

## 📁 Website Structure

```
NGWANGWADIGITAL.com/
├── index.html          ← Home page (landing page)
├── services.html       ← Services page
├── portfolio.html      ← Portfolio/work showcase
├── products.html       ← Products (Virtual Waitress)
├── contact.html        ← Contact page with form
├── css/
│   ├── main.css        ← Main styles
│   └── animations.css  ← Scroll animations
├── js/
│   ├── main.js         ← Main JavaScript
│   └── animations.js   ← Animation controllers
├── components/
│   ├── nav.html        ← Reusable navigation
│   └── footer.html     ← Reusable footer
└── README.md           ← This file
```

---

## 🚀 Tech Stack

- **Pure HTML, CSS, Vanilla JavaScript**
- No frameworks
- No build tools
- Fast, clean, and deployable to Netlify by drag and drop
- SEO optimized from the ground up

---

## 📄 Pages Overview

### 1. Home (`index.html`)

- Hero section with brand positioning
- Problem statement (why businesses need digital presence)
- Services overview
- Why NgwaNgwa section
- Virtual Waitress product teaser
- CTA banner
- Footer

### 2. Services (`services.html`)

- Four detailed service sections:
  1. Business Website Development
  2. SEO Optimization
  3. Digital Business Systems
  4. Mobile-First Design
- Process overview
- Pricing indicators

### 3. Portfolio (`portfolio.html`)

- Featured project: Virtual Waitress
- Portfolio grid with filter tabs
- Client testimonials
- Placeholder portfolio items (ready for real projects)

### 4. Products (`products.html`)

- Virtual Waitress full feature showcase
- Live demo link
- Email waitlist capture
- Future products teaser
- How it works section

### 5. Contact (`contact.html`)

- Two-column layout (contact info + form)
- WhatsApp integration
- Netlify Forms integration
- FAQ section
- Success message handling

---

## 🎯 Key Features

### SEO Optimized

- Proper meta tags on every page
- Open Graph tags for social sharing
- Semantic HTML throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text ready for images
- Fast loading optimized for Nigerian networks

### Mobile-First

- Fully responsive design
- Works perfectly on all devices
- Hamburger menu on mobile
- Touch-friendly navigation

### Performance

- No unnecessary libraries
- CSS custom properties for easy theming
- Lazy loading ready
- Target Lighthouse score: 90+

### Animations

- Scroll-triggered animations using Intersection Observer API
- Smooth transitions throughout
- Reduced motion support for accessibility

---

## 🛠️ Customization Guide

### 1. Changing Colors

Edit the CSS custom properties in `css/main.css`:

```css
:root {
  --off-white: #f7f7f2;
  --sage-green: #7a8c68;
  --dark-olive: #3d4f2e;
  --near-black: #1a1a1a;
  --orange-accent: #ff6b35;
}
```

### 2. Updating Contact Information

**Email & Phone:**
Search for these placeholders and replace:

- `hello@ngwangwadigital.com` → Your email
- `+234 800 000 0000` → Your phone number
- `2348000000000` → Your WhatsApp number (in `js/main.js`)

**Instagram:**
Replace `@ngwangwa.digital` and the link throughout.

**Location:**
Replace "Anambra, Nigeria 🌍" with your location.

### 3. Adding Portfolio Items

In `portfolio.html`, duplicate this structure:

```html
<div class="portfolio-item animate-on-scroll fade-up" data-category="websites">
  <div
    class="portfolio-image"
    style="background: linear-gradient(135deg, #7A8C68, #3D4F2E);"
  >
    <span>🏭</span>
  </div>
  <div class="portfolio-content">
    <span class="portfolio-category">Website</span>
    <h3>Project Name</h3>
    <p>Project description here.</p>
    <a href="#" class="portfolio-link">View Project →</a>
  </div>
</div>
```

Change `data-category` to: `websites`, `seo`, `products`, or `systems`

### 4. Updating Virtual Waitress Demo Link

When the Virtual Waitress goes live:

1. Replace `https://kdr-menu.netlify.app` throughout
2. Update the demo link in:
   - `index.html` (hero section + products teaser)
   - `products.html` (main product section)
   - `portfolio.html` (featured project)

### 5. Changing Navigation Links

Edit `components/nav.html` or the navigation directly in each HTML file:

```html
<ul class="nav-links">
  <li><a href="services.html">Services</a></li>
  <li><a href="portfolio.html">Portfolio</a></li>
  <li><a href="products.html">Products</a></li>
  <li><a href="contact.html">Contact</a></li>
</ul>
```

---

## 🌐 Deployment to Netlify

### Method 1: Drag & Drop (Easiest)

1. Go to [Netlify.com](https://netlify.com) and sign up/login
2. Drag the entire `NGWANGWADIGITAL.com` folder into Netlify's deploy zone
3. Your site is live! 🎉

### Method 2: Continuous Deployment from Git

1. Push this folder to a GitHub repository
2. In Netlify, click "New site from Git"
3. Connect your GitHub repo
4. Deploy settings:
   - **Build command:** Leave empty (no build needed)
   - **Publish directory:** `/` (root)
5. Click "Deploy site"

### Connecting a Custom Domain

1. In Netlify, go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `ngwangwadigital.com`)
4. Follow instructions to update DNS records with your domain provider
5. Netlify will automatically provision SSL certificate

**Recommended DNS Settings:**

```
Type    Name    Value
A       @       75.2.60.5 (Netlify's IP)
CNAME   www     your-site.netlify.app
```

---

## 📧 Netlify Forms Setup

The contact form is already configured for Netlify Forms. After deployment:

1. Go to **Netlify Dashboard** → **Forms**
2. You'll see the "contact" form listed
3. Form submissions will appear there
4. Set up email notifications:
   - Go to **Settings** → **Forms** → **Form notifications**
   - Add your email address

**Important:** Forms only work on the live Netlify site, not locally.

---

## 🧪 Testing Locally

Since this is pure HTML/CSS/JS with no build process:

1. Simply open `index.html` in your browser
2. Or use a simple local server:

```bash
# If you have Python installed
python -m http.server 8000

# Or use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`

**Note:** Netlify Forms won't work locally — they only work on the deployed site.

---

## 📱 Social Media Integration

### Instagram

Replace the Instagram handle in footer and contact page:

- `@ngwangwa.digital`
- Link: `https://instagram.com/ngwangwa.digital`

### WhatsApp

Update the WhatsApp number in `js/main.js`:

```javascript
function openWhatsApp(message = "") {
  const phoneNumber = "2348000000000"; // ← Replace this
  const encodedMessage = encodeURIComponent(
    message || "Hi NgwaNgwa Digital...",
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}
```

---

## 🎨 Adding Images

To add real images:

1. Create an `images/` folder in the root
2. Add your images there
3. Update references in HTML:

```html
<!-- Instead of placeholder gradient -->
<div class="portfolio-image">
  <img src="images/project-name.jpg" alt="Project description" loading="lazy" />
</div>
```

**Recommended Image Specs:**

- Portfolio items: 800x450px (16:9 ratio)
- Hero images: 1920x1080px
- Logo: SVG or PNG (transparent background)
- Compress images before upload (use TinyPNG.com)

---

## 🔍 SEO Checklist

After customization, verify:

- [ ] All page titles are unique and descriptive
- [ ] All meta descriptions are under 160 characters
- [ ] Open Graph images are set (create a 1200x630px image)
- [ ] All images have alt text
- [ ] Internal links work correctly
- [ ] External links have `rel="noopener"` for security
- [ ] Mobile responsiveness is perfect
- [ ] Site loads fast on slow networks

**Submit to Google:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your domain)
3. Verify ownership (multiple methods available)
4. Submit your sitemap (can be created at Netlify or manually)

---

## 💡 Future Enhancements

Ideas to expand the site:

1. **Blog section** — Share digital marketing tips for Nigerian businesses
2. **Case studies page** — Detailed client success stories
3. **Resources page** — Free downloadables (checklists, guides)
4. **Live chat** — Add Tawk.to or similar for instant support
5. **Analytics** — Add Google Analytics or Plausible for visitor tracking
6. **Multiple languages** — Add Igbo or Pidgin versions

---

## 🐛 Troubleshooting

### Forms not working

- Make sure you deployed to Netlify (forms don't work locally)
- Check that `netlify` attribute is present on `<form>` tag
- Verify form name matches in hidden input field

### Animations not triggering

- Check browser console for JavaScript errors
- Ensure `js/animations.js` loads before `js/main.js`
- Test in different browsers

### Mobile menu not opening

- Verify `js/main.js` is loaded
- Check for JavaScript errors in console
- Test that `.menu-toggle` button has the correct class

### Styles not applying

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that CSS files are linked correctly
- Verify no CSS syntax errors

---

## 📞 Support

Built with ❤️ by NgwaNgwa Digital

**Contact:**

- Email: hello@ngwangwadigital.com
- WhatsApp: +234 800 000 0000
- Instagram: @ngwangwa.digital
- Location: Anambra, Nigeria 🇳🇬

---

## 📄 License

This website is proprietary to NgwaNgwa Digital.

---

## 🚀 Quick Start Reminder

1. **Customize:** Update contact info, colors, content
2. **Add content:** Replace placeholder portfolio items with real projects
3. **Deploy:** Drag folder to Netlify
4. **Domain:** Connect your custom domain
5. **Test:** Check all pages and forms
6. **Launch:** Share with the world! 🌍

---

**Built in Nigeria 🇳🇬 | NgwaNgwa Digital © 2025**

_NgwaNgwa means Quick Quick in Igbo — and that's exactly how we work._ ⚡
