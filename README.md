# LymeTaxIncrease
A quickie site to display properties and their tax increase.

Code scarfed from [https://jurgenarias.github.io/movies/](https://jurgenarias.github.io/movies/)

To run/develop:

```
cd LymeTaxIncrease
browser-sync start --server --files "css/*.css" "*.js*" "*.html" "*.md"
```

## Hints

* To re-order tabs:
   - Change order of the children of `<ul class="nav nav-tabs`
   - Add `active` to the `a` link's class
   - Add `show active` to the proper child of the `tab-content` div
