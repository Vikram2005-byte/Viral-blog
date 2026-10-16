# Viral Blog

A static blog-style website with a hero section, image cards, and category filters. It is a front-end project for experimenting with a familiar blog layout using HTML, CSS, and JavaScript.

## What is here

- A responsive grid of sample posts with images.
- Filters for Tech, Food, News, and All.
- A header that changes when you scroll.
- Local images in `assets/`, plus icons and fonts loaded from CDNs.

The page is a prototype, not a complete publishing platform. Sign-up, login, and individual article pages are not connected to a backend. Treat the post content as sample material.

## Run it locally

Download the repository using **Code → Download ZIP** and extract it, or clone it:

    git clone https://github.com/Vikram2005-byte/Viral-blog.git

Open `index.html` in a browser. You can also run a simple server from the project folder:

    python -m http.server 8000

Then visit [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Project files

- `index.html` — page structure and post cards
- `style.css` — layout, colours, responsive rules, and scrolling header styles
- `script.js` — scroll effect and post filtering
- `assets/` — images used by the page

## Ideas for the next pass

The most useful next improvements would be real article pages, working navigation for account links, and a simple content source so new posts don't need to be copied into the HTML by hand.
