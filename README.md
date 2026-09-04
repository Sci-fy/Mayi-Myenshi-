# Maye Myenshi / Huboduwe TV portfolio site

## 1. Add the real photos
Drop these files into the `images` folder, using these exact names (or edit the `src=` in `index.html` if you name them differently):

- `huboduwe-logo.png` — the Huboduwe TV logo (used in header + footer)
- `maye-hero.jpg` — a wide/landscape photo of Maye (ideally mid-dance), used full-bleed in the hero
- `maye-portrait.jpg` — a portrait-style photo for the About section
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg` — performance/event/behind-the-scenes photos

Until real photos are added, each spot shows a tasteful placeholder pattern instead of a broken image icon, so the site still looks intentional.

## 2. Add your Google Form link
Open `script.js` and replace the placeholder URL on the first line:

```js
const HIRE_FORM_URL = "https://forms.gle/PASTE-YOUR-FORM-ID-HERE";
```

with your real form link. The "Hire Maye for your event" button uses this automatically.

## 3. Update social links
In `index.html`, find the footer `<div class="footer-links">` and swap the `#` hrefs for real YouTube / Facebook / Instagram / TikTok links.

## 4. Open it
Just open `index.html` in a browser — no build step needed.
