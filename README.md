# How to use this lightbox

> You need to include, only the `custom-lightbox.js` file for the lightbox to work. [View demo.](https://simple-lightbox.netlify.app/)

To let any image open in lighbox, simply add `data-lightbox` attribute to that image. Example below:
```html
<img src="img/lighthouse.svg" alt="Lighthouse - Jenkins for jira" data-lightbox>
```
To conditionally add the lightbox script and styles, add this code at the bottom of your html file. 

**Note:** In this example the `script` will always load, since the `if` block always resolved to `true`. You can bind that value to something else to control is this 
light box `script` loads in a page or not.
```html
<script>
    (function() {
      if (true) { // always true
        document.write('<script src="js/custom-lightbox.js"><\/script>');
      }
    })();
</script>
```

That's all. Thank you.
