# Adhilsha Mohammed — Personal Portfolio

A responsive, Apple-inspired personal portfolio for Adhilsha Mohammed. It is built with plain HTML, CSS and JavaScript — no build tools, package installation or framework required.

## Project files

- `index.html` — page structure and website content
- `styles.css` — layout, responsive styling, colours and animations
- `script.js` — mobile navigation, scroll reveals, skill animations and contact-link setup
- `assets/favicon.svg` — browser tab icon
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing

## Preview on your computer

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or start a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Personalise the website

Open `script.js` and update the `PROFILE` object near the top of the file with your own public contact details. Leave any field blank until you are comfortable publishing it.

```js
const PROFILE = {
  email: "",
  instagram: "",
  linkedin: "",
  whatsapp: ""
};
```

The email contact button activates when an email address is supplied. The other fields are reserved for adding social links when you decide to display them.

## Content to review before publishing

- Replace the abstract monogram artwork with your own professional portrait if desired.
- Replace concept-style project artwork with approved screenshots, photos or videos.
- Add live project links and short case studies where available.
- Confirm your education, training and career timeline wording.
- Add your public email, WhatsApp and social profile details.

The portfolio does not claim unverified performance numbers or client results. Project cards are described as sample work/concepts until real case studies are added.

## Publish with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. GitHub Pages will provide a public website URL after its deployment completes.

## Publish with Vercel or Netlify

Import this repository into Vercel or Netlify. No build command is needed; use the repository root as the publish/output directory.

## Technology

HTML5 · CSS3 · Vanilla JavaScript · Google Fonts (DM Sans and Manrope)
