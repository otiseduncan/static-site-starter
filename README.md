# Static Site Starter (Zero-Build)

This is a friction‑free static HTML starter that **just works**:
- Works the same **locally**, on **Netlify/Cloudflare Pages**, and on **GitHub Pages** (project subpaths).
- **No build tools** required. Open `index.html` or use a simple local server.
- Stable folder structure with **lowercase**, **dash‑separated** names.

## Why paths won't break
- All links and assets are written as if the site were at the domain root (e.g., `/about/`, `/_assets/css/global.css`).
- `/_assets/js/site.js` **rewrites** these paths at runtime when it detects GitHub Pages project sites
  (e.g., `user.github.io/repo`). It prefixes the repo folder automatically.

## Folder structure
```
/
  index.html
  about/index.html
  menu/index.html
  reservations/index.html
  gallery/index.html
  location/index.html
  hours/index.html
  privacy/index.html
  contact/index.html
  blog/index.html
  _assets/
    css/global.css
    js/site.js
    img/...
```

> Tip: Keep everything lowercase, no spaces. File systems and the web are **case‑sensitive** on many hosts.

## Local preview
Any of these options work:
- Double‑click `index.html` to open in your browser.
- Or run a tiny server from the folder:

```bash
# Python 3
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy (Netlify or Cloudflare Pages)
- Drag‑and‑drop the folder in the dashboard, or connect your repo. No build step needed.
- Publish directory = the **root** of this project.

## Deploy (GitHub Pages)
- Create a new repo and push this folder.
- In repo settings → Pages → set source to `main` (root).
- Your site will be at: `https://<user>.github.io/<repo>/`
- **No changes needed**; `site.js` will handle the `<repo>` prefix automatically.

## Replace images
Put your images in `_assets/img/` and update paths like:
```html
<img data-site-asset src="/_assets/img/your-image.jpg" alt="">
```
The `data-site-asset` attribute ensures `site.js` will rewrite the path on GitHub Pages.

## Common pitfalls avoided here
- No leading/trailing smart quotes (UTF‑8 files created).
- No space/case mismatches in file names.
- Navigation auto‑highlights the active page and won't 404 when moving between hosts.

Enjoy!
