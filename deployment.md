The site is a set of static files: `index.html`, the bundled `app.js`,
`style.css`, `chart.css` and `favicon.ico`. Build the bundle before
deploying:

    $ npm run build

In the `gh-pages` branch, it's necessary to commit the built `app.js`,
so it needs to be removed from `.gitignore` there.

#### What i typically do

- build the bundle (`npm run build`)
- checkout gh-pages and rebase
- commit the built assets
- force push

When switching back to master, just run `npm run build` again.
