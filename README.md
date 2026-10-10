# Michal Hajek — Personal website

A bilingual personal homepage about VoIP, high availability, Linux and AI.
Built with static HTML, shared CSS and a small JavaScript enhancement layer.
No framework, package installation or build step is required.

## Pages

- `/`: English homepage in `index.html`.
- `/cs/`: Czech homepage in `cs/index.html`.
- `404.html`: bilingual fallback for missing pages on GitHub Pages.

Both homepages share section IDs. The language switch preserves the current
section when JavaScript is available; both pages and their navigation also work
without JavaScript.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` or `http://127.0.0.1:8000/cs/`.

## Editing

Edit the matching copy in both HTML pages and keep their section IDs aligned.
Shared presentation and behavior live in `assets/styles.css` and
`assets/main.js`. Update language-specific page descriptions and social metadata
when changing the introductory copy.

The original GitHub profile logo for `hajekmi` is stored locally in
`assets/images/github-avatar.png`. Space Grotesk is self-hosted in
`assets/fonts/`, with its SIL Open Font License in `assets/fonts/OFL.txt`.
The site needs no third-party scripts or runtime font/image requests.

## GitHub Pages

The intended public URL is `https://hajekmi.github.io`. In the repository's
**Settings → Pages**, select **Deploy from a branch**, `main`, and `/(root)`.
The `.nojekyll` file makes the site publish as static files. Publishing requires
committing and pushing the website files to the configured source branch.

Canonical links, language alternates, `robots.txt` and `sitemap.xml` use this
public domain. Update them if the website moves to a custom domain.
