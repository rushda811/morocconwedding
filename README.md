# Salman & Seema — Wedding Invitation

An animated, single-page wedding invitation: a flower card that opens on tap, background
music with a play/pause button, a countdown to the wedding date, the evening's schedule,
a photo gallery, and a guest book.

Built with TanStack Start (React 19 + TypeScript + Tailwind CSS v4), bundled with Vite.

## Run it locally

You need Node.js 20 or newer.

```sh
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:8080).

Other useful commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site for development with live reload |
| `npm run build` | Produces the production site in `dist/` |
| `npm run preview` | Serves the production build so you can check it |
| `npm run lint` | Checks code style |
| `npm test` | Runs the test suite |

`bun install` and `bun run dev` work too — `bun.lock` is included.

## Where things live

| Path | Contents |
| --- | --- |
| `src/routes/index.tsx` | The whole invitation: opening card, names, date, schedule, gallery, guest book |
| `src/styles.css` | Colours, fonts and the gold text treatment |
| `src/assets/` | All images and the music file, imported directly by the page |
| `src/routes/__root.tsx` | Page shell and document head (title, sharing preview) |

## Editing the details

Open `src/routes/index.tsx` and look for:

- `NAMES`, the couple's names and the headline text.
- The wedding date used by the countdown (August 11, 2027).
- `SCHEDULE`, the list of times and events for the evening.
- The attire colours (ivory, gold, sage).
- `src/assets/gallery-1.jpg` … `gallery-4.jpg` — replace these four sample photos with
  your own, keeping the same file names, or change the imports at the top of the file.

The music is `src/assets/wedding-music.mp3`; swap in your own file with the same name to
change the song.

## Guest book note

Wishes are saved in each guest's own browser, so a guest only ever sees what they wrote.
To share wishes between guests you would need to add storage with user accounts
(for example Lovable Cloud, Supabase, or your own API).

## Deploying

`npm run build` outputs a static/edge bundle under `dist/` (a Cloudflare Worker build by
default, configured in `vite.config.ts`). Change the nitro target there if you want to
host it somewhere else.
