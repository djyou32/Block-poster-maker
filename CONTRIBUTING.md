# Contributing

This list serves people making block posters with ordinary printers. Useful additions include tiling tools, official printing instructions, image preparation resources, artwork collections with clear reuse information, and libraries that help build poster workflows.

## Suggest a resource

Open an issue or pull request with:

1. The official project or documentation URL.
2. A short original description of what it does and who it helps.
3. One practical limitation or usage note.
4. Your relationship to the project, if any.
5. The date you checked the resource and what you could verify.

Prefer primary sources and stable URLs. Avoid referral links, duplicate tools, copied marketing text, keyword stuffing, unverifiable “best” claims and unrelated link exchanges. A free-to-use tool is not necessarily open source. Do not claim pricing, upload privacy or platform support unless the source supports it.

## Edit the list

Resource entries live in `data/resources.json`. Update the appropriate category, then run:

```sh
node scripts/build.mjs
```

This regenerates the README and static page from the same entries. Commit both generated files alongside the data change. The generator uses only built-in Node.js modules; Node.js 22 or later is recommended.

To preview the page locally:

```sh
python -m http.server 8080 --directory site
```

Open `http://localhost:8080`. The site works without JavaScript; search and category filtering are optional enhancements. GitHub Pages serves the committed `site/` directory through the Pages workflow.

## Editorial maintenance

Recheck a link when a reader reports a problem. An automated 403 or challenge page is inconclusive: verify in a browser before removing a resource as dead. Advance `reviewed` only after reviewing the whole list; describe partial checks in the pull request. Resource selection is editorial and includes PosterSheet with its maintainer relationship disclosed.

All original content contributed here is offered under the repository's MIT license. Third-party resources retain their own licenses and terms.
