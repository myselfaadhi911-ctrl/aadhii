# Adhilsha Mohammed — Personal Portfolio

A responsive, Apple-inspired five-page personal portfolio for Adhilsha Mohammed. Built with plain HTML, CSS and JavaScript — no build tools, package installation or framework required.

## Pages

- `index.html` — Home and portfolio overview
- `about.html` — About, values and professional journey
- `services.html` — Digital marketing and creative services
- `portfolio.html` — Selected project gallery
- `contact.html` — Project enquiry form

## Shared files

- `styles.css` — Design system, responsive layout and animations
- `script.js` — Shared navigation, scroll reveals, skill animation and contact form behaviour
- `assets/favicon.svg` — Browser tab icon
- `.nojekyll` — GitHub Pages helper

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Personalise before sharing

Open `script.js` and add the public contact details you want to display:

```js
const PROFILE = {
  email: "",
  instagram: "",
  linkedin: "",
  whatsapp: ""
};
```

The Contact page form prepares an email using the visitor's email app. It does not submit to a server or store messages. The form needs a public email address configured in `PROFILE.email` first.

## Content to review before final publication

- Replace concept project artwork with approved final screenshots, photographs or videos.
- Add live project URLs and case-study summaries where available.
- Add your public email and social links if you want them displayed.
- Review all education, training and experience descriptions.
- Test each page and the mobile menu on a phone.

Project cards are described as selected work, but the visual artwork is illustrative and does not claim project metrics or outcomes.

## Deploy with Vercel

This repository is connected to Vercel. Push changes to the `main` branch to trigger a deployment. The site is static and requires no build command.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in the repository.
2. Choose **Deploy from a branch**.
3. Select `main` and `/(root)`.
4. Save and wait for GitHub Pages to publish.

## Technology

HTML5 · CSS3 · Vanilla JavaScript · Google Fonts (DM Sans and Manrope)
