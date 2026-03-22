# Algebra 2 Flashcards (SPA)

A small, client-only single-page app for high school Algebra 2 practice (quadratics, forms, vocabulary, and related topics). Open the files locally in a browser—no build step and no backend.

Remote: [github.com/goodrichster/algebra-two-flashcards](https://github.com/goodrichster/algebra-two-flashcards)

## Run locally

1. Clone this repository or copy this folder.
2. Open `index.html` in a modern browser (double-click, or **File → Open File…**).

From this directory:

```bash
open index.html
```

No `npm install`, no server required. Scripts load as plain files, so this works with the `file://` protocol.

## Project layout

| File        | Role |
|------------|------|
| `index.html` | Page structure and UI |
| `styles.css` | Layout, card flip, responsive styles |
| `app.js`     | Topic filter, shuffle, scoring, browse mode |
| `cards.js`   | Flashcard data (`window.ALGEBRA_TWO_CARDS`) |
| `README.md`  | This file |

## Flashcard data

Cards live in `cards.js` as `window.ALGEBRA_TWO_CARDS`, an array of objects:

- `id` — unique string
- `topic` — topic id (see `TOPIC_LABELS` in `app.js` for display names)
- `type` — `rule` or `problem`
- `front` — prompt (plain text; `\n` for line breaks)
- `back` — answer or explanation

## Features

- Filter by topic or study all topics; session score and reset; review missed cards
- **One card** — flip, **Previous** / **Next**, deck progress bar
- **Browse all** — expandable list
- Keyboard: **←** / **→**, **Space** / **Enter** to flip (study mode)

## iframe parent height

When embedded, the app posts `postMessage` with `{ type: "algebra-two-flashcards-height", height }` on load, resize, and periodically so the parent can size the iframe.
