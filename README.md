# aurelianaegis.io

Static informational site for the AurelianAegis Attestation Envelope specification. Deployed via GitHub Pages at [aurelianaegis.io](https://aurelianaegis.io).

## Structure

```
index.html                        # Site homepage
css/styles.css                    # Stylesheet
js/site-config.js                 # Update GitHub repo URL and release version here
js/main.js                        # Wires data-gh-* attributes to GitHub URLs at runtime
schema/attestation-envelope.json  # Schema $id endpoint — served at /schema/attestation-envelope.json
robots.txt
sitemap.xml
404.html
CNAME                             # aurelianaegis.io
```

## Deployment

Push to `main` on `aurelian-aegis/aurelianaegis.io`. GitHub Pages serves the root automatically.

Custom domain is set via `CNAME` file. DNS A records on IONOS point `aurelianaegis.io` to GitHub Pages IPs.

## Updating for a new schema release

1. Copy updated `schema/attestation-envelope.json` from `../aurelianaegis-attestation-schema/schema/`
2. Update `js/site-config.js` — bump `releaseVersion`
3. Update `sitemap.xml` — bump `lastmod`
4. Commit and push

This copy step is automated by the sync workflow in `aurelianaegis-attestation-schema/.github/workflows/` on each release.