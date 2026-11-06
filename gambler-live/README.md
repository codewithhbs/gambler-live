# GamblerLive

Premium editorial casino-review site. Next.js 14 App Router, JavaScript only, Tailwind CSS, no backend.

## Run

```
npm install
npm run dev
```

Build in this sandbox fails only because the container has no internet access
to fetch Google Fonts (Newsreader / Inter / IBM Plex Mono) — verified clean
build (47/47 routes) with a temporary font-free layout. Works normally with
real internet access.

## All 47 routes, built

- / (homepage)
- /casinos, /casinos/new, /casinos/fast-payout, /casinos/mobile
- /casinos/uk, /casinos/canada, /casinos/india, /casinos/australia
- /casino/[slug] — 6 reviews
- /crypto-casinos
- /bonuses
- /games, /games/slots, /blackjack, /roulette, /baccarat, /poker, /live-casino
- /games/[slug] — 4 game reviews
- /guides, /guides/[slug] — 4 articles
- /news, /news/[slug] — 3 articles
- /about, /contact, /responsible-gambling
- /privacy-policy, /terms, /disclaimer, /cookie-policy

## Extending

Add a row to the relevant file in /data (casinos.js, bonuses.js, games.js,
guides.js, news.js, countries.js) — pages read from these automatically via
generateStaticParams, no new route code needed for new casinos/games/guides/
news items. New categories or countries need one line added to the matching
data file's list.
