# GlobEconData Explorer

## Run locally

Install dependencies with `npm install`, then start the viewer with:

```sh
VITE_MAPBOX_TOKEN=your_public_token npm run dev
```

Place `.parquet` files in `data/`. The manifest is regenerated on each `dev` or
`build` command, and the datasets are staged under `public/data/` for Vite to
serve or include in the production output. Files must contain `h3_id` and one
or more `osm_A_var` through `osm_U_var` columns. Geometry and other columns are
ignored.

## Deploy to GitHub Pages

The `preview_app` branch is deployed by
[`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml).
In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**, then add a repository Actions secret named
`VITE_MAPBOX_TOKEN` containing a public Mapbox token with appropriate URL
restrictions, either as a repository secret or as a secret in the
`github-pages` environment. Pushes to `preview_app` build the app and publish
`dist/`; the Vite base path is derived from the repository name for project
Pages URLs.
