# meteor-framework7-ios
[Framework 7](http://www.idangero.us/framework7/) v1.6.4 for Meteor using the iOS theme

# How to use it?

## Add package
```
meteor add loftsteinn:framework7-ios
```

## Use Framework7 with JavaScript

Framework7 gets automatically loaded after which you can use the `Framework7` and `Dom7` global variables.

```js
if (Meteor.isClient) {
  // Initialize app
  var myApp = new Framework7();

  // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;

  // ...
}
```

# Documentation

More information can be found in the [Framework7 original documentation](http://www.idangero.us/framework7/docs/).
