# Viral Blog

Viral Blog is a static blog-style site I use to practise building a clean reading layout with HTML, CSS, and JavaScript. It has a hero section, an introduction, a grid of sample posts, and category filters.

## What works

- Browse nine sample cards across Tech, Food, and News.
- Filter cards by topic using the category buttons.
- Use the navigation links to move between the top, About, and posts sections.
- View the layout on desktop or a smaller screen.
- Load images from the local `assets/` folder.

The cards use original sample titles and summaries to show how an editorial page might read. They are not full articles yet, and the site has no publishing backend, sign-in, or account system. The card titles are intentionally not presented as working article links.

## Run it locally

Download the repository with **Code → Download ZIP** and extract it, or clone it:

    git clone https://github.com/Vikram2005-byte/Viral-blog.git

Open `index.html` in a browser. For a local server, run this command from the project folder:

    python -m http.server 8000

Then visit [http://127.0.0.1:8000](http://127.0.0.1:8000). Keep the terminal window open while using the site.

## Project files

- `index.html` — page structure, navigation, filters, and sample cards
- `style.css` — layout, responsive styles, focus states, and card appearance
- `script.js` — category filtering and the scroll-aware header
- `assets/` — images used by the page

## Next steps

If I continue this project, I'd first add real article pages and a simple way to manage post content, then decide whether sign-in is needed. Until then, this stays a small static front-end project with no account features to maintain.
