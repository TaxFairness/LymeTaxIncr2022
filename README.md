# LymeTaxIncrease

A quickie site to display properties and their tax increase.

Code scarfed from [https://jurgenarias.github.io/movies/](https://jurgenarias.github.io/movies/)

To run/develop:

```bash
cd LymeTaxIncrease
browser-sync start --server --files "css/*.css" "*.js*" "*.html" "*.md"
```

## Hints

- To re-order tabs:
  - Change order of the children of `<ul class="nav nav-tabs`
  - Add `active` to the `a` link's class
  - Add `show active` to the proper child of the `tab-content` div

To publish on Github Pages:

- Sign onto the account (use the TaxFairness login)
- Settings -> Pages: configure the directory & branch to serve
- Wait. It can take up to 10 minutes for Github to serve the page.
  You can check the Actions tab to watch progresss.
