# UConn Pride
This repo is for the UConn Pride site. Using it is fairly straightforward.

**IMPORTANT**
This repo is set up so that pushes to `master` will go into production via github pages. Please develop on a different branch and merge after approval.

## Usage
```
$ git clone {repo}
$ docker-compose up
```
The site will then be available at [http://localhost:3000](http://localhost:3000) with browsersync enabled.
### Assets
CSS and JS assets added to `/css` and `/js` will be concatenated and minified by the gulp tasks. The resulting files will be added to `/dist`. `/dist` is the directory which will be used by the site in production. Unlike other projects, please make sure to commit files in `/dist` so that they can be used.